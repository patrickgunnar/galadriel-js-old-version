const { SyntaxKind, forEachChild } = require("typescript");

function extractTSObjects(node) {
    const extractedObjects = [];

    if (node.kind === SyntaxKind.ObjectLiteralExpression) {
        const obj = {};

        for (const property of node.properties) {
            if (property.kind === SyntaxKind.PropertyAssignment) {
                const key = property.name.text;
                const value = property.initializer.text;

                obj[key] = value;
            }
        }

        extractedObjects.push(obj);
    }

    forEachChild(node, (childNode) => {
        const childObjects = extractTSObjects(childNode); // Recursive call for child nodes
        extractedObjects.push(...childObjects);
    });

    return extractedObjects;
}

module.exports = { extractTSObjects };
