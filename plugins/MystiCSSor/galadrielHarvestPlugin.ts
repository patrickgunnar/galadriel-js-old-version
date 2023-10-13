import path from "path";
import { PluginObj } from "@babel/core";
import { parseConfig } from "./scripts/parseConfig";
import { coreAST } from "./AST/coreAST";
import { extractObjectsFromNode } from "./scripts/extractObjectsFromNode";

/**
 * Exported default function to process a Babel plugin.
 *
 * @param {Object} param - The parameters for the function.
 * @param {any} param.types - The types object for node analysis.
 * @returns {PluginObj} The Babel plugin object.
 */
export default function ({ types }: { types: any }): PluginObj {
    const { include = [], exclude = [] } = parseConfig();
    const toInclude = include.map((__path: string) => path.resolve(__path));
    const toExclude = exclude.map((__path: string) => path.resolve(__path));

    return {
        visitor: {
            CallExpression(path, state) {
                const filePath = state.filename;
                const shouldExclude = toExclude.some((__path: string) => filePath?.includes(__path));
                const shouldInclude = toInclude.some((__path: string) => filePath?.includes(__path));

                if (!shouldExclude || shouldInclude) {
                    const callee = path.get("callee");

                    if (callee.isIdentifier({ name: "craftingStyles" })) {
                        const callbackArgument = path.node.arguments[0];

                        if (callbackArgument && (callbackArgument.type === 'ArrowFunctionExpression' || callbackArgument.type === 'FunctionExpression')) {
                            extractObjectsFromNode(types, callbackArgument.body, coreAST)
                        }
                    }
                }
            },
        },
    };
}
