/**
 * Extract CSS styles from core bank and process associated styles from a given node.
 *
 * @param {any} types - The types object for node analysis.
 * @param {any} node - The node to extract objects from.
 * @param {Record<string, Record<string, string[]>>} coreAST - The core AST to update with styles.
 * @param {Record<string, Record<string, string>>} transformedCSSRules - The control of used CSS rules
 */
declare function extractStyles(types: any, node: any, coreAST: Record<string, Record<string, string[]>>, transformedCSSRules: Record<string, Record<string, string>>): void;
export { extractStyles };
