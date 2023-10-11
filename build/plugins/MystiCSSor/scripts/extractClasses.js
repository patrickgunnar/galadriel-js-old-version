"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractClasses = void 0;
const refineCSSClassesFromNode_1 = require("./refineCSSClassesFromNode");
const extractClasses = (node, coreAST) => {
    if (node.type === "ObjectExpression" && node.properties) {
        const properties = node.properties;
        try {
            properties.forEach((property) => {
                if (property.type === "ObjectProperty" && property.key) {
                    const key = property.key.name;
                    if (key) {
                        (0, refineCSSClassesFromNode_1.refineCSSClassesFromNode)(key, property.value, coreAST);
                    }
                }
            });
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    }
};
exports.extractClasses = extractClasses;
