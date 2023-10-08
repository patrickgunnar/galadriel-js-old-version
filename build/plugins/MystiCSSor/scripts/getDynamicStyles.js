"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDynamicStyles = void 0;
const coreDynamicProperties_1 = require("../../../PatterniaHub/coreDynamicProperties");
const hashHex_1 = require("./hashHex");
const getDynamicStyles = (key, isNested, value) => {
    try {
        const property = coreDynamicProperties_1.coreDynamicProperties[key];
        if (isNested && property) {
            return property;
        }
        else {
            if (property && value && value && typeof value === "string") {
                const hashedHex = (0, hashHex_1.hashHex)(`${property}:${value}`);
                return {
                    className: `galadriel_${hashedHex}`,
                    classValue: `.galadriel_${hashedHex} { ${property}: ${value}; }`,
                };
            }
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
    return null;
};
exports.getDynamicStyles = getDynamicStyles;
