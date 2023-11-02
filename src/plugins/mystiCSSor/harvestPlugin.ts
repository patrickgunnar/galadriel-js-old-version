import path from "path";
import { PluginObj } from "@babel/core";
import generate from "@babel/generator";
import { parseGaladrielConfig } from "./scripts/parseGaladrielConfig";
import { hashingHex } from "./scripts/hashingHex";
import { generateObjectsArray } from "./scripts/generateObjectsArray";
import { coreAST } from "../../ast/coreAST";
import { generatesCSSrules } from "./scripts/generatesCSSrules";
import { modularAST } from "../../ast/modularAST";

// used objects and CSS rules controls
const usedObjects: string[] = [];
const collectedObjectsProperties: string[] = [];

/**
 * Exported default function to process a Babel plugin - Harvest the CSS rules.
 *
 * @param {Object} param - The parameters for the function.
 * @param {any} param.types - The types object for node analysis.
 * @returns {PluginObj} The Babel plugin object.
 */
export default function ({ types }: { types: any }): PluginObj {
    // extract include and exclude paths from the config
    const { include = [], exclude = [], module = undefined } = parseGaladrielConfig();
    const toInclude = include.map((__path: string) => path.resolve(__path));
    const toExclude = exclude.map((__path: string) => path.resolve(__path));

    return {
        visitor: {
            CallExpression(path, state) {
                try {
                    // get the file path and check for inclusion or exclusion
                    const filePath = state.filename;
                    const shouldExclude = toExclude.some((__path: string) => filePath?.includes(__path));
                    const shouldInclude = toInclude.some((__path: string) => filePath?.includes(__path));

                    // if it to exclude the current path or not to include it
                    if (shouldExclude || !shouldInclude) return;

                    const callee = path.get("callee");

                    // if the callee is not "craftingStyles"
                    if (!callee.isIdentifier({ name: "craftingStyles" })) return;
                    
                    const callback = path.node.arguments[0];

                    // if not the callback handler
                    if (!callback) return;

                    const callbackType = callback.type;

                    // if the callback type is a function or arrow function
                    if (callbackType === "FunctionExpression" || callbackType === "ArrowFunctionExpression") {
                        try {
                            // Process the callback function body
                            const callbackBody = generate(callback.body, { comments: false }).code.replace(/\s+/g, "");
                            const hashedNode = hashingHex(JSON.stringify(callbackBody), true);

                            // if current exists in the control array
                            if (usedObjects.includes(hashedNode)) return;

                            // generates an array of strings with objects keys:values or keys:{keys:values}
                            const objectArray = generateObjectsArray(callbackBody);

                            // if not the array with the objects properties
                            if (!objectArray) return;

                            // generates the CSS rules
                            generatesCSSrules(
                                objectArray, coreAST, collectedObjectsProperties, module, module ? modularAST : undefined, filePath || undefined
                            );
                            // save the used objects
                            usedObjects.push(hashedNode);
                        } catch (error: any) {
                            console.error("An error occurred:", error);
                        }
                    }
                } catch (error: any) {
                    console.error("An error occurred:", error);
                }
            },
        },
    };
}
