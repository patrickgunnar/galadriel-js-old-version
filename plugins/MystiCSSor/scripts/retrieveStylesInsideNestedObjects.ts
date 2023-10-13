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
        const testRegex = /^\$\w+(-\w+)*$/;

        if (testRegex.test(nestedValue)) {
            const property = genStaticAndConfigClasses(
                nestedKey,
                nestedValue,
                true
            );

            if (property && typeof property === "object") {
                const [[propertyKey, propertyValue]] = Object.entries(property);

                if (propertyKey && propertyValue) {
                    return `${propertyKey}:${propertyValue};`;
                }
            } else if (typeof property === "string") {
                return property;
            }
        } else {
            const property = genDynamicAndConfigClasses(
                nestedKey,
                nestedValue,
                true
            );

            return `${property}:${nestedValue}`;
        }
    }

    return null;
}

export { retrieveStylesInsideNestedObjects };
