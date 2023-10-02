import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielClassesType } from "../../../types/coreTypes";

const extractor: ExtractGaladrielClassesType = (classes) => {
    return Object.keys(classes).map((key) => key.replace(".", ""));
};

const pseudoClasses = [
    "hover",
    "active",
    "focus",
    "firstChild",
    "lastChild",
    "firstOfType",
    "lastOfType",
    "visited",
    "checked",
    "minLargeDesktops",
    "minStandardDesktops",
    "minPortraitTablets",
    "minLargeSmartphones",
    "minStandardSmartphones",
    "maxLargeDesktops",
    "maxStandardDesktops",
    "maxPortraitTablets",
    "maxLargeSmartphones",
    "maxStandardSmartphones",
];

const dynamicObjectManager = (): { types: string; config: string } | null => {
    try {
        const config: string[] = []
        const keys = new Set([
            ...Object.keys(coreStaticStyles),
            ...Object.keys(coreDynamicProperties),
        ]);
        const types = Array.from(keys).map((key) => {
            config.push(`${key}?: Record<string, string>;`)

            const valuesHandler = coreStaticStyles[key] ?? null;
            const options: string[] = [];

            if (valuesHandler) {
                const values = valuesHandler({
                    extractGaladrielClasses: extractor,
                });

                if (values) {
                    options.push(...values.map((val: string) => `'${val}'`));
                }
            }

            const recordFormat =
                options.length > 0
                    ? options.join(" | ")
                    : pseudoClasses.includes(key)
                    ? "Record<string, string>"
                    : "string";

            return `${key}?: ${recordFormat};`;
        });

        return {
            types: types.join(" "),
            config: config.join(" ")
        };
    } catch (error) {
        console.error("An error occurred:", error);
    }

    return null;
};

export { dynamicObjectManager };
