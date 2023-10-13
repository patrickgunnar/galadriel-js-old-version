"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const parseConfig_1 = require("./scripts/parseConfig");
const coreAST_1 = require("./AST/coreAST");
const extractObjectsFromNode_1 = require("./scripts/extractObjectsFromNode");
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
                        const callbackArgument = path.node.arguments[0];
                        if (callbackArgument && (callbackArgument.type === 'ArrowFunctionExpression' || callbackArgument.type === 'FunctionExpression')) {
                            (0, extractObjectsFromNode_1.extractObjectsFromNode)(types, callbackArgument.body, coreAST_1.coreAST);
                        }
                    }
                }
            },
        },
    };
}
exports.default = default_1;
