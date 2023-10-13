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
export declare function genStaticAndConfigClasses(key: string, value: string, isNested?: boolean): {
    name: string;
    classRule: string;
} | string | null;
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
export declare function genDynamicAndConfigClasses(key: string, value: string, isNested?: boolean): {
    name: string;
    classRule: string;
} | string | null;
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
export declare function genCSSClassName(rules: string, key: string): {
    name: string;
    classRule: string;
} | null;
