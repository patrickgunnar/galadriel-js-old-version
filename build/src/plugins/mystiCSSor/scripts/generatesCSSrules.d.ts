/**
 * Generates CSS rules based on the objects array and appends them to the core Abstract Syntax Tree (AST).
 *
 * @param {string[]} objectsArray - An array of object properties to generate CSS rules from.
 * @param {Record<string, Record<string, string[]>>} coreAST - The core Abstract Syntax Tree (AST).
 * @param {string[]} collectedObjectsProperties - An array of already collected properties.
 * @param {boolean | undefined} module - set the current saving to module.
 * @param {Record<string, Record<string, string[]>> | undefined} modularAST - The modular Abstract Syntax Tree (AST).
 */
declare function generatesCSSrules(objectsArray: string[], coreAST: Record<string, Record<string, string[]>>, collectedObjectsProperties: string[], module: boolean | undefined, modularAST: Record<string, Record<string, string[]>> | undefined): void;
export { generatesCSSrules };
