import postcss, { Result, Root } from "postcss";
import { uniteGaladrielAST } from "../../ast/uniteGaladrielAST";
import { coreAST } from "../../ast/coreAST";

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
        Once(root: Root, { result }: { result: Result }) {
            try {
                // Unite the Galadriel AST into a string
                const strFromAST = uniteGaladrielAST(coreAST);

                if (strFromAST) {
                    // Parse the string into PostCSS rules
                    const parsedRules = postcss.parse(strFromAST);

                    if (parsedRules) {
                        // Append the parsed rules to the root
                        root.append(parsedRules);
                    }
                }
            } catch (error: any) {
                console.error("An error occurred:", error);
            }
        },
    };
};

module.exports.postcss = true;
