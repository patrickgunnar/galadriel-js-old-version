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
        let coreNodeName = "otherProperties";

        for (const coreKey in coreAST) {
            const currentCoreNode = coreAST[coreKey][key];

            if (currentCoreNode && typeof currentCoreNode === "object") {
                coreNodeName = coreKey;
                break;
            }
        }

        if ((node as any).type.includes("Literal")) {
            const styles = retrieveStyleClasses(key, node, coreAST[coreNodeName]);

            if (styles && typeof styles === "string") return styles;
        } else if (node.type === "ObjectExpression" && node.properties) {
            const styles = retrieveNestedStyleClasses(key, node, coreAST);

            if (styles) return styles;
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null; // Handle unknown node types
};

export { refineCSSClassesFromNode };
