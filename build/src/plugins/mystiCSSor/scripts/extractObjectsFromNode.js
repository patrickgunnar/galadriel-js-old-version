"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractObjectsFromNode = void 0;
const extractStyles_1 = require("./extractStyles");
/**
 * Loops through a stack of nodes to process the styles.
 *
 * @param {any} types - The types object for node analysis.
 * @param {any} rootNode - The node to extract objects from.
 * @param {Record<string, Record<string, string[]>>} coreAST - The core AST to update with styles.
 * @param {Record<string, Record<string, string>>} transformedCSSRules - The control of used CSS rules
 */
function extractObjectsFromNode(types, rootNode, coreAST, transformedCSSRules) {
    try {
        const stack = [rootNode];
        while (stack.length > 0) {
            const currentNode = stack.pop();
            // extract the styles from key - value and transform the Nodes
            (0, extractStyles_1.extractStyles)(types, currentNode, coreAST, transformedCSSRules);
            // Recursively process nested properties
            for (const key in currentNode) {
                if (currentNode[key] &&
                    typeof currentNode[key] === "object" &&
                    !(currentNode.type === "ObjectExpression" && Array.isArray(currentNode[key]))) {
                    stack.push(currentNode[key]);
                }
            }
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
exports.extractObjectsFromNode = extractObjectsFromNode;
