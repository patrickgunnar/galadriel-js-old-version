import { coreStaticStyles } from "../coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "../../types/coreTypes";

interface ObjectEntry {
    [key: string]: string;
}

const extractGaladrielClasses: ExtractGaladrielCSSClassesType = (classes) =>
    classes;

const genStaticClasses = () => {
    return Object.keys(coreStaticStyles)
        .map((key) =>
            Object.entries(coreStaticStyles[key]({ extractGaladrielClasses }))
        )
        .map((entries) =>
            entries
                .map(
                    ([selector, properties]) =>
                        `${selector} { ${Object.entries(
                            properties as ObjectEntry
                        ).map(([prop, value]) => `${prop}: ${value}`)}; }`
                )
                .join(" ")
        )
        .join(" ");
};

export { genStaticClasses }
