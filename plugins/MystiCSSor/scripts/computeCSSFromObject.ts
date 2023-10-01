import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "../../../types/coreTypes";
import { computeConfigCSS } from "./computeConfigCSS";

const getClasses: ExtractGaladrielCSSClassesType = (classes) => classes;

const getStaticStyles = (key: string, value: any): string | null => {
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
                                        selector
                                    )} ${asset}`
                                );

                                return;
                            }

                            return `${property}: ${asset};`;
                        })
                        .join(" ");

                    return `${selector} { ${classesString} } ${pseudClasses.join(
                        " "
                    )}`;
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

const getDynamicStyles = (key: string, value: any): string | null => {
    try {
        const property = coreDynamicProperties[key];

        if (property && value && typeof value === "string") {
            const sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, "");
            const cssRule = `.galadriel-${property}__${sanitizedValue} { ${property}: ${value}; }`;

            return cssRule;
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
};

const computeCSSFromObject = (key: string, value: any) => {
    const staticStyles = getStaticStyles(key, value);

    if (!staticStyles) {
        if (typeof value === "string" && value.includes("__")) {
            return computeConfigCSS(value).replace("&", "");
        } else {
            return getDynamicStyles(key, value);
        }
    } else {
        return staticStyles;
    }
};

export { computeCSSFromObject };
