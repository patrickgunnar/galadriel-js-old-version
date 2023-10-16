import {
    genDynamicAndConfigClasses,
    genStaticAndConfigClasses,
} from "./quantumMesh";

/**
 * Retrieve and process styles for a key-value pair outside of nested objects.
 *
 * @param {string} key - The key associated with the style.
 * @param {string} value - The value representing the style.
 * @returns {(Object | null)} An object with the generated class name and associated CSS rule, or null if unable to generate.
 * @returns {string} .name - The generated class name.
 * @returns {string} .classRule - The associated CSS rule for the generated class.
 * @returns {null} If unable to generate.
 */
function retrieveStylesOutsideNestedObjects(
    key: string,
    value: string
): { name: string; classRule: string } | null {
    if (key && value) {
        // Check if value follows a specific pattern (starts with "$" followed by alphanumeric characters and dashes)
        const testRegex = /^\$\w+(-\w+)*$/;

        try {
            if (testRegex.test(value)) {
                // If the value follows the pattern, it's a static or config value
                const result = genStaticAndConfigClasses(key, value);

                if (typeof result === "object") {
                    // If result is an object (static or config style), return it
                    return result;
                }
            } else {
                // If the value doesn't follow the pattern, it's a dynamic value
                const result = genDynamicAndConfigClasses(key, value);

                if (typeof result === "object") {
                    // If result is an object (dynamic style), return it
                    return result;
                }
            }
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    // Return null if unable to generate
    return null;
}

export { retrieveStylesOutsideNestedObjects };
