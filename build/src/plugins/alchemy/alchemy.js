"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const lodash_1 = require("lodash");
const parseGaladrielConfig_1 = require("./scripts/parseGaladrielConfig");
const hashingHex_1 = require("./scripts/hashingHex");
const transformAstNode_1 = require("./scripts/transformAstNode");
// used objects and CSS rules controls
const usedObjects = [];
const transformedNodes = {};
/**
 * Exported default function to process a Babel plugin.
 *
 * @param {Object} param - The parameters for the function.
 * @param {any} param.types - The types object for node analysis.
 * @returns {PluginObj} The Babel plugin object.
 */
function default_1({ types }) {
    // extract include and exclude paths from the config
    const { include = [], exclude = [] } = (0, parseGaladrielConfig_1.parseGaladrielConfig)();
    const toInclude = include.map((__path) => path_1.default.resolve(__path));
    const toExclude = exclude.map((__path) => path_1.default.resolve(__path));
    return {
        visitor: {
            CallExpression(path, state) {
                try {
                    // get the file path and check for inclusion or exclusion
                    const filePath = state.filename;
                    const shouldExclude = toExclude.some((__path) => filePath === null || filePath === void 0 ? void 0 : filePath.includes(__path));
                    const shouldInclude = toInclude.some((__path) => filePath === null || filePath === void 0 ? void 0 : filePath.includes(__path));
                    // if it to exclude the current path or not to include it
                    if (shouldExclude || !shouldInclude)
                        return;
                    const callee = path.get("callee");
                    // if the callee is not "craftingStyles"
                    if (!callee.isIdentifier({ name: "craftingStyles" }))
                        return;
                    const callback = path.node.arguments[0];
                    // if not the callback handler
                    if (!callback)
                        return;
                    const callbackType = callback.type;
                    // if the callback type is a function or arrow function
                    if (callbackType === "FunctionExpression" || callbackType === "ArrowFunctionExpression") {
                        // hash the callback body function body
                        const hashedNode = (0, hashingHex_1.hashingHex)(JSON.stringify(callback.body).replace(/\s+/g, ""), true, false);
                        // if current exists in the control array
                        if (usedObjects.includes(hashedNode)) {
                            // collects the node from the
                            const collectedNode = transformedNodes[hashedNode];
                            // if not the current node
                            if (!collectedNode) {
                                try {
                                    // transform the current node
                                    (0, transformAstNode_1.transformAstNode)(types, callback.body);
                                    // save the transformed node
                                    transformedNodes[hashedNode] = (0, lodash_1.cloneDeep)(callback.body);
                                    // save the used objects
                                    usedObjects.push(hashedNode);
                                }
                                catch (error) {
                                    console.error("An error occurred:", error);
                                }
                            }
                            else {
                                // clone the collected node into the ast node
                                callback.body = (0, lodash_1.cloneDeep)(collectedNode);
                            }
                        }
                        else {
                            try {
                                // transform the current node
                                (0, transformAstNode_1.transformAstNode)(types, callback.body);
                                // save the transformed node
                                transformedNodes[hashedNode] = (0, lodash_1.cloneDeep)(callback.body);
                                // save the used objects
                                usedObjects.push(hashedNode);
                            }
                            catch (error) {
                                console.error("An error occurred:", error);
                            }
                        }
                    }
                }
                catch (error) {
                    console.error("An error occurred:", error);
                }
            },
        },
    };
}
exports.default = default_1;
