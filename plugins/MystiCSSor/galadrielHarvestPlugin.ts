import { PluginObj, NodePath, Node } from "@babel/core";
import { extractClasses } from "./scripts/extractClasses";
import { parseConfig } from "./scripts/parseConfig";
import path from "path";

//const completedNodes: string[] = [];
const styleClasses: string[] = [];

export default function (): PluginObj {
    const { include = [], exclude = [] } = parseConfig();
    const toInclude = include.map((__path: string) => path.resolve(__path));
    const toExclude = exclude.map((__path: string) => path.resolve(__path));

    return {
        visitor: {
            ObjectExpression(path: NodePath, state) {
                const filePath = state.filename;
                const shouldExclude = toExclude.some((__path: string) => filePath?.includes(__path));
                const shouldInclude = toInclude.some((__path: string) => filePath?.includes(__path));

                if (!shouldExclude || shouldInclude) {
                    try {
                        const node = path.node as Node;
                        //const stringifiedNode = JSON.stringify(node);
                        //const hasCompletedNodes = completedNodes.join(" ");

                        if (node) { // && !hasCompletedNodes.includes(stringifiedNode)
                            //completedNodes.push(stringifiedNode);

                            const classes = extractClasses(node);

                            if (classes && !styleClasses.includes(classes)) {
                                styleClasses.push(classes);
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

export const getStyleClasses = () => {
    return styleClasses.join(" ");
};
