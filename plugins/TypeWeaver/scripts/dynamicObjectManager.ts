import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { ExtractGaladrielClassesType, GaladrielParamsType } from "../../../types/coreTypes";

const extractGaladrielClasses: ExtractGaladrielClassesType = (__classes) => {
    return Object.keys(__classes).map((__key) => __key.replace(".", ""));
};

const dynamicObjectManager = (): GaladrielParamsType => {
    try {
        return Object.keys(coreStaticStyles).reduce(
            (__acc, __key) => ({
                ...__acc,
                [__key]: coreStaticStyles[__key]({ extractGaladrielClasses }),
            }),
            {}
        );
    } catch (error) {
        console.error("An error occurred:", error);
    }

    return {};
};

export { dynamicObjectManager };
