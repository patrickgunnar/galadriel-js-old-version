//@ts-ignore
import { coreDynamicProperties } from "../PatterniaHub/coreDynamicProperties";
import { coreStaticStyles } from "../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "../types/coreTypes";
import { CreateClassesType } from "../types/typeManifest";

interface CallbackType {
    (): CreateClassesType;
}

interface CreateStylesType {
    (callback: CallbackType): string;
}

const getClasses: ExtractGaladrielCSSClassesType = (cls) => cls;

const createStyles: CreateStylesType = (callback): string => {
    try {
        return Object.entries(callback()).reduce((acc, [key, value]) => {
            const staticUtilities = coreStaticStyles[key]?.({
                extractGaladrielClasses: getClasses,
            });

            if (staticUtilities) {
                const styles = staticUtilities[`.${value}`] ?? null;

                if (styles) {
                    return acc + (acc.length > 0 ? " " : "") + value;
                }
            } else {
                const property = coreDynamicProperties[key] ?? null;

                if (property && value && typeof value === "string") {
                    const sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, "");
                    const cssRule = `galadriel-${property}__${sanitizedValue}`;

                    return acc + (acc.length > 0 ? " " : "") + cssRule;
                }
            }

            return acc;
        }, "");
    } catch (error: any) {
        console.error("An error occurred:", error);

        return "";
    }
};

export { createStyles };
