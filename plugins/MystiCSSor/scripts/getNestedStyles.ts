import { Node, stringLiteral, objectProperty, identifier } from "@babel/types";
import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "../../../types/coreTypes";
import { computeConfigOnNested } from "./computeConfigOnNested";
import { hashHex } from "./hashHex";

const getClasses: ExtractGaladrielCSSClassesType = (classes) => classes;

const getStaticStyles = (key: string, value: any): Record<string, string> | null => {
    try {
        const staticHandler = coreStaticStyles[key];

        if (staticHandler) {
            const propertiesHandler = staticHandler({
                extractGaladrielClasses: getClasses,
            });

            const selector = `.${value}`;
            const propertiesValues = propertiesHandler[selector];

            if (propertiesValues) {
                return propertiesValues;
            }
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
};

const getDynamicStyles = (key: string): string | null => {
    try {
        return coreDynamicProperties[key];
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
};

export const getNestedStyles = (pseudo: string, node: Node) => {
    const testRegex = /^\$\w+(-\w+)*$/;
    const nestedClasses: string[] = [];

    (node as any).properties.forEach((property: any) => {
        if ((property as any).value.type.includes("Literal")) {
            const key = (property as any).key.name;
            const value = (property as any).value.value;

            if (key && typeof key === "string") {
                if ( value && typeof value === "string" && testRegex.test(value)) {
                    const staticStyle = getStaticStyles(key, value);

                    if (staticStyle) {
                        const [[objKey, objValue]] = Object.entries(staticStyle);

                        nestedClasses.push(`${objKey}:${objValue}`);
                    } else {
                        const customClassName = value.replace("$", "");
                        const customStyle = computeConfigOnNested(customClassName);

                        if (customStyle) {
                            const { customKey, customValue } = customStyle;

                            nestedClasses.push(`${customKey}:${customValue}`);
                        }
                    }
                } else if (value && typeof value === "string") {
                    const classContent = getDynamicStyles(key);

                    if (classContent) {
                        nestedClasses.push(`${classContent}:${value}`);
                    }
                }
            }
        }
    });

    if (nestedClasses) {
        const hashedHex = hashHex(nestedClasses.join(" "));
        const rules = nestedClasses.join(";");
        const pseudoClass = coreDynamicProperties[pseudo];

        if (pseudoClass.includes("$")) {
            const strLiteral = stringLiteral(`galadriel_${hashedHex}`);
            const objProperty = objectProperty(identifier("className"), strLiteral);

            // replace the node value to the class name
            (node as any).properties = [objProperty]

            return `@media screen and (${pseudoClass.replace("$", "")}) { .galadriel_${hashedHex} { ${rules} } }`;
        } else {
            const strLiteral = stringLiteral(`galadriel_${pseudoClass.replace("&", hashedHex)}`);
            const objProperty = objectProperty(identifier("className"), strLiteral);

            // replace the node value to the class name
            (node as any).properties = [objProperty]

            return `.galadriel_${pseudoClass.replace("&", hashedHex)} { ${rules} }`;
        }
    }

    return "";
};
