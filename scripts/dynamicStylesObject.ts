import { coreStaticStyles } from "../tools/coreStaticStyles";
import { extractGaladrielClasses } from "./extractGaladrielClasses";

export const dynamicStylesObject = () => {
    return Object.keys(coreStaticStyles).reduce(
        (acc, key) => ({
            ...acc,
            [key]: coreStaticStyles[key]({ extractGaladrielClasses }),
        }),
        {}
    );
};
