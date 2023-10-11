"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const extractClasses_1 = require("./scripts/extractClasses");
const parseConfig_1 = require("./scripts/parseConfig");
const path_1 = __importDefault(require("path"));
const coreAST_1 = require("./AST/coreAST");
function default_1() {
    const { include = [], exclude = [] } = (0, parseConfig_1.parseConfig)();
    const toInclude = include.map((__path) => path_1.default.resolve(__path));
    const toExclude = exclude.map((__path) => path_1.default.resolve(__path));
    return {
        visitor: {
            ObjectExpression(path, state) {
                const filePath = state.filename;
                const shouldExclude = toExclude.some((__path) => filePath === null || filePath === void 0 ? void 0 : filePath.includes(__path));
                const shouldInclude = toInclude.some((__path) => filePath === null || filePath === void 0 ? void 0 : filePath.includes(__path));
                if (!shouldExclude || shouldInclude) {
                    try {
                        const node = path.node;
                        if (node) {
                            (0, extractClasses_1.extractClasses)(node, coreAST_1.coreAST);
                        }
                    }
                    catch (error) {
                        console.error("An error occurred:", error);
                    }
                }
            },
        },
    };
}
exports.default = default_1;
