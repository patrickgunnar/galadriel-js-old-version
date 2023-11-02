"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformAstNode = void 0;
const hashingHex_1 = require("./hashingHex");
function transformNode(key, value, module, filePath, propertyKey = null) {
    // if its is a dynamic class
    if (!value.includes("$")) {
        // generates the class name
        const hashedProperty = (0, hashingHex_1.hashingHex)(JSON.stringify(`${key}:${value}`).replace(/\s+/g, ""));
        const className = `galadriel__${hashedProperty}${propertyKey ? `-g${(0, hashingHex_1.hashingHex)(propertyKey, false, true)}` : ""}${module && filePath ? `-${(0, hashingHex_1.hashingHex)(filePath, false, true)}` : ""}`;
        return {
            transformedName: className,
        };
    }
    else if (value.includes("$")) { // if the value is a static or configured class
        // if its is a dynamic class
        const selector = value.includes(":") ? value.split(":")[0].replace("$", "") : value.replace("$", "");
        const className = `${selector}${propertyKey ? `-g${(0, hashingHex_1.hashingHex)(propertyKey, false, true)}` : ""}${module && filePath ? `-${(0, hashingHex_1.hashingHex)(filePath, false, true)}` : ""}`;
        return {
            transformedName: className,
        };
    }
    return {
        transformedName: null
    };
}
function generatesTransformation(t, node, module, filePath) {
    // if the current node is not an object expression
    if (!t.isObjectExpression(node))
        return;
    // loops through the node properties
    for (const property of node.properties) {
        // if the property is not an identifier
        if (!t.isIdentifier(property.key))
            continue;
        // if the property's value type is a string literal
        if (property.value.type === "StringLiteral") {
            // transform the property's value
            const { transformedName } = transformNode(property.key.name, property.value.value, module, filePath);
            // if the transformed name
            if (transformedName) {
                property.value.value = transformedName;
            }
            // if the property's value is an object expression
        }
        else if (property.value.type === "ObjectExpression") {
            // loops through the nested properties
            for (const nestedProperty of property.value.properties) {
                // if the nested property's value type is a string literal
                if (nestedProperty.value.type === "StringLiteral") {
                    // transform the property's value
                    const { transformedName } = transformNode(nestedProperty.key.name, nestedProperty.value.value, module, filePath, property.key.name);
                    // if the transformed name
                    if (transformedName) {
                        nestedProperty.value.value = transformedName;
                    }
                }
            }
        }
    }
}
function transformAstNode(t, rootNode, module, filePath) {
    // loop stack
    const stack = [rootNode];
    // loops while exists the stack
    while (stack.length > 0) {
        // get the current node
        const node = stack.pop();
        // generates the transformations
        generatesTransformation(t, node, module, filePath);
        // recursively process nested properties
        for (const nestedProperty in node) {
            // if current node element and type of the current node element is object and 
            // current node is not of the type of object expression and not current node
            // element an array
            if (node[nestedProperty] &&
                typeof node[nestedProperty] === 'object' &&
                !(node.type === "ObjectExpression" && Array.isArray(node[nestedProperty]))) {
                // push the current node element into the stack
                stack.push(node[nestedProperty]);
            }
        }
    }
}
exports.transformAstNode = transformAstNode;
