import {
    genDynamicAndConfigClasses,
    genStaticAndConfigClasses,
} from "./quantumMesh";

/**
 * Retrieve and process styles for a nested key-value pair within an object.
 *
 * @param {string} key - The main key associated with the style.
 * @param {string} nestedKey - The nested key associated with the style.
 * @param {string} nestedValue - The value representing the style.
 * @returns {(string | null)} The processed CSS style or null if unable to generate.
 * @returns {string} The CSS style (if processed successfully).
 * @returns {null} If unable to generate.
 */
function retrieveStylesInsideNestedObjects(
    key: string,
    nestedKey: string,
    nestedValue: string
): string | null {
    if (key && nestedValue) {
        // Check if nestedValue follows a specific pattern (starts with "$" followed by alphanumeric characters and dashes)
        const testRegex = /^\$\w+(-\w+)*$/;

        if (testRegex.test(nestedValue)) {
            // If the nestedValue follows the pattern, it's a static or config value
            const property = genStaticAndConfigClasses(
                nestedKey,
                nestedValue,
                true
            );

            if (property && typeof property === "object") {
                // If property is an object (static or config style), extract and format the CSS property and value
                const [[propertyKey, propertyValue]] = Object.entries(property);

                if (propertyKey && propertyValue) {
                    return `${propertyKey}:${propertyValue}`;
                }
            } else if (typeof property === "string") {
                // If property is a string (dynamic style), return it directly
                return property;
            }
        } else {
            // If the nestedValue doesn't follow the pattern, it's a dynamic value
            const property = genDynamicAndConfigClasses(
                nestedKey,
                nestedValue,
                true
            );

            // Return the processed CSS style for dynamic value
            return `${property}:${nestedValue}`;
        }
    }

    // Return null if unable to generate
    return null;
}

export { retrieveStylesInsideNestedObjects };
