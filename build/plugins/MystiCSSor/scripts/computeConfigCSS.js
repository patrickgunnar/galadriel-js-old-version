"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeConfigCSS = void 0;
const coreDynamicProperties_1 = require("../../../PatterniaHub/coreDynamicProperties");
const parseConfig_1 = require("./parseConfig");
const computeConfigCSS = (clsName, isNested = false) => {
    const { craftStyles = {} } = (0, parseConfig_1.parseConfig)();
    const customStyles = [];
    for (const [configKey, configValue] of Object.entries(craftStyles)) {
        const property = coreDynamicProperties_1.coreDynamicProperties[configKey];
        if (property) {
            for (const [key, value] of Object.entries(configValue)) {
                if (clsName === key || clsName === key.split(":")[0]) {
                    if (isNested) {
                        return { customKey: property, customValue: value };
                    }
                    else {
                        let stylesClass;
                        if (key.includes(":")) {
                            stylesClass = `.${key} { ${property}: ${value}; }`;
                        }
                        else {
                            stylesClass = `.${key}& { ${property}: ${value}; }`;
                        }
                        customStyles.push(stylesClass);
                    }
                }
            }
        }
    }
    return customStyles.join(" ");
};
exports.computeConfigCSS = computeConfigCSS;
