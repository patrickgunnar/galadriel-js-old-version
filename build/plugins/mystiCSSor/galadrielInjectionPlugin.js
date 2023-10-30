"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postcss_1 = __importDefault(require("postcss"));
const uniteGaladrielAST_1 = require("./ast/uniteGaladrielAST");
/**
 * This module exports a PostCSS plugin function that processes the CSS AST and injects Galadriel CSS rules.
 * @module galadrielInjectionPlugin
 */
/**
 * The PostCSS plugin function.
 * @function
 * @returns {Object} The PostCSS plugin object.
 */
module.exports = function () {
    return {
        // Define the plugin's name
        postcssPlugin: "galadrielInjectionPlugin",
        // Define the processing logic for the plugin
        Once(root, { result }) {
            try {
                // Unite the Galadriel AST into a string
                const strFromAST = (0, uniteGaladrielAST_1.uniteGaladrielAST)();
                if (strFromAST) {
                    // Parse the string into PostCSS rules
                    const parsedRules = postcss_1.default.parse(strFromAST);
                    if (parsedRules) {
                        // Append the parsed rules to the root
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
