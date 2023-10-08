"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractClasses = void 0;
const refineCSSClassesFromNode_1 = require("./refineCSSClassesFromNode");
const extractClasses = (node) => {
    if (node.type === "ObjectExpression" && node.properties) {
        const styleClasses = [];
        const properties = node.properties;
        try {
            properties.forEach((property) => {
                if (property.type === "ObjectProperty" && property.key) {
                    const key = property.key.name;
                    if (key) {
                        const classValues = (0, refineCSSClassesFromNode_1.refineCSSClassesFromNode)(key, property.value);
                        if (classValues)
                            styleClasses.push(classValues);
                    }
                }
            });
            return styleClasses.join(" ");
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    }
    return null;
};
exports.extractClasses = extractClasses;
