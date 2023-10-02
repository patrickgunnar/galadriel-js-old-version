import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "../../../types/coreTypes";
import { computeConfigOnNested } from "./computeConfigOnNested";
import { genParsedNestedRules } from "./genParsedNestedRules";

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
    const testRegex = /^\$\w+(-\w+)*$/;
    const styleRules: Record<string, any>[] = [];
    const customRules: string[] = [];
    const stylesValues: string[] = [];
    const pseudoClass = getDynamicStyles(objKey);

    if (pseudoClass) {
        try {
            for (const [nestedKey, nestedValue] of Object.entries(objValue)) {
                if (
                    nestedValue &&
                    typeof nestedValue === "string" &&
                    testRegex.test(nestedValue)
                ) {
                    const staticRules = getStaticStyles(nestedKey, nestedValue);

                    if (staticRules) {
                        stylesValues.push(nestedKey);
                        stylesValues.push(nestedValue.replace("$", ""));
                        styleRules.push(staticRules);
                    } else {
                        const customClass = computeConfigOnNested(nestedValue.replace("$", ""));

                        if(customClass) {
                            const { customKey, customValue} = customClass;

                            if(customKey && customValue) {
                                stylesValues.push(customKey);
                                stylesValues.push(nestedValue.replace("$", ""));

                                styleRules.push({
                                    [customKey]: customValue,
                                });
                            }
                        }
                    }
                } else {
                    const dynamicRules = getDynamicStyles(nestedKey);

                    if (dynamicRules) {
                        stylesValues.push(nestedKey);
                        stylesValues.push((nestedValue as string).replace("$", ""));

                        styleRules.push({
                            [dynamicRules]: nestedValue,
                        });
                    }
                }
            }

            return genParsedNestedRules(styleRules, stylesValues, objKey, pseudoClass, customRules);
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    return null;
};

export { parseNestedObjClasses };
