"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const generator_1 = __importDefault(require("@babel/generator"));
const parseGaladrielConfig_1 = require("./scripts/parseGaladrielConfig");
const hashingHex_1 = require("./scripts/hashingHex");
const generateObjectsArray_1 = require("./scripts/generateObjectsArray");
const coreAST_1 = require("../../ast/coreAST");
const generatesCSSrules_1 = require("./scripts/generatesCSSrules");
// used objects and CSS rules controls
const usedObjects = [];
const collectedObjectsProperties = [];
/**
 * Exported default function to process a Babel plugin - Harvest the CSS rules.
 *
 * @param {Object} param - The parameters for the function.
 * @param {any} param.t - The types object for node analysis.
 * @returns {PluginObj} The Babel plugin object.
 */
function default_1({ t }) {
    // extract include and exclude paths from the config
    const { include = [], exclude = [], module = undefined } = (0, parseGaladrielConfig_1.parseGaladrielConfig)();
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
                        try {
                            // Process the callback function body
                            const callbackBody = (0, generator_1.default)(callback.body, { comments: false }).code.replace(/\s+/g, "");
                            const hashedNode = (0, hashingHex_1.hashingHex)(JSON.stringify(callbackBody), true);
                            // if current exists in the control array
                            if (usedObjects.includes(hashedNode))
                                return;
                            // generates an array of strings with objects keys:values or keys:{keys:values}
                            const objectArray = (0, generateObjectsArray_1.generateObjectsArray)(callbackBody);
                            // if not the array with the objects properties
                            if (!objectArray)
                                return;
                            // generates the CSS rules
                            (0, generatesCSSrules_1.generatesCSSrules)(objectArray, coreAST_1.coreAST, collectedObjectsProperties, module);
                            // save the used objects
                            usedObjects.push(hashedNode);
                        }
                        catch (error) {
                            console.error("An error occurred:", error);
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
