"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refineCSSClassesFromNode = void 0;
const retrieveStyleClasses_1 = require("./retrieveStyleClasses");
const retrieveNestedStyleClasses_1 = require("./retrieveNestedStyleClasses");
const refineCSSClassesFromNode = (key, node) => {
    try {
        if (node.type.includes("Literal")) {
            const styles = (0, retrieveStyleClasses_1.retrieveStyleClasses)(key, node);
            if (styles && typeof styles === "string")
                return styles;
        }
        else if (node.type === "ObjectExpression" && node.properties) {
            const styles = (0, retrieveNestedStyleClasses_1.retrieveNestedStyleClasses)(key, node);
            if (styles)
                return styles;
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
    return null; // Handle unknown node types
};
exports.refineCSSClassesFromNode = refineCSSClassesFromNode;
