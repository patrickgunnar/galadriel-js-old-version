"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatesCSSrules = void 0;
const coreDynamicProperties_1 = require("../../../kernel/coreDynamicProperties");
const coreStaticStyles_1 = require("../../../kernel/coreStaticStyles");
const hashingHex_1 = require("./hashingHex");
const parseGaladrielConfig_1 = require("./parseGaladrielConfig");
function extractGaladrielClasses(cls) {
    return cls;
}
function collectsStaticConfigRules(key, value, selector, collectedObjectsProperties, pseudo = null, media = null) {
    // Handle static styles defined in coreStaticStyles
    const handleStaticRules = coreStaticStyles_1.coreStaticStyles[JSON.parse(key)];
    // if there is a static handler
    if (handleStaticRules && typeof handleStaticRules === "function") {
        // collects the rules of the current property, generates the selector and extracts the selector rules
        const staticProperties = handleStaticRules({ extractGaladrielClasses });
        const propertyRules = staticProperties[JSON.parse(selector)];
        // if there is the selector rules
        if (propertyRules) {
            const pseudoRules = [];
            const stylesRules = Object.entries(propertyRules)
                .map(([rule, asset]) => {
                // if rule includes an ampersand, it is a pseudo class
                if (rule.includes("&")) {
                    pseudoRules.push(`${rule.replace("&", JSON.parse(selector.replace("$", "")))} ${asset}`);
                    return;
                }
                return `${rule}: ${asset};`;
            }).join(" ");
            // generates the class name
            const className = `${pseudo ? `${pseudo}-` : media ? `${media}-` : ""}${JSON.parse(selector.replace("$", "").replace(".", ""))}`;
            return {
                name: className,
                styles: `.${className}${pseudo ? `:${pseudo}` : ""} { ${stylesRules} } ${pseudoRules.join(" ")}`
            };
        }
    }
    else {
        // collects the rules from the galadriel.config file
        const { craftStyles } = (0, parseGaladrielConfig_1.parseGaladrielConfig)();
        const configRules = [];
        const configClassNames = [];
        const configAsset = value.replace("$", "");
        const configSelector = key.includes(":")
            ? JSON.parse(configAsset).split(":")[0]
            : JSON.parse(configAsset);
        // if the current config selector was already used
        if (collectedObjectsProperties.includes(configSelector)) {
            return null;
        }
        // loop through the style entries in config file
        for (const [configKey, configValue] of Object.entries(craftStyles)) {
            // collects the dynamic selector
            const dynamicProperty = coreDynamicProperties_1.coreDynamicProperties[configKey];
            if (dynamicProperty) {
                // collects the entries from configValue
                const configValueEntries = Object.entries(configValue);
                // loop through the entries of configValueEntries
                for (const [entryKey, entryValue] of configValueEntries) {
                    // if config selector is equal the entry key or entry key first value
                    if (configSelector === entryKey || configSelector === entryKey.split(":")[0]) {
                        // if config entry key includes a pseudo class
                        if (entryKey.includes(":")) {
                            configClassNames.push(entryKey);
                            configRules.push(`.${entryKey} { ${dynamicProperty}: ${entryValue}; }`);
                        }
                        else {
                            // generates the class name
                            const className = `${pseudo ? `${pseudo}-` : media ? `${media}-` : ""}${entryKey}`;
                            configClassNames.push(className);
                            configRules.push(`.${className}${pseudo ? `:${pseudo}` : ""} { ${dynamicProperty}: ${entryValue}; }`);
                        }
                    }
                }
            }
        }
        return {
            name: configClassNames,
            styles: configRules.join(" ")
        };
    }
    return null;
}
function collectsDynamicRules(property, key, value, collectedObjectsProperties, pseudo = null, media = null) {
    // generates the class name with the property
    const className = `galadriel__${pseudo ? `${pseudo}-` : media ? `${media}-` : ""}${(0, hashingHex_1.hashingHex)(property)}`;
    // if the current class name was already used
    if (collectedObjectsProperties.includes(className)) {
        return null;
    }
    // collects the dynamic property
    const dynamicProperty = coreDynamicProperties_1.coreDynamicProperties[JSON.parse(key)];
    if (dynamicProperty) {
        return {
            name: className,
            styles: `.${className}${pseudo ? `:${pseudo}` : ""} { ${dynamicProperty}: ${JSON.parse(value)} }`
        };
    }
    return null;
}
function appendToCoreAST(coreAST, key, styles, media = null) {
    let notFound = false;
    for (const coreKey in coreAST) {
        const coreNode = coreAST[coreKey][media ? media : key];
        if (coreNode && Array.isArray(coreNode)) {
            coreNode.push(styles);
            notFound = true;
            break;
        }
    }
    if (!notFound) {
        coreAST["otherProperties"][media ? media : key] = [styles];
    }
}
function generatesCSSrules(objectsArray, coreAST, collectedObjectsProperties) {
    for (const property of objectsArray) {
        // if the current property is key:value type
        if (!property.includes("{")) {
            // extracts the key and value
            const [key, value] = property.split(":");
            const selector = `.${JSON.parse(value)}`;
            // if the current selector was already used
            if (collectedObjectsProperties.includes(JSON.parse(value).replace("$", ""))) {
                continue;
            }
            // if the current value is a static or config property
            if (value.includes("$")) {
                // collects the styles
                const collectedStyles = collectsStaticConfigRules(JSON.stringify(key), value, JSON.stringify(selector), collectedObjectsProperties);
                if (collectedStyles) {
                    const { styles, name } = collectedStyles;
                    if (styles && name) {
                        if (Array.isArray(name)) {
                            for (const __name of name) {
                                collectedObjectsProperties.push(__name);
                            }
                        }
                        else {
                            collectedObjectsProperties.push(name);
                        }
                        appendToCoreAST(coreAST, key, styles);
                    }
                }
            }
            else { // if the current value is a dynamic property
                // collects the styles
                const collectedStyles = collectsDynamicRules(property, JSON.stringify(key), value, collectedObjectsProperties);
                if (collectedStyles) {
                    const { styles, name } = collectedStyles;
                    if (styles && name) {
                        collectedObjectsProperties.push(name);
                        appendToCoreAST(coreAST, key, styles);
                    }
                }
            }
        }
        else if (property.includes("{")) { // if property us nested
            // get the index of the first colon
            const indexOfFirstColon = property.indexOf(":");
            if (indexOfFirstColon) {
                // collects the pseudo and the json
                const pseudo = property.substring(0, indexOfFirstColon);
                const properties = property.substring(indexOfFirstColon + 1, property.length).replace(/([a-zA-Z-]+)\s*:/g, '"$1":');
                if (pseudo && properties) {
                    // parse the json
                    const objProperties = JSON.parse(properties);
                    // loop through the objects properties
                    for (const [nestedKey, nestedValue] of Object.entries(objProperties)) {
                        const readyKey = JSON.stringify(nestedKey);
                        const readyValue = JSON.stringify(nestedValue);
                        const readySelector = JSON.stringify(`.${nestedValue}`);
                        const readyProperty = JSON.stringify(`${nestedKey}:${nestedValue}`);
                        // if the current value is a static or config property
                        if (nestedValue.includes("$")) {
                            // collects the styles
                            const collectedStyles = collectsStaticConfigRules(readyKey, readyValue, readySelector, collectedObjectsProperties, coreAST.mediaQueryVariables[pseudo] ? null : pseudo, coreAST.mediaQueryVariables[pseudo] ? pseudo : null);
                            if (collectedStyles) {
                                const { styles, name } = collectedStyles;
                                if (styles && name) {
                                    if (Array.isArray(name)) {
                                        for (const __name of name) {
                                            collectedObjectsProperties.push(__name);
                                        }
                                    }
                                    else {
                                        collectedObjectsProperties.push(name);
                                    }
                                    appendToCoreAST(coreAST, nestedKey, styles, coreAST.mediaQueryVariables[pseudo] ? pseudo : null);
                                }
                            }
                        }
                        else { // if the current value is a dynamic property
                            // collects the styles
                            const collectedStyles = collectsDynamicRules(readyProperty, readyKey, readyValue, collectedObjectsProperties, coreAST.mediaQueryVariables[pseudo] ? null : pseudo, coreAST.mediaQueryVariables[pseudo] ? pseudo : null);
                            if (collectedStyles) {
                                const { styles, name } = collectedStyles;
                                if (styles && name) {
                                    collectedObjectsProperties.push(name);
                                    appendToCoreAST(coreAST, nestedKey, styles, coreAST.mediaQueryVariables[pseudo] ? pseudo : null);
                                }
                            }
                            ;
                        }
                    }
                }
            }
        }
    }
}
exports.generatesCSSrules = generatesCSSrules;
