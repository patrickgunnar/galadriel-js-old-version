"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticStyles = void 0;
const coreStaticStyles_1 = require("../../../PatterniaHub/coreStaticStyles");
const getClasses = (classes) => classes;
const getStaticStyles = (key, value, isNested = false) => {
    const staticHandler = coreStaticStyles_1.coreStaticStyles[key];
    if (staticHandler) {
        try {
            const propertiesHandler = staticHandler({
                extractGaladrielClasses: getClasses,
            });
            const selector = `.${value}`;
            const propertiesValues = propertiesHandler[selector];
            if (propertiesValues && isNested) {
                return propertiesValues;
            }
            else {
                if (propertiesValues) {
                    try {
                        const pseudClasses = [];
                        const classesString = Object.entries(propertiesValues)
                            .map(([property, asset]) => {
                            if (property.includes("&")) {
                                pseudClasses.push(`${property.replace("&", selector.replace("$", ""))} ${asset}`);
                                return;
                            }
                            return `${property}: ${asset};`;
                        })
                            .join(" ");
                        return `${selector.replace("$", "")} { ${classesString} } ${pseudClasses.join(" ")}`;
                    }
                    catch (error) {
                        console.error("An error occurred:", error);
                    }
                }
            }
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    }
    return null;
};
exports.getStaticStyles = getStaticStyles;
