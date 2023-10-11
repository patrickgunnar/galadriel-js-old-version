"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postcss_1 = __importDefault(require("postcss"));
const uniteGaladrielAST_1 = require("./AST/uniteGaladrielAST");
module.exports = function () {
    return {
        postcssPlugin: "galadrielInjectionPlugin",
        Once(root, { result }) {
            try {
                const strFromAST = (0, uniteGaladrielAST_1.uniteGaladrielAST)();
                if (strFromAST) {
                    const parsedRules = postcss_1.default.parse(strFromAST);
                    if (parsedRules) {
                        root.append(parsedRules);
                    }
                }
            }
            catch (error) {
                console.error("An error occurred:", error);
            }
        },
    };
};
module.exports.postcss = true;
