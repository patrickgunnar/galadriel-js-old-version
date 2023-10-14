"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const parseConfig_1 = require("./scripts/parseConfig");
const coreAST_1 = require("./AST/coreAST");
const extractObjectsFromNode_1 = require("./scripts/extractObjectsFromNode");
const hashHex_1 = require("./scripts/hashHex");
const generator_1 = __importDefault(require("@babel/generator"));
const parser_1 = require("@babel/parser");
const modifiedCallExpressionNodes = {};
/**
 * Exported default function to process a Babel plugin.
 *
 * @param {Object} param - The parameters for the function.
 * @param {any} param.types - The types object for node analysis.
 * @returns {PluginObj} The Babel plugin object.
 */
function default_1({ types }) {
    const { include = [], exclude = [] } = (0, parseConfig_1.parseConfig)();
    const toInclude = include.map((__path) => path_1.default.resolve(__path));
    const toExclude = exclude.map((__path) => path_1.default.resolve(__path));
    return {
        visitor: {
            CallExpression(path, state) {
                const filePath = state.filename;
                const shouldExclude = toExclude.some((__path) => filePath === null || filePath === void 0 ? void 0 : filePath.includes(__path));
                const shouldInclude = toInclude.some((__path) => filePath === null || filePath === void 0 ? void 0 : filePath.includes(__path));
                if (!shouldExclude || shouldInclude) {
                    const callee = path.get("callee");
                    if (callee.isIdentifier({ name: "craftingStyles" })) {
                        const hashedNode = (0, hashHex_1.hashHex)(JSON.stringify(path.node), true);
                        const modifiedNode = modifiedCallExpressionNodes[hashedNode];
                        if (!modifiedNode) {
                            const callbackArgument = path.node.arguments[0];
                            if (callbackArgument && (callbackArgument.type === 'ArrowFunctionExpression' || callbackArgument.type === 'FunctionExpression')) {
                                (0, extractObjectsFromNode_1.extractObjectsFromNode)(types, callbackArgument.body, coreAST_1.coreAST);
                                const modifiedNodeCode = (0, generator_1.default)(path.node).code;
                                if (modifiedNodeCode) {
                                    const modifiedParsedCode = (0, parser_1.parse)(modifiedNodeCode, { plugins: ["typescript"] });
                                    if (modifiedParsedCode) {
                                        const modifiedParsedBody = modifiedParsedCode.program.body[0];
                                        if (modifiedParsedBody.type === "ExpressionStatement") {
                                            const expression = modifiedParsedBody.expression;
                                            if (expression) {
                                                modifiedCallExpressionNodes[hashedNode] = expression;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            const callbackArgument = path.node.arguments[0];
                            if (callbackArgument && (callbackArgument.type === 'ArrowFunctionExpression' || callbackArgument.type === 'FunctionExpression')) {
                                callbackArgument.body = modifiedNode.arguments[0].body;
                            }
                        }
                    }
                }
            },
        },
    };
}
exports.default = default_1;
