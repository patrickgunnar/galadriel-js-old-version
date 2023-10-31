import path from "path";
import { cloneDeep } from "lodash";
import { PluginObj } from "@babel/core";
import generate from "@babel/generator";
import { parseGaladrielConfig } from "./scripts/parseGaladrielConfig";
import { hashingHex } from "./scripts/hashingHex";
import { generateObjectsArray } from "./scripts/generateObjectsArray";
import { coreAST } from "../../ast/coreAST";
import { generatesCSSrules } from "./scripts/generatesCSSrules";

// store collected nodes and CSS rules - control variables
const collectedCallExpressionNodes: Record<string, any> = {};
const collectedObjectsProperties: string[] = [];

/**
 * Exported default function to process a Babel plugin - Harvest the CSS rules.
 *
 * @param {Object} param - The parameters for the function.
 * @param {any} param.t - The types object for node analysis.
 * @returns {PluginObj} The Babel plugin object.
 */
export default function ({ t }: { t: any }): PluginObj {
    // extract include and exclude paths from the config
    const { include = [], exclude = [] } = parseGaladrielConfig();
    const toInclude = include.map((__path: string) => path.resolve(__path));
    const toExclude = exclude.map((__path: string) => path.resolve(__path));

    return {
        visitor: {
            CallExpression(path, state) {
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
                    // Process the callback function body
                    const callbackBody = generate(callback.body, { comments: false }).code.replace(/\s+/g, "");
                    const hashedNode = hashingHex(JSON.stringify(callbackBody), true);
                    const collectedNode = collectedCallExpressionNodes[hashedNode];

                    if (!collectedNode) {
                        // generates an array of strings with objects keys:values or keys:{keys:values}
                        const objectArray = generateObjectsArray(callbackBody);
                        // generates the CSS rules
                        generatesCSSrules(objectArray, coreAST, collectedObjectsProperties);

                        // save the collected node
                        collectedCallExpressionNodes[hashedNode] = cloneDeep(callback.body);
                    } else {
                        // Use the collected node if it exists
                        callback.body = cloneDeep(collectedNode);
                    }
                }
            },
        },
    };
}
