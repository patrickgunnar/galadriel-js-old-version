import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";
import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { parseConfig } from "./parseConfig";
import { hashHex } from "./hashHex";

/**
 * Generate static and configuration-based CSS classes for a key-value pair.
 *
 * @param {string} key - The key associated with the style.
 * @param {string} value - The value representing the style.
 * @param {boolean} [isNested=false] - Indicates if the style is for a nested element.
 * @returns {(Object | string | null)} An object with the generated class name and associated CSS rule, a string if nested, or null if unable to generate.
 * @returns {string} .name - The generated class name.
 * @returns {string} .classRule - The associated CSS rule for the generated class.
 * @returns {string} The property value (if nested).
 * @returns {null} If unable to generate.
 */
export function genStaticAndConfigClasses(
    key: string,
    value: string,
    isNested = false
): { name: string; classRule: string } | string | null {
    /**
     * Returns a record of classes.
     *
     * @param {Record<string, Record<string, any>>} cls - The record of classes.
     * @returns {Record<string, Record<string, any>>} The record of classes.
     */
    function getClasses(cls: Record<string, Record<string, any>>): any {
        return cls;
    }

    try {
        const handleStatic = coreStaticStyles[key];

        if (handleStatic && typeof handleStatic === "function") {
            const keyProperties = handleStatic({
                extractGaladrielClasses: getClasses,
            });
            const selector = `.${value}`;
            const keyProperty = keyProperties[selector];

            if (isNested && keyProperty) {
                return keyProperty;
            } else if (keyProperty) {
                try {
                    const pseudoContent: string[] = [];
                    const styleContent = Object.entries(keyProperty)
                        .map(([property, asset]) => {
                            if (property.includes("&")) {
                                pseudoContent.push(
                                    `${property.replace(
                                        "&",
                                        selector.replace("$", "")
                                    )} ${asset}`
                                );

                                return;
                            }

                            return `${property}: ${asset};`;
                        })
                        .join(" ");

                    return {
                        name: value.replace("$", ""),
                        classRule: `${selector.replace(
                            "$",
                            ""
                        )} { ${styleContent} } ${pseudoContent.join(" ")}`,
                    };
                } catch (error: any) {
                    console.error("An error occurred:", error);
                }
            }
        } else {
            try {
                const { craftStyles } = parseConfig();
                const configValue = value.replace("$", "");
                const configClassName = key.includes(":")
                    ? configValue.split(":")[0]
                    : configValue;
                const configStyles: string[] = [];

                for (const [configKey, configValue] of Object.entries(
                    craftStyles
                )) {
                    const property = coreDynamicProperties[configKey];

                    if (property) {
                        const valueEntries = Object.entries(
                            configValue as Record<string, string>
                        );

                        for (const [entryKey, entryValue] of valueEntries) {
                            if (
                                configClassName === entryKey ||
                                configClassName === entryKey.split(":")[0]
                            ) {
                                if (isNested) {
                                    return `${property}:${entryValue}`;
                                } else {
                                    if (entryKey.includes(":")) {
                                        configStyles.push(
                                            `.${entryKey} { ${property}: ${entryValue}; }`
                                        );
                                    } else {
                                        configStyles.push(
                                            `.${entryKey}& { ${property}: ${entryValue}; }`
                                        );
                                    }
                                }
                            }
                        }
                    }
                }

                return {
                    name: configClassName,
                    classRule: configStyles.join(" "),
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
 * Generate dynamic CSS classes for a key-value pair.
 *
 * @param {string} key - The key associated with the style.
 * @param {string} value - The value representing the style.
 * @param {boolean} [isNested=false] - Indicates if the style is for a nested element.
 * @returns {(Object | string | null)} An object with the generated class name and associated CSS rule, a string if nested, or null if unable to generate.
 * @returns {string} .name - The generated class name (if not nested).
 * @returns {string} .classRule - The associated CSS rule for the generated class (if not nested).
 * @returns {string} The property value (if nested).
 * @returns {null} If unable to generate.
 */
export function genDynamicAndConfigClasses(
    key: string,
    value: string,
    isNested = false
): { name: string; classRule: string } | string | null {
    try {
        const property = coreDynamicProperties[key];

        if (property) {
            if (isNested) {
                return property;
            } else {
                const hashedHex = hashHex(`${property}:${value}`);

                return {
                    name: `galadriel_${hashedHex}`,
                    classRule: `.galadriel_${hashedHex} { ${property}: ${value}; }`,
                };
            }
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
}

/**
 * Generate a CSS class name and associated rule.
 *
 * @param {string} rules - The CSS rules associated with the class.
 * @param {string} key - The key - pseudo class or element associated with the style.
 * @returns {(Object | null)} An object with the generated class name, associated CSS rule, and related properties, or null if unable to generate.
 * @returns {string} .name - The generated class name.
 * @returns {string} .classRule - The associated CSS rule for the generated class.
 * @returns {null} If unable to generate.
 */
export function genCSSClassName(
    rules: string,
    key: string
): { name: string; classRule: string } | null {
    try {
        const property = coreDynamicProperties[key];

        if (property) {
            const hashString = property.includes("&")
                ? rules
                : `${property}_${rules}`;
            const hashedHex = hashHex(hashString);

            if (property.includes("&")) {
                return {
                    name: `galadriel_${hashedHex}`,
                    classRule: `.galadriel_${property.replace(
                        "&",
                        hashedHex
                    )} { ${rules} }`,
                };
            } else {
                return {
                    name: `galadriel_${hashedHex}`,
                    classRule: `.galadriel_${hashedHex} { ${rules} }`,
                };
            }
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return null;
}
