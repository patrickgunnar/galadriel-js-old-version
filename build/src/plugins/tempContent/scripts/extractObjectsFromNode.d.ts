/**
 * Loops through a stack of nodes to process the styles.
 *
 * @param {any} types - The types object for node analysis.
 * @param {any} rootNode - The node to extract objects from.
 * @param {Record<string, Record<string, string[]>>} coreAST - The core AST to update with styles.
 * @param {Record<string, Record<string, string>>} transformedCSSRules - The control of used CSS rules
 */
declare function extractObjectsFromNode(types: any, rootNode: any, coreAST: Record<string, Record<string, string[]>>, transformedCSSRules: Record<string, Record<string, string>>): void;
export { extractObjectsFromNode };
