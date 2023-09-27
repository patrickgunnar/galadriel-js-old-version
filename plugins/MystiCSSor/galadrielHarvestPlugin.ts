import { PluginObj, NodePath, Node } from "@babel/core";
import { extractKeysValueFromObjectExpression } from "./scripts/extractKeysValueFromObjectExpression";
import { computeCSSFromObject } from "./scripts/computeCSSFromObject";
import { parseNestedObjClasses } from "./scripts/parseNestedObjClasses";

const completedNode: string[] = [];
const completedObjs: string[] = [];
const styleRules: string[] = [];

export default function (): PluginObj {
    return {
        visitor: {
            ObjectExpression(path: NodePath) {
                console.time("visitObjectExpression");

                const node = path.node as Node;
                const stringifiedNode = JSON.stringify(node);
                const jointCompletedNode = completedNode.join(" ");

                if (node && !jointCompletedNode.includes(stringifiedNode)) {
                    completedNode.push(stringifiedNode);

                    const objects = extractKeysValueFromObjectExpression(node);
                    const stringifiedObjs = JSON.stringify(objects);
                    const jointObjs = completedObjs.join(" ");

                    if (objects && !jointObjs.includes(stringifiedObjs)) {
                        completedObjs.push(stringifiedObjs);

                        for (const [key, value] of Object.entries(objects)) {
                            if (value && typeof value === "object") {
                                for (const [
                                    nestedKey,
                                    nestedValue,
                                ] of Object.entries(value)) {
                                    parseNestedObjClasses(
                                        key,
                                        nestedKey,
                                        nestedValue
                                    );
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

                console.timeEnd("visitObjectExpression");
            },
        },
    };
}

export const getDevelopmentStyleRules = () => {
    return styleRules.join("");
};
