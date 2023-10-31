"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const parseConfig_1 = require("./scripts/parseConfig");
const coreAST_1 = require("../../ast/coreAST");
const extractObjectsFromNode_1 = require("./scripts/extractObjectsFromNode");
const hashHex_1 = require("./scripts/hashHex");
const lodash_1 = require("lodash");
const generator_1 = __importDefault(require("@babel/generator"));
// Objects to store transformed nodes and CSS rules - control variables
const transformedCallExpressionNodes = {};
const transformedCSSRules = {};
/**
 * Exported default function to process a Babel plugin.
 *
 * @param {Object} param - The parameters for the function.
 * @param {any} param.types - The types object for node analysis.
 * @returns {PluginObj} The Babel plugin object.
 */
function default_1({ types }) {
    // Extract include and exclude paths from the config
    const { include = [], exclude = [] } = (0, parseConfig_1.parseConfig)();
    const toInclude = include.map((__path) => path_1.default.resolve(__path));
    const toExclude = exclude.map((__path) => path_1.default.resolve(__path));
    return {
        visitor: {
            CallExpression(path, state) {
                // Get the file path and check for inclusion or exclusion
                const filePath = state.filename;
                const shouldExclude = toExclude.some((__path) => filePath === null || filePath === void 0 ? void 0 : filePath.includes(__path));
                const shouldInclude = toInclude.some((__path) => filePath === null || filePath === void 0 ? void 0 : filePath.includes(__path));
                if (!shouldExclude || shouldInclude) {
                    const callee = path.get("callee");
                    if (callee.isIdentifier({ name: "craftingStyles" })) {
                        const callbackArgument = path.node.arguments[0];
                        if (callbackArgument && (callbackArgument.type === 'ArrowFunctionExpression' || callbackArgument.type === 'FunctionExpression')) {
                            // Process the callback function body
                            const callbackBody = (0, generator_1.default)(callbackArgument.body).code.replace(/\s+/g, "");
                            const hashedNode = (0, hashHex_1.hashHex)(JSON.stringify(callbackBody), true);
                            const modifiedNode = transformedCallExpressionNodes[hashedNode];
                            if (!modifiedNode) {
                                // Extract objects and CSS rules from the callback body
                                (0, extractObjectsFromNode_1.extractObjectsFromNode)(types, callbackArgument.body, coreAST_1.coreAST, transformedCSSRules);
                                const modifiedBodyClone = (0, lodash_1.cloneDeep)(callbackArgument.body);
                                transformedCallExpressionNodes[hashedNode] = modifiedBodyClone;
                            }
                            else {
                                // Use the modified node if it exists
                                callbackArgument.body = (0, lodash_1.cloneDeep)(modifiedNode);
                            }
                        }
                    }
                }
            },
        },
    };
}
exports.default = default_1;
