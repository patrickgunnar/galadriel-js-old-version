function extractJSObjects(node) {
    const extractedObjects = [];

    if (node.type === "ObjectExpression") {
        const obj = {};

        for (const property of node.properties) {
            if (
                property.type === "Property" &&
                property.value.type === "Literal"
            ) {
                const key = property.key.name || property.key.value;
                const value = property.value.value;

                obj[key] = value;
            }
        }

        extractedObjects.push(obj);
    }

    for (const key in node) {
        if (node[key] && typeof node[key] === "object") {
            const childObjects = extractJSObjects(node[key]); // Recursive call for object properties
            extractedObjects.push(...childObjects);
        }
    }

    return extractedObjects;
}

module.exports = { extractJSObjects };
