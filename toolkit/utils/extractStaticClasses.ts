import { ExtractGaladrielCSSClassesType } from "coreTypes";
import { CreateClassesType } from "galadrielIntelliSense";
import { coreStaticStyles } from "../../src/coreStaticStyles";

const extractGaladrielClasses: ExtractGaladrielCSSClassesType = (classes) =>
    classes;

const extractGaladrielStylesAndClassNames = (
    classesObject: CreateClassesType
) => {
    const extractedStyles: string[] = [];
    const classNames: string[] = [];

    for (const [key, selector] of Object.entries(classesObject)) {
        const selectorCSS = `.${selector}`;
        const handleCurrentKey = coreStaticStyles[key] || {};
        const stylesForClass = handleCurrentKey({ extractGaladrielClasses });
        const extractedStyleClass = stylesForClass[selectorCSS];

        // If the style for the current class is not found, skip to the next iteration
        if (!extractedStyleClass) continue;

        const [[objectKey, objectValue]] = Object.entries(extractedStyleClass);

        classNames.push(selector);
        extractedStyles.push(
            `${selectorCSS} { ${objectKey}: ${objectValue}; }`
        );
    }

    return [extractedStyles.join(" "), classNames.join(" ")];
};

export { extractGaladrielStylesAndClassNames };
