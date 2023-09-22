const { coreStaticStyles } = require("../builds/sourceCore/coreStaticStyles");

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
            const pseudoStyleHandler = [];
            const staticStyleString = Object.entries(staticProperties)
                .map(([property, value]) => {
                    if (property.includes("&")) {
                        pseudoStyleHandler.push(
                            `${property.replace("&", selector)} ${value}`
                        );

                        return;
                    }

                    return `${property}: ${value};`;
                })
                .join(" ");

            return `${selector} { ${staticStyleString} } ${pseudoStyleHandler.join(
                " "
            )}`;
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
