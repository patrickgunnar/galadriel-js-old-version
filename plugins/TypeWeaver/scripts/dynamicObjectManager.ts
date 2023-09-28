import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import {
    ExtractGaladrielClassesType,
    GaladrielParamsType,
} from "../../../types/coreTypes";

const extractor: ExtractGaladrielClassesType = (classes) => {
    return Object.keys(classes).map((key) => key.replace(".", ""));
};

const dynamicObjectManager = (): GaladrielParamsType => {
    try {
        const keys = new Set([
            ...Object.keys(coreStaticStyles),
            ...Object.keys(coreDynamicProperties),
        ]);
        return Array.from(keys).reduce((acc, key) => {
            const valuesHandler = coreStaticStyles[key] ?? null;
            const options: string[] = [];

            if (valuesHandler) {
                const values = valuesHandler({
                    extractGaladrielClasses: extractor,
                });

                if (values) {
                    options.push(...values);
                }
            }

            const property = coreDynamicProperties[key] ?? null;

            if (property) {
                options.push("string");
            }

            return {
                ...acc,
                [key]: options,
            };
        }, {});
    } catch (error) {
        console.error("An error occurred:", error);
    }

    return {};
};

export { dynamicObjectManager };
