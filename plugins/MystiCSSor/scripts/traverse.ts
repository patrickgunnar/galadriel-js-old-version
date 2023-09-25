type GenericRecord = Record<string, any>;

const extractKeyValue = (__node: GenericRecord) => {
    if (__node.type === "Literal") {
        return __node.value;
    } else if (__node.type === "ObjectExpression") {
        const __nestedKeyValues = __node.properties.map((__property: GenericRecord) => ({
            [__property.key.name]: extractKeyValue(__property.value),
        }));

        return Object.assign({}, ...__nestedKeyValues);
    }
};

const combinedObject = (__nodeList: GenericRecord[][]): GenericRecord[][] => {
    return __nodeList.map((__nodes: GenericRecord[]) => {
        return __nodes.reduce((__acc: any, __property: any) => {
            try {
                const __propertyName = __property.key?.name;

                if (__propertyName) {
                    const __value = extractKeyValue(__property.value);
                    __acc[__propertyName] = __value;

                    return __acc;
                }
            } catch (error: any) {
                console.error("An error occurred:", error);
            }
        }, {});
    });
};

const traverse = (__ast: GenericRecord): GenericRecord[][] => {
    const __result: GenericRecord[][] = [];

    const extractObjects = (__node: GenericRecord) => {
        if (__node.type === "ObjectExpression") {
            const __objsArray: GenericRecord[] = [];

            for (const __prop of __node.properties) {
                if (__prop.type === "SpreadElement") {
                    continue;
                }

                __objsArray.push(__prop);
            }

            const __stringifiedArray = JSON.stringify(__objsArray);

            if (
                !__result.some(
                    (__objArray) =>
                        JSON.stringify(__objArray) === __stringifiedArray
                )
            ) {
                __result.push(__objsArray);
            }
        } else if (__node.body && Array.isArray(__node.body)) {
            for (const __statement of __node.body) {
                if (
                    __statement.type === "ExpressionStatement" &&
                    __statement.expression.type === "CallExpression" &&
                    __statement.expression.callee.name === "createStyles"
                ) {
                    if (
                        __statement.expression.arguments.length > 0 &&
                        __statement.expression.arguments[0].type.includes(
                            "FunctionExpression"
                        )
                    ) {
                        extractObjects(
                            __statement.expression.arguments[0].body
                        );
                    }
                }
            }
        } else if (__node.consequent && __node.alternate) {
            extractObjects(__node.consequent);
            extractObjects(__node.alternate);
        }

        for (const __key in __node) {
            if (__node[__key] && typeof __node[__key] === "object") {
                if (__node.type === "ObjectExpression") {
                    if (Array.isArray(__node[__key])) {
                        continue;
                    }
                }

                extractObjects(__node[__key]);
            }
        }
    };

    extractObjects(__ast);

    return combinedObject(__result);
};

export { traverse, combinedObject };
