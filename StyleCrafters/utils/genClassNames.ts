/**
 * Generate class names from a record of classes.
 *
 * @param {Record<string, any>} classes - The record of classes.
 * @returns {string} The generated class names.
 */
const genClassNames = (classes: Record<string, any>): string => {
    return Object.values(classes).map((cls: string) => ({ cls })).join(" ");
};

export { genClassNames };
