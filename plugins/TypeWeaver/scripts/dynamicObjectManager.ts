import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielClassesType } from "../../../types/coreTypes";

const extractor: ExtractGaladrielClassesType = (classes) => {
    return Object.keys(classes).map((key) => key.replace(".", ""));
};

const dynamicObjectManager = (): string => {
    try {
        const keys = new Set([
            ...Object.keys(coreStaticStyles),
            ...Object.keys(coreDynamicProperties),
        ]);
        const types = Array.from(keys).map((key) => {
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
                    ? options.join(" | ") + "| string"
                    : "string";

            return `${key}?: ${recordFormat};`;
        });

        return types.join(" ");
    } catch (error) {
        console.error("An error occurred:", error);
    }

    return "";
};

export { dynamicObjectManager };
