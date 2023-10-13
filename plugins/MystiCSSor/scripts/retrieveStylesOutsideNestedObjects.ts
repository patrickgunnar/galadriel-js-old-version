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
        const testRegex = /^\$\w+(-\w+)*$/;

        try {
            if (testRegex.test(value)) {
                const result = genStaticAndConfigClasses(key, value);

                if (typeof result === "object") {
                    return result;
                }
            } else {
                const result = genDynamicAndConfigClasses(key, value);

                if (typeof result === "object") {
                    return result;
                }
            }
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }

    return null;
}

export { retrieveStylesOutsideNestedObjects };
