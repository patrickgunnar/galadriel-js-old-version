import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielClassesType, GaladrielParamsType } from "../../../types/coreTypes";

const extractGaladrielClasses: ExtractGaladrielClassesType = (classes) => {
    return Object.keys(classes).map((key) => key.replace(".", ""));
};

const dynamicObjectManager = (): GaladrielParamsType => {
    try {
        return Object.keys(coreStaticStyles).reduce(
            (acc, key) => ({
                ...acc,
                [key]: coreStaticStyles[key]({ extractGaladrielClasses }),
            }),
            {}
        );
    } catch (error) {
        console.error("An error occurred:", error);
    }

    return {};
};

export { dynamicObjectManager };
