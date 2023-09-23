const decodeJSObjects = (__node: any, __processedObj = new Set()) => {
    const __decodeObjs: Array<object> = [];

    // Generate a unique hash for the current object node
    const __nodeHash = JSON.stringify(__node);

    // Check if this object has been processed before
    if (__processedObj.has(__nodeHash)) {
        return __decodeObjs;
    }

    // Add the hash of this object to the processed set
    __processedObj.add(__nodeHash);

    if (__node.type === "ObjectExpression") {
        try {
            const __obj: any = {};

            for (const __property of __node.properties) {
                const __key = __property.key.name || __property.key.value;

                if (__property.value.type === "ObjectExpression") {
                    // Recursive call for object properties
                    __obj[__key] = decodeJSObjects(
                        __property.value,
                        __processedObj
                    );
                } else {
                    const __value = __property.value.value;

                    __obj[__key] = __value;
                }
            }

            __decodeObjs.push(__obj);
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    for (const __key in __node) {
        try {
            if (
                __node[__key] &&
                typeof __node[__key] === "object" &&
                __key !== "parent"
            ) {
                // Recursive call for object properties
                const __childrenObjs = decodeJSObjects(
                    __node[__key],
                    __processedObj
                );

                if (__childrenObjs) __decodeObjs.push(...__childrenObjs);
            }
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    return __decodeObjs;
};

export { decodeJSObjects };
