import { coreStaticStyles } from "../../src/coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "coreTypes";
import { CreateClassesType } from "galadrielIntelliSense";

const extractGaladrielClasses: ExtractGaladrielCSSClassesType = (classes) =>
    classes;

export const genClassNames = (classesObject: CreateClassesType): string => {
    const classNames: string[] = [];

    for (const [key, selector] of Object.entries(classesObject)) {
        const selectorCSS = `.${selector}`;
        const handleCurrentKey = coreStaticStyles[key] || {};
        const stylesForClass = handleCurrentKey({ extractGaladrielClasses });
        const extractedStyleClass = stylesForClass[selectorCSS];

        if (extractedStyleClass) classNames.push(selector);
    }

    return classNames.join(" ");
};
