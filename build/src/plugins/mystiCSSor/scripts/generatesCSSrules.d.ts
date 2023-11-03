/**
 * Clears the `modularControl` array by setting its length to 0.
 *
 * @function
 * @name clearModularControl
 * @returns {void}
 */
export declare function clearModularControl(): void;
/**
 * Determines if a CSS file should be generated based on the state of the modular control or global CSS file state.
 * If the modular control is greater than 0 or shouldGenerateGlobalCSSFile is true, it sets the control to generate,
 * clears the modular control or the shouldGenerateGlobalCSSFile variable,
 * and returns true; otherwise, it returns false.
 *
 * @function
 * @name shouldGenerateCSSFile
 * @returns {boolean} - Returns true if a CSS file should be generated, false otherwise.
 */
export declare function shouldGenerateCSSFile(): boolean;
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
declare function generatesCSSrules(objectsArray: string[], coreAST: Record<string, Record<string, string[]>>, collectedObjectsProperties: string[], module: boolean | undefined, modularAST: Record<string, Record<string, string[]>> | undefined, filePath: string | undefined): void;
export { generatesCSSrules };
