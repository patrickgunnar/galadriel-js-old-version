import { ClassesObjectType, ExtractGaladrielCSSClassesType } from "coreTypes";
import { CreateClassesType } from "galadrielIntelliSense";
import { coreStaticStyles } from "../../src/coreStaticStyles";

const extractGaladrielClasses: ExtractGaladrielCSSClassesType = (classes) =>
    classes;

const extractGaladrielStylesAndClassNames = (
    classesObject: CreateClassesType
) => {
    const extractedStyles: ClassesObjectType = {};
    const classNames: string[] = [];

    for (const [key, value] of Object.entries(classesObject)) {
        const currentKeyClass = `.${value}`;
        const handleCurrentKey = coreStaticStyles[key] || {};
        const stylesForClass = handleCurrentKey({ extractGaladrielClasses });
        const extractedStyleClass = stylesForClass[currentKeyClass];

        // If the style for the current class is not found, skip to the next iteration
        if (!extractedStyleClass) continue;

        extractedStyles[currentKeyClass] = extractedStyleClass;
        classNames.push(value);
    }

    return [extractedStyles, classNames.join(" ")];
};

export { extractGaladrielStylesAndClassNames };
