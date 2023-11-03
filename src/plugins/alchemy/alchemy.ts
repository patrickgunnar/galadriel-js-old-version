import path from "path";
import { PluginObj } from "@babel/core";
import { cloneDeep } from "lodash";
import { parseGaladrielConfig } from "./scripts/parseGaladrielConfig";
import { hashingHex } from "./scripts/hashingHex";
import { transformAstNode } from "./scripts/transformAstNode";

// used objects and CSS rules controls
const usedObjects: string[] = [];
const transformedNodes: Record<string, any> = {};

/**
 * Exported default function to process a Babel plugin.
 *
 * @param {Object} param - The parameters for the function.
 * @param {any} param.types - The types object for node analysis.
 * @returns {PluginObj} The Babel plugin object.
 */
export default function ({ types }: { types: any }): PluginObj {
    // extract include and exclude paths from the config
    const { exclude = [], module = false } = parseGaladrielConfig();
    const toExclude = exclude.map((__path: string) => path.resolve(__path));

    return {
        visitor: {
            CallExpression(path: any, state: any) {
                try {
                    // get the file path and check for inclusion or exclusion
                    const filePath = state.filename;
                    const shouldExclude = toExclude.some((__path: string) => filePath?.includes(__path));

                    // if it to exclude the current path or not to include it
                    if (shouldExclude) return;

                    const callee = path.get("callee");

                    // if the callee is not "craftingStyles"
                    if (!callee.isIdentifier({ name: "craftingStyles" })) return;
                    
                    const callback = path.node.arguments[0];

                    // if not the callback handler
                    if (!callback) return;

                    const callbackType = callback.type;

                    // if the callback type is a function or arrow function
                    if (callbackType === "FunctionExpression" || callbackType === "ArrowFunctionExpression") {
                        // hash the callback body function body
                        const hashedNode = hashingHex(JSON.stringify(callback.body).replace(/\s+/g, ""), true, false);

                        // if current exists in the control array
                        if (usedObjects.includes(hashedNode)) {
                            // collects the node from the
                            const collectedNode = transformedNodes[hashedNode];

                            // if not the current node
                            if (!collectedNode) {
                                try {
                                    // transform the current node
                                    transformAstNode(types, callback.body, module, filePath);
                                    // save the transformed node
                                    transformedNodes[hashedNode] = cloneDeep(callback.body);
                                    // save the used objects
                                    usedObjects.push(hashedNode);
                                } catch (error: any) {
                                    console.error("An error occurred:", error);
                                }
                            } else {
                                // clone the collected node into the ast node
                                callback.body = cloneDeep(collectedNode);
                            }
                        } else {
                            try {
                                // transform the current node
                                transformAstNode(types, callback.body, module, filePath);
                                // save the transformed node
                                transformedNodes[hashedNode] = cloneDeep(callback.body);
                                // save the used objects
                                usedObjects.push(hashedNode);
                            } catch (error: any) {
                                console.error("An error occurred:", error);
                            }
                        }
                    }
                } catch (error: any) {
                    console.error("An error occurred:", error);
                }
            },
        },
    };
}
