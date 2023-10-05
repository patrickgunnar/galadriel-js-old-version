import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "../../../types/coreTypes";

const getClasses: ExtractGaladrielCSSClassesType = (classes) => classes;

const getStaticStyles = (
    key: string, value: any, isNested: boolean = false
): Record<string, string> | string | null => {
    const staticHandler = coreStaticStyles[key];

    if (staticHandler) {
        try {
            const propertiesHandler = staticHandler({
                extractGaladrielClasses: getClasses,
            });

            const selector = `.${value}`;
            const propertiesValues = propertiesHandler[selector];

            if (propertiesValues && isNested) {
                return propertiesValues;
            } else {
                if (propertiesValues) {
                    try {
                        const pseudClasses: string[] = [];
                        const classesString = Object.entries(propertiesValues)
                            .map(([property, asset]) => {
                                if (property.includes("&")) {
                                    pseudClasses.push(
                                        `${property.replace("&", selector.replace("$", ""))} ${asset}`
                                    );
    
                                    return;
                                }
    
                                return `${property}: ${asset};`;
                            })
                            .join(" ");
    
                        return `${selector.replace("$", "")} { ${classesString} } ${pseudClasses.join(" ")}`;
                    } catch (error: any) {
                        console.error("An error occurred:", error);
                    }
                }
            }
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    return null;
};

export { getStaticStyles };
