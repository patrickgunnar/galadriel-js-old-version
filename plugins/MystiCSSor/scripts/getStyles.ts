import { Node } from "@babel/types";
import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "../../../types/coreTypes";
import { computeConfigCSS } from "./computeConfigCSS";
import { hashHex } from "./hashHex";

export const getDynamicStyles = (
    key: string,
    value: any
): { className: string; classValue: string } | null => {
    try {
        const property = coreDynamicProperties[key];

        if (property && value && typeof value === "string") {
            const hashedHex = hashHex(`${property}:${value}`);

            return {
                className: `galadriel_${hashedHex}`,
                classValue: `.galadriel_${hashedHex} { ${property}: ${value}; }`,
            };
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
};

const getClasses: ExtractGaladrielCSSClassesType = (classes) => classes;

export const getStaticStyles = (key: string, value: any): string | null => {
    const staticHandler = coreStaticStyles[key];

    if (staticHandler) {
        try {
            const propertiesHandler = staticHandler({
                extractGaladrielClasses: getClasses,
            });

            const selector = `.${value}`;
            const propertiesValues = propertiesHandler[selector];

            if (propertiesValues) {
                try {
                    const pseudClasses: string[] = [];
                    const classesString = Object.entries(propertiesValues)
                        .map(([property, asset]) => {
                            if (property.includes("&")) {
                                pseudClasses.push(
                                    `${property.replace(
                                        "&",
                                        selector.replace("$", "")
                                    )} ${asset}`
                                );

                                return;
                            }

                            return `${property}: ${asset};`;
                        })
                        .join(" ");

                    return `${selector.replace(
                        "$",
                        ""
                    )} { ${classesString} } ${pseudClasses.join(" ")}`;
                } catch (error: any) {
                    console.error("An error occurred:", error);
                }
            }
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    return null;
};

export const getStyleClasses = (key: string, node: Node) => {
    const testRegex = /^\$\w+(-\w+)*$/;
    const value = (node as any).value;

    if (value && typeof value === "string" && testRegex.test(value)) {
        const staticStyle = getStaticStyles(key, value);

        if (staticStyle) {
            // replace the node value to the class name
            (node as any).value = value.replace("$", "");

            return staticStyle;
        } else {
            const customClassName = value.replace("$", "");
            const customStyle = computeConfigCSS(customClassName);

            if (customStyle) {
                /// replace the node value to the class name
                (node as any).value = customClassName;

                return customStyle.replace("&", "");
            }
        }
    } else if (value && typeof value === "string") {
        const classContent = getDynamicStyles(key, value);

        if (classContent) {
            const { className, classValue } = classContent;

            // replace the node value to the class name
            (node as any).value = className;

            return classValue;
        }
    }
};
