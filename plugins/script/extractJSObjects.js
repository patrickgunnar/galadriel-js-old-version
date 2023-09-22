function extractJSObjects(node, processedObjects = new Set()) {
    const extractedObjects = [];

    // Generate a unique hash for the current object node
    const nodeHash = JSON.stringify(node);

    // Check if this object has been processed before
    if (processedObjects.has(nodeHash)) {
        return extractedObjects;
    }

    // Add the hash of this object to the processed set
    processedObjects.add(nodeHash);

    if (node.type === "ObjectExpression") {
        const obj = {};

        for (const property of node.properties) {
            const key = property.key.name || property.key.value;

            if (property.value.type === "ObjectExpression") {
                obj[key] = extractJSObjects(property.value, processedObjects);
            } else {
                const value = property.value.value;
                obj[key] = value;
            }
        }

        extractedObjects.push(obj);
    }

    for (const key in node) {
        if (node[key] && typeof node[key] === "object" && key !== "parent") {
            const childObjects = extractJSObjects(node[key], processedObjects); // Recursive call for object properties
            extractedObjects.push(...childObjects);
        }
    }

    return extractedObjects;
}

module.exports = { extractJSObjects };
