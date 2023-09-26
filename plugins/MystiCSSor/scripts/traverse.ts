type Property = Record<string, any>;

const extractKeyValue = (node: Property): any => {
    if (node.type === "Literal") {
        return node.value;
    } else if (node.type === "ObjectExpression") {
        const nestedKeyValues = node.properties.map((property: Property) => ({
            [property.key.name]: extractKeyValue(property.value),
        }));

        return Object.assign({}, ...nestedKeyValues);
    }

    return null; // Handle unknown node types
};

const combineObjects = (nodesList: Property[][]): Property[] => {
    return nodesList.map((nodes) => {
        return nodes.reduce((acc: any, property: any) => {
            try {
                const propertyName = property.key?.name;

                if (propertyName) {
                    const value = extractKeyValue(property.value);

                    acc[propertyName] = value;
                }
            } catch (error: any) {
                console.error("An error occurred:", error);
            }

            return acc;
        }, {});
    });
};

const traverse = (ast: Property): Property[] => {
    const result: Property[][] = [];

    const extractObjects = (node: Property) => {
        if (node.type === "ObjectExpression") {
            const objectsArray: Property[] = [];

            for (const prop of node.properties) {
                if (prop.type === "SpreadElement") {
                    continue;
                }

                objectsArray.push(prop);
            }

            const stringifiedArray = JSON.stringify(objectsArray);

            if (
                !result.some(
                    (objArray) => JSON.stringify(objArray) === stringifiedArray
                )
            ) {
                result.push(objectsArray);
            }
        } else if (node.consequent && node.alternate) {
            extractObjects(node.consequent);
            extractObjects(node.alternate);
        }

        for (const key in node) {
            if (node[key] && typeof node[key] === "object") {
                if (node.type === "ObjectExpression") {
                    if (Array.isArray(node[key])) {
                        continue;
                    }
                }

                extractObjects(node[key]);
            }
        }
    };

    extractObjects(ast);

    return combineObjects(result);
};

export { traverse };
