import { Node } from "@babel/core";
import { retrieveStyleClasses } from "./retrieveStyleClasses";
import { retrieveNestedStyleClasses } from "./retrieveNestedStyleClasses";

type ParsedValue = string | null;

const refineCSSClassesFromNode = (
    key: string,
    node: Node,
    coreAST: Record<string, Record<string, string[]>>
): ParsedValue => {
    try {
        if ((node as any).type.includes("Literal")) {
            let coreNodeName = "otherProperties";

            for (const coreKey in coreAST) {
                const currentCoreNode = coreAST[coreKey][key];

                if (currentCoreNode && typeof currentCoreNode === "object") {
                    coreNodeName = coreKey;
                    break;
                }
            }
        
            retrieveStyleClasses(key, node, coreAST[coreNodeName]);
        } else if (node.type === "ObjectExpression" && node.properties) {
            retrieveNestedStyleClasses(key, node, coreAST);
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null; // Handle unknown node types
};

export { refineCSSClassesFromNode };
