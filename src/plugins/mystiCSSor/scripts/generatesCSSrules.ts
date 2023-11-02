import { coreDynamicProperties } from "../../../kernel/coreDynamicProperties";
import { coreStaticStyles } from "../../../kernel/coreStaticStyles";
import { hashingHex } from "./hashingHex";
import { parseGaladrielConfig } from "./parseGaladrielConfig";

/**
 * Extracts Galadriel classes from the provided record.
 *
 * @param {Record<string, Record<string, any>>} cls - The record containing Galadriel classes.
 * @returns {any} - The extracted Galadriel classes.
 */
function extractGaladrielClasses(cls: Record<string, Record<string, any>>): any {
    return cls;
}

/**
 * Adds styles to the modular AST from the core AST if they are not already present.
 *
 * @param {Record<string, Record<string, string[]>>} coreAST - The global core AST.
 * @param {Record<string, Record<string, string[]>>} modularAST - The modular AST to update.
 * @param {string} className - The CSS class name to add to the modular AST.
 */
function addsToModularAstFromCoreAst(
    coreAST: Record<string, Record<string, string[]>>,
    modularAST: Record<string, Record<string, string[]>>,
    className: string
) {
    // loop through the global ast
    for (const item in coreAST) {
        // loop through the global ast's properties
        for (const element in coreAST[item]) {
            // loop through the element's array
            for (const styles of coreAST[item][element]) {
                // if element of the property contains the styles
                if (styles.includes(className)) {
                    let setStyles = true;

                    // loop through the property's styles from the modular ast
                    for (const modularStyles of modularAST[item][element]) {
                        // if modular styles does not contain the styles
                        if (modularStyles.includes(className)) {
                            setStyles = false;
                            break;
                        }
                    }

                    // if setStyles is true
                    if (setStyles) {
                        modularAST[item][element].push(styles);
                    }

                    return;
                }
            }
        }
    }
}

/**
 * Collects static configuration rules for generating CSS class names and styles.
 *
 * @param {string} key - The key representing the static configuration.
 * @param {string} value - The value associated with the static configuration.
 * @param {string} selector - The CSS selector for the configuration.
 * @param {string[]} collectedObjectsProperties - An array of already collected properties.
 * @param {boolean | undefined} module - Optional module.
 * @param {string | undefined} filePath = Optional file path.
 * @param {string | null} pseudo - Optional pseudo-class selector (e.g., ":hover").
 * @param {string | null} pseudoHex - Optional pseudo-class selector hashed (e.g., "gf0").
 * @param {string | null} media - Optional media query selector (e.g., "@media screen").
 * @param {Record<string, Record<string, string[]>> | null} coreAST - The core Abstract Syntax Tree (AST).
 * @param {Record<string, Record<string, string[]>> | null} modularAST - The modular Abstract Syntax Tree (AST).
 * @returns {Object | null} An object containing class name(s) and associated styles,
 *                          or null if no matching rules are found.
 */
function collectsStaticConfigRules(
    key: string, value: string, selector: string, collectedObjectsProperties: string[], module: boolean | undefined,
    filePath: string | undefined, pseudo: string | null = null, pseudoHex: string | null = null, media: string | null = null,
    coreAST: Record<string, Record<string, string[]>> | null = null,
    modularAST: Record<string, Record<string, string[]>> | null = null
): { name: string | string[]; styles: string } | null {
    try {
        // Handle static styles defined in coreStaticStyles
        const handleStaticRules = coreStaticStyles[JSON.parse(key)];
                    
        // if there is a static handler
        if (handleStaticRules && typeof handleStaticRules === "function") {
            try {
                // collects the rules of the current property, generates the selector and extracts the selector rules
                const staticProperties = handleStaticRules({ extractGaladrielClasses });
                const propertyRules = staticProperties[JSON.parse(selector)];

                // if there is the selector rules
                if (propertyRules) {
                    const pseudoRules: string[] = [];
                    const stylesRules = Object.entries(propertyRules)
                        .map(([rule, asset]) => {
                            // if rule includes an ampersand, it is a pseudo class
                            if (rule.includes("&")) {
                                pseudoRules.push(
                                    `${rule.replace("&", JSON.parse(selector.replace("$", "")))} ${asset}`
                                );

                                return;
                            }

                            return `${rule}: ${asset};`;
                        }).join(" ");

                    // generates the class name
                    const className = 
                        `${JSON.parse(
                            selector.replace("$", "").replace(".", "")
                        )}${pseudo ? `-${pseudoHex}` : media ? `-${media}` : ""}${module && filePath ? `-${hashingHex(filePath, false, true)}` : ""}`;

                    return {
                        name: className,
                        styles: `.${className}${pseudo ? `:${pseudo}` : ""} { ${stylesRules} } ${pseudoRules.join(" ")}`
                    };
                }
            } catch (error: any) {
                console.error("An error occurred:", error);
            }
        } else {
            try {
                // collects the rules from the galadriel.config file
                const { craftStyles } = parseGaladrielConfig();
                const configRules: string[] = [];
                const configClassNames: string[] = [];
                const configAsset = value.replace("$", "");
                const configSelector = key.includes(":") 
                    ? JSON.parse(configAsset).split(":")[0] 
                    : JSON.parse(configAsset);
                
                // if the current config selector was already used
                if (collectedObjectsProperties.includes(configSelector)) {
                    if (module && modularAST && coreAST) {
                        // collects the class from the coreAST then adds it to the modularAST
                        addsToModularAstFromCoreAst(coreAST, modularAST, configSelector);
                    }

                    return null;
                }

                // loop through the style entries in config file
                for (const [configKey, configValue] of Object.entries(craftStyles)) {
                    // collects the dynamic selector
                    const dynamicProperty = coreDynamicProperties[configKey];

                    if (dynamicProperty) {
                        // collects the entries from configValue
                        const configValueEntries = Object.entries(
                            configValue as Record<string, string>
                        );

                        // loop through the entries of configValueEntries
                        for (const [entryKey, entryValue] of configValueEntries) {
                            // if config selector is equal the entry key or entry key first value
                            if (configSelector === entryKey || configSelector === entryKey.split(":")[0]) {
                                // if config entry key includes a pseudo class
                                if (entryKey.includes(":")) {
                                    configClassNames.push(`${entryKey}${module ? `-HASHED_PATH` : ""}`);
                                    configRules.push(
                                        `.${`${entryKey}${module && filePath ? `-${hashingHex(filePath, false, true)}` : ""}`} { ${dynamicProperty}: ${entryValue}; }`
                                    );
                                } else {
                                    // generates the class name
                                    const className = 
                                        `${entryKey}${pseudo ? `-${pseudoHex}` : media ? `-${media}` : ""}${module && filePath ? `-${hashingHex(filePath, false, true)}` : ""}`;

                                    configClassNames.push(className);
                                    configRules.push(
                                        `.${className}${pseudo ? `:${pseudo}` : ""} { ${dynamicProperty}: ${entryValue}; }`
                                    );
                                }
                            }
                        }
                    }
                }

                return {
                    name: configClassNames,
                    styles: configRules.join(" ")
                };
            } catch (error: any) {
                console.error("An error occurred:", error);
            }
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
}

/**
 * Collects dynamic configuration rules for generating CSS class names and styles.
 *
 * @param {string} property - The property associated with the dynamic configuration.
 * @param {string} key - The key representing the dynamic configuration.
 * @param {string} value - The value associated with the dynamic configuration.
 * @param {string[]} collectedObjectsProperties - An array of already collected properties.
 * @param {boolean | undefined} module - Optional module.
 * @param {string | undefined} filePath = Optional file path.
 * @param {string | null} pseudo - Optional pseudo-class selector (e.g., ":hover").
 * @param {string | null} pseudoHex - Optional pseudo-class selector hashed (e.g., "gf0").
 * @param {string | null} media - Optional media query selector (e.g., "@media screen").
 * @param {Record<string, Record<string, string[]>> | null} coreAST - The core Abstract Syntax Tree (AST).
 * @param {Record<string, Record<string, string[]>> | null} modularAST - The modular Abstract Syntax Tree (AST).
 * @returns {Object | null} An object containing a class name and associated styles,
 *                          or null if no matching rules are found.
 */
function collectsDynamicRules(
    property: string, key: string, value: string, collectedObjectsProperties: string[], module: boolean | undefined,
    filePath: string | undefined, pseudo: string | null = null, pseudoHex: string | null = null, media: string | null = null,
    coreAST: Record<string, Record<string, string[]>> | null = null,
    modularAST: Record<string, Record<string, string[]>> | null = null
): { name: string; styles: string } | null {
    try {
        // generates the class name with the property
        const className = 
            `galadriel__${hashingHex(property)}${pseudo ? `-${pseudoHex}` : media ? `-${media}` : ""}${module && filePath ? `-${hashingHex(filePath, false, true)}` : ""}`;

        // if the current class name was already used
        if (collectedObjectsProperties.includes(className)) {
            if (module && modularAST && coreAST) {
                // collects the class from the coreAST then adds it to the modularAST
                addsToModularAstFromCoreAst(coreAST, modularAST, className);
            }

            return null;
        }

        // collects the dynamic property
        const dynamicProperty = coreDynamicProperties[JSON.parse(key)];

        if (dynamicProperty) {
            return {
                name: className,
                styles: `.${className}${pseudo ? `:${pseudo}` : ""} { ${dynamicProperty}: ${JSON.parse(value)} }`
            };
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
}

/**
 * Appends styles to the core Abstract Syntax Tree (AST) for a given key and media query.
 *
 * @param {Record<string, Record<string, string[]>>} ast - The core AST containing style information.
 * @param {string} key - The key representing the property or selector in the core AST.
 * @param {string} styles - The styles to append to the core AST.
 * @param {string | null} media - Optional media query selector (e.g., "@media screen").
 */
function appendToAST(
    ast: Record<string, Record<string, string[]>>, key: string, styles: string, media: string | null = null
) {
    try {
        let notFound = false;

        // loop through the core ast
        for (const coreKey in ast) {
            // get the object's property or undefined
            const coreNode = ast[coreKey][media ? media : key];

            // if exists the property and it is an array
            if (coreNode && Array.isArray(coreNode)) {
                coreNode.push(styles);
                notFound = true;
                break;
            }
        }

        // if does not exists the property
        // creates one in the "otherProperties" property
        if (!notFound) {
            ast["otherProperties"][media ? media : key] = [styles];
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }
}

/**
 * Generates CSS rules based on the objects array and appends them to the core Abstract Syntax Tree (AST).
 *
 * @param {string[]} objectsArray - An array of object properties to generate CSS rules from.
 * @param {Record<string, Record<string, string[]>>} coreAST - The core Abstract Syntax Tree (AST).
 * @param {string[]} collectedObjectsProperties - An array of already collected properties.
 * @param {boolean | undefined} module - set the current saving to module.
 * @param {Record<string, Record<string, string[]>> | undefined} modularAST - The modular Abstract Syntax Tree (AST).
 * @param {string | undefined} filePath = Optional file path.
 */
function generatesCSSrules(
    objectsArray: string[],
    coreAST: Record<string, Record<string, string[]>>,
    collectedObjectsProperties: string[],
    module: boolean | undefined,
    modularAST: Record<string, Record<string, string[]>> | undefined,
    filePath: string | undefined
) {
    try {
        for (const property of objectsArray) {
            // if the current property is key:value type
            if (!property.includes("{")) {
                try {
                    // extracts the key and value
                    const [key, value] = property.split(":");
                    const selector = `.${JSON.parse(value)}`;
        
                    // if the current selector was already used
                    if (collectedObjectsProperties.includes(JSON.parse(value).replace("$", ""))) {
                        if (module && modularAST) {
                            // collects the class from the coreAST then adds it to the modularAST
                            addsToModularAstFromCoreAst(coreAST, modularAST, JSON.parse(value).replace("$", ""));
                        }

                        continue;
                    }
        
                    // if the current value is a static or config property
                    if (value.includes("$")) {
                        try {
                            // collects the styles
                            const collectedStyles = collectsStaticConfigRules(
                                JSON.stringify(key), value, JSON.stringify(selector), collectedObjectsProperties, module,
                                filePath, null, null, null, module ? coreAST : null, module ? modularAST : null
                            );
            
                            if (collectedStyles) {
                                const { styles, name } = collectedStyles;
            
                                if (styles && name) {
                                    if (Array.isArray(name)) {
                                        collectedObjectsProperties.concat(name);
                                    } else {
                                        collectedObjectsProperties.push(name);
                                    }
                                    
                                    appendToAST(coreAST, key, styles);

                                    // if module is true
                                    if (module && modularAST) {
                                        appendToAST(modularAST, key, styles);
                                    }
                                }
                            }
                        } catch (error: any) {
                            console.error("An error occurred:", error);
                        }
                    } else {// if the current value is a dynamic property
                        try {
                            // collects the styles
                            const collectedStyles = collectsDynamicRules(
                                JSON.stringify(`${key}:${JSON.parse(value)}`).replace(/\s+/g, ""), 
                                JSON.stringify(key), value, collectedObjectsProperties, module, filePath, 
                                null, null, null, module ? coreAST : null, module ? modularAST : null
                            );
            
                            if (collectedStyles) {
                                const { styles, name } = collectedStyles;
            
                                if (styles && name) {
                                    collectedObjectsProperties.push(name);
                                    appendToAST(coreAST, key, styles);

                                    // if module is true
                                    if (module && modularAST) {
                                        appendToAST(modularAST, key, styles);
                                    }
                                }
                            }
                        } catch (error: any) {
                            console.error("An error occurred:", error);
                        }
                    }
                } catch (error: any) {
                    console.error("An error occurred:", error);
                }
            } else if (property.includes("{")) { // if property us nested
                try {
                    // get the index of the first colon
                    const indexOfFirstColon = property.indexOf(":");
        
                    if (indexOfFirstColon) {
                        // collects the pseudo and the json
                        const pseudo = property.substring(0, indexOfFirstColon);
                        const properties = property.substring(
                            indexOfFirstColon + 1, property.length
                        ).replace(/([a-zA-Z-]+)\s*:/g, '"$1":');
        
                        if (pseudo && properties) {
                            // parse the json
                            const objProperties = JSON.parse(properties) as Record<string, string>;
        
                            // loop through the objects properties
                            for (const [nestedKey, nestedValue] of Object.entries(objProperties)) {
                                const readyKey = JSON.stringify(nestedKey);
                                const readyValue = JSON.stringify(nestedValue);
                                const readySelector = JSON.stringify(`.${nestedValue}`);
                                const readyProperty = JSON.stringify(`${nestedKey}:${nestedValue}`).replace(/\s+/g, "");
                                const pseudoHex = `g${hashingHex(pseudo, false, true)}`
        
                                // if the current value is a static or config property
                                if (nestedValue.includes("$")) {
                                    try {
                                        // collects the styles
                                        const collectedStyles = collectsStaticConfigRules(
                                            readyKey, readyValue, readySelector, collectedObjectsProperties, module,
                                            filePath, coreAST.mediaQueryVariables[pseudo] ? null : pseudo, pseudoHex,
                                            coreAST.mediaQueryVariables[pseudo] ? pseudoHex : null,
                                            module ? coreAST : null, module ? modularAST : null
                                        );
            
                                        if (collectedStyles) {
                                            const { styles, name } = collectedStyles;
            
                                            if (styles && name) {
                                                if (Array.isArray(name)) {
                                                    for (const __name of name) {
                                                        collectedObjectsProperties.push(__name);
                                                    }
                                                } else {
                                                    collectedObjectsProperties.push(name);
                                                }
            
                                                appendToAST(
                                                    coreAST, nestedKey, styles, coreAST.mediaQueryVariables[pseudo] ? pseudo : null
                                                );

                                                // if module is true
                                                if (module && modularAST) {
                                                    appendToAST(
                                                        modularAST, nestedKey, styles, modularAST.mediaQueryVariables[pseudo] ? pseudo : null
                                                    );
                                                }
                                            }
                                        }
                                    } catch (error: any) {
                                        console.error("An error occurred:", error);
                                    }
                                } else {// if the current value is a dynamic property
                                    try {
                                        // collects the styles
                                        const collectedStyles = collectsDynamicRules(
                                            readyProperty, readyKey, readyValue, collectedObjectsProperties, module,
                                            filePath, coreAST.mediaQueryVariables[pseudo] ? null : pseudo, pseudoHex,
                                            coreAST.mediaQueryVariables[pseudo] ? pseudoHex : null,
                                            module ? coreAST : null, module ? modularAST : null
                                        );
            
                                        if (collectedStyles) {
                                            const { styles, name } = collectedStyles;
            
                                            if (styles && name) {
                                                collectedObjectsProperties.push(name);
                                                appendToAST(
                                                    coreAST, nestedKey, styles, coreAST.mediaQueryVariables[pseudo] ? pseudo : null
                                                );

                                                // if module is true
                                                if (module && modularAST) {
                                                    appendToAST(
                                                        modularAST, nestedKey, styles, coreAST.mediaQueryVariables[pseudo] ? pseudo : null
                                                    );
                                                }
                                            }
                                        };
                                    } catch (error: any) {
                                        console.error("An error occurred:", error);
                                    }
                                }
                            }
                        }
                    }
                } catch (error: any) {
                    console.error("An error occurred:", error);
                }
            }
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }
}

export { generatesCSSrules };
