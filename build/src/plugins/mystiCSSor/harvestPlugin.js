"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const lodash_1 = require("lodash");
const generator_1 = __importDefault(require("@babel/generator"));
const parseGaladrielConfig_1 = require("./scripts/parseGaladrielConfig");
const hashingHex_1 = require("./scripts/hashingHex");
const generateObjectsArray_1 = require("./scripts/generateObjectsArray");
const coreAST_1 = require("../../ast/coreAST");
const generatesCSSrules_1 = require("./scripts/generatesCSSrules");
// store collected nodes and CSS rules - control variables
const collectedCallExpressionNodes = {};
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
    const { include = [], exclude = [] } = (0, parseGaladrielConfig_1.parseGaladrielConfig)();
    const toInclude = include.map((__path) => path_1.default.resolve(__path));
    const toExclude = exclude.map((__path) => path_1.default.resolve(__path));
    return {
        visitor: {
            CallExpression(path, state) {
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
                    // Process the callback function body
                    const callbackBody = (0, generator_1.default)(callback.body, { comments: false }).code.replace(/\s+/g, "");
                    const hashedNode = (0, hashingHex_1.hashingHex)(JSON.stringify(callbackBody), true);
                    const collectedNode = collectedCallExpressionNodes[hashedNode];
                    if (!collectedNode) {
                        // generates an array of strings with objects keys:values or keys:{keys:values}
                        const objectArray = (0, generateObjectsArray_1.generateObjectsArray)(callbackBody);
                        // generates the CSS rules
                        (0, generatesCSSrules_1.generatesCSSrules)(objectArray, coreAST_1.coreAST, collectedObjectsProperties);
                        // save the collected node
                        collectedCallExpressionNodes[hashedNode] = (0, lodash_1.cloneDeep)(callback.body);
                    }
                    else {
                        // Use the collected node if it exists
                        callback.body = (0, lodash_1.cloneDeep)(collectedNode);
                    }
                }
            },
        },
    };
}
exports.default = default_1;
