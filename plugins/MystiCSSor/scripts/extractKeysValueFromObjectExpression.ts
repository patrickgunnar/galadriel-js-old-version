import { Node } from "@babel/types";

type ParsedValue = string | Record<string, any> | null;

const extractNestedObjs = (node: Node): ParsedValue => {
    try {
        if ((node as any).type.includes("Literal")) {
            return (node as any).value;
        } else if (node.type === "ObjectExpression" && node.properties) {
            const nestedValues: ParsedValue = {};

            node.properties.forEach((property) => {
                if ((property as any).value.type.includes("Literal")) {
                    nestedValues[(property as any).key.name] = (
                        property as any
                    ).value.value;
                } else if (
                    (property as any).value.type === "ObjectExpression"
                ) {
                    // Recursively handle nested object literals
                    const nestedResult = extractNestedObjs(
                        (property as any).value
                    );

                    Object.assign(nestedValues, nestedResult);
                }
            });

            return nestedValues;
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null; // Handle unknown node types
};

const extractKeysValueFromObjectExpression = (node: Node) => {
    try {
        if (node.type === "ObjectExpression" && node.properties) {
            const properties = node.properties;

            return properties.reduce((acc: Record<string, any>, property) => {
                if (property.type === "ObjectProperty" && property.key) {
                    const key = (property.key as any).name;

                    if (key) {
                        const value = extractNestedObjs(property.value);

                        acc[key] = value;
                    }
                }

                return acc;
            }, {});
        }
    } catch (error: any) {
        console.error("An error occurred:", error);

        return {};
    }
};

export { extractKeysValueFromObjectExpression };
