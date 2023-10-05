import { Node } from "@babel/types";
import { refineCSSClassesFromNode } from "./refineCSSClassesFromNode";

const extractClasses = (node: Node) => {
    if (node.type === "ObjectExpression" && node.properties) {
        const styleClasses: string[] = []
        const properties = node.properties;

        try {
            properties.forEach((property) => {
                if (property.type === "ObjectProperty" && property.key) {
                    const key = (property.key as any).name;

                    if (key) {
                        const classValues = refineCSSClassesFromNode(key, property.value);

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
