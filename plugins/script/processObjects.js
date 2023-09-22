const { extractClasses } = require("./extractClasses");
const { extractNestedObjectClasses } = require("./extractNestedObjectClasses");
const { getAllFiles } = require("./getAllFiles");
const { getConfigSettings } = require("./getConfigSettings");
const { parseFile } = require("./parseFile");

const __dir = ".";
const __types = [".js", ".jsx", ".ts", ".tsx", ".html"];

const processObjects = () => {
    const __galadrielConfig = getConfigSettings();
    const __toExclude = __galadrielConfig?.exclude || [];
    const __files = getAllFiles(__dir, __types, __toExclude);
    const __staticStyles = [];

    for (const __file of __files) {
        const parsedContent = parseFile(__file);

        if (parsedContent) {
            parsedContent.forEach((obj) => {
                Object.entries(obj).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        value.forEach((nestedValue) => {
                            Object.entries(nestedValue).forEach(
                                ([nestedObjKey, nestedObjValue]) => {
                                    extractNestedObjectClasses(
                                        key,
                                        nestedObjKey,
                                        nestedObjValue
                                    );
                                }
                            );
                        });
                    } else {
                        const strStyle = extractClasses(key, value);

                        if (strStyle && !__staticStyles.includes(strStyle)) {
                            __staticStyles.push(strStyle);
                        }
                    }
                });
            });
        }
    }

    const staticStyles = __staticStyles.join(" ");

    return { staticStyles };
};

module.exports = { processObjects };
