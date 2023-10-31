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
declare function retrieveStylesInsideNestedObjects(key: string, nestedKey: string, nestedValue: string): string | null;
export { retrieveStylesInsideNestedObjects };
