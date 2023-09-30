import { PluginObj, NodePath, Node } from "@babel/core";
import { extractKeysValueFromObjectExpression } from "./scripts/extractKeysValueFromObjectExpression";
import { computeCSSFromObject } from "./scripts/computeCSSFromObject";
import { parseNestedObjClasses } from "./scripts/parseNestedObjClasses";
import { parseConfig } from "./scripts/parseConfig";
import path from "path";

const completedNode: string[] = [];
const completedObjs: string[] = [];
const styleRules: string[] = [];

export default function (): PluginObj {
    styleRules.length = 0;
    const { exclude = [] } = parseConfig();
    const toExclude =
        exclude.map((__path: string) => path.resolve(__path)) || [];

    return {
        visitor: {
            ObjectExpression(path: NodePath, state) {
                const currentPath = state.filename;
                const shouldExclude = toExclude.some((excludePath: string) =>
                    currentPath?.includes(excludePath)
                );

                if (!shouldExclude) {
                    try {
                        const node = path.node as Node;
                        const stringifiedNode = JSON.stringify(node);
                        const jointCompletedNode = completedNode.join(" ");

                        if (
                            node &&
                            !jointCompletedNode.includes(stringifiedNode)
                        ) {
                            completedNode.push(stringifiedNode);

                            const objects =
                                extractKeysValueFromObjectExpression(node);
                            const stringifiedObjs = JSON.stringify(objects);
                            const jointObjs = completedObjs.join(" ");

                            if (
                                objects &&
                                !jointObjs.includes(stringifiedObjs)
                            ) {
                                completedObjs.push(stringifiedObjs);

                                for (const [key, value] of Object.entries(
                                    objects
                                )) {
                                    if (value && typeof value === "object") {
                                        const dynamicRules =
                                            parseNestedObjClasses(key, value);

                                        if (
                                            dynamicRules &&
                                            !styleRules.includes(dynamicRules)
                                        ) {
                                            styleRules.push(dynamicRules);
                                        }
                                    } else {
                                        const ruleString = computeCSSFromObject(
                                            key,
                                            value
                                        );

                                        if (
                                            ruleString &&
                                            !styleRules.includes(ruleString)
                                        ) {
                                            styleRules.push(ruleString);
                                        }
                                    }
                                }
                            }
                        }
                    } catch (error: any) {
                        console.error("An error occurred:", error);
                    }
                }
            },
        },
    };
}

export const getDevelopmentStyleRules = () => {
    return styleRules.join("");
};
