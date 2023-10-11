"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refineCSSClassesFromNode = void 0;
const retrieveStyleClasses_1 = require("./retrieveStyleClasses");
const retrieveNestedStyleClasses_1 = require("./retrieveNestedStyleClasses");
const refineCSSClassesFromNode = (key, node, coreAST) => {
    try {
        if (node.type.includes("Literal")) {
            let coreNodeName = "otherProperties";
            for (const coreKey in coreAST) {
                const currentCoreNode = coreAST[coreKey][key];
                if (currentCoreNode && typeof currentCoreNode === "object") {
                    coreNodeName = coreKey;
                    break;
                }
            }
            (0, retrieveStyleClasses_1.retrieveStyleClasses)(key, node, coreAST[coreNodeName]);
        }
        else if (node.type === "ObjectExpression" && node.properties) {
            (0, retrieveNestedStyleClasses_1.retrieveNestedStyleClasses)(key, node, coreAST);
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
};
exports.refineCSSClassesFromNode = refineCSSClassesFromNode;
