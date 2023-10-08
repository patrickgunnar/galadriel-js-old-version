"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postcss_1 = __importDefault(require("postcss"));
const galadrielHarvestPlugin_1 = require("./galadrielHarvestPlugin");
module.exports = function () {
    return {
        postcssPlugin: "galadrielInjectionPlugin",
        Once(root, { result }) {
            try {
                const styleRules = (0, galadrielHarvestPlugin_1.getStyleClasses)();
                const parsedRules = postcss_1.default.parse(styleRules);
                root.append(parsedRules);
            }
            catch (error) {
                console.error("An error occurred:", error);
            }
        },
    };
};
module.exports.postcss = true;
