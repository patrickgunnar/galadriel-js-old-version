import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "../../../types/coreTypes";

const getClasses: ExtractGaladrielCSSClassesType = (classes) => classes;

const getStaticStyles = (
    key: string,
    value: any
): Record<string, any> | null => {
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

const parseNestedObjClasses = (objKey: string, objValue: any) => {
    const testRegex = /^__\w+(-\w+)*$/;
    const styleRules: Record<string, any>[] = [];
    const stylesValues: string[] = [];

    try {
        for (const [nestedKey, nestedValue] of Object.entries(objValue)) {
            const staticRules = getStaticStyles(nestedKey, nestedValue);

            if (!staticRules) {
                const dynamicRules = getDynamicStyles(nestedKey);
                const isMatchingPattern = testRegex.test(nestedValue as string);

                if (dynamicRules && !isMatchingPattern) {
                    stylesValues.push(nestedKey);
                    stylesValues.push(nestedValue as string);

                    styleRules.push({
                        [dynamicRules]: nestedValue,
                    });
                }
            } else {
                stylesValues.push(nestedKey);
                stylesValues.push(nestedValue as string);
                styleRules.push(staticRules);
            }
        }

        if (styleRules) {
            const sanitizedSpecialChars = /[^a-zA-Z0-9]/g;
            const sanitizedCamelCase = /([a-z])([A-Z])/g;

            const styles = styleRules.reduce((acc, obj) => {
                const [[key, value]] = Object.entries(obj);

                if (key && value) {
                    return (acc += `${key}: ${value}; `);
                }

                return acc;
            }, "");

            const pseudoClass = getDynamicStyles(objKey);

            if (pseudoClass) {
                const valuesName = stylesValues
                    .join("-")
                    .replace(/[aeiou]/gi, "")
                    .replace(sanitizedSpecialChars, "_")
                    .replace(/_+/g, "_");

                const className = `.${objKey.replace(
                    sanitizedCamelCase,
                    "$1-$2"
                )}__${valuesName}`.toLowerCase();

                if (pseudoClass.includes("$")) {
                    const sanitizedMedia = pseudoClass.replace("$", "");
                    const media = `@media screen and (${sanitizedMedia}) { ${className} { ${styles} } }`;

                    return media;
                } else {
                    const classNameWithPseudo = pseudoClass.replace(
                        "&",
                        className
                    );

                    return `${classNameWithPseudo} { ${styles} }`;
                }
            }
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
};

export { parseNestedObjClasses };
