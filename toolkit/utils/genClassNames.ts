import { coreStaticStyles } from "../../tools/coreStaticStyles";
import { ExtractGaladrielCSSClassesType } from "../../types/coreTypes";
import { CreateClassesType } from "../../types/galadrielIntelliSense";

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
