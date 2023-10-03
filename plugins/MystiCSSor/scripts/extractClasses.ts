import { Node } from "@babel/types";
import { getStyleClasses } from "./getStyles";
import { getNestedStyles } from "./getNestedStyles";

type ParsedValue = string | null;

const extractNestedObjs = (key: string, node: Node): ParsedValue => {
    try {
        if ((node as any).type.includes("Literal")) {
            const styles = getStyleClasses(key, node);

            if(styles) return styles;
        } else if (node.type === "ObjectExpression" && node.properties) {
            const styles = getNestedStyles(key, node)

            if (styles) return styles;
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null; // Handle unknown node types
};

const extractClasses = (node: Node) => {
    if (node.type === "ObjectExpression" && node.properties) {
        const styleClasses: string[] = []
        const properties = node.properties;

        try {
            properties.forEach((property) => {
                if (property.type === "ObjectProperty" && property.key) {
                    const key = (property.key as any).name;

                    if (key) {
                        const classValues = extractNestedObjs(key, property.value);

                        if(classValues) styleClasses.push(classValues);
                    }
                }
            });

            return styleClasses.join(" ");
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    return null;
};

export { extractClasses };
