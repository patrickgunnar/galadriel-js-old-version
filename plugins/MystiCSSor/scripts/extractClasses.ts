import { Node } from "@babel/types";
import { refineCSSClassesFromNode } from "./refineCSSClassesFromNode";

const extractClasses = (node: Node, coreAST: Record<string, Record<string, string[]>>) => {
    if (node.type === "ObjectExpression" && node.properties) {
        const properties = node.properties;

        try {
            properties.forEach((property) => {
                if (property.type === "ObjectProperty" && property.key) {
                    const key = (property.key as any).name;

                    if (key) {
                        refineCSSClassesFromNode(key, property.value, coreAST);
                    }
                }
            });
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }
};

export { extractClasses };
