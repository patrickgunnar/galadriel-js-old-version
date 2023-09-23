import { coreStaticStyles } from "../../../EssentiaHub./coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "../../../types/coreTypes";

const generateUtilityClasses: ExtractGaladrielCSSClassesType = (classes) =>
    classes;

const getStaticStyles = (__key: string, __value: any): string | null => {
    const __staticHandler = coreStaticStyles[__key];

    try {
        const __propertiesHandler = __staticHandler({
            extractGaladrielClasses: generateUtilityClasses,
        });

        const __selector = `.${__value}`;
        const __propertiesValues = __propertiesHandler[__selector];

        if (__propertiesValues) {
            try {
                const __pseudClasses: string[] = [];
                const __classesString = Object.entries(__propertiesValues)
                    .map(([__property, __asset]) => {
                        if (__property.includes("&")) {
                            __pseudClasses.push(
                                `${__property.replace(
                                    "&",
                                    __selector
                                )} ${__asset}`
                            );

                            return;
                        }

                        return `${__property}: ${__asset};`;
                    })
                    .join(" ");

                return `${__selector} { ${__classesString} } ${__pseudClasses.join(
                    " "
                )}`;
            } catch (error: any) {
                console.error("An error occurred:", error);
            }
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
};

const getDynamicStyles = (__key: string, __value: any): string | null => {
    return "";
};

const computeCSSFromObject = (__key: string, __value: any) => {
    const __staticStyles = getStaticStyles(__key, __value);

    if (!__staticStyles) {
        return getDynamicStyles(__key, __value);
    } else {
        return __staticStyles;
    }
};

export { computeCSSFromObject };
