const { coreStaticStyles } = require("../builds/core/coreStaticStyles");

const extractGaladrielClasses = (classes) => {
    return classes;
};

const extractStaticStyle = (key, value) => {
    const staticStyleHandler = coreStaticStyles[key];

    if (staticStyleHandler) {
        const staticPropertiesHandler = staticStyleHandler({
            extractGaladrielClasses,
        });

        const selector = `.${value}`;
        const staticProperties = staticPropertiesHandler[selector];

        if (staticProperties) {
            const staticStyleString = Object.entries(staticProperties)
                .map(([property, value]) => `${property}: ${value};`)
                .join(" ");

            return `${selector} { ${staticStyleString} }`;
        }
    }

    return null;
};

const extractDynamicStyle = (key, value) => {
    console.log("\nINSIDE OF: extractDynamicStyle\n");

    return "";
};

const extractClasses = (key, value) => {
    const staticStyle = extractStaticStyle(key, value);

    if (!staticStyle) {
        const dynamicStyle = extractDynamicStyle(key, value);

        return dynamicStyle;
    } else {
        return staticStyle;
    }
};

module.exports = { extractClasses };
