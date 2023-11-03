/**
 * Transforms an AST node and generates transformations for properties within it and its nested nodes.
 *
 * @param {any} t - The t object used for AST transformation.
 * @param {any} rootNode - The root node of the AST to transform.
 * @param {boolean} module - A flag indicating if the transformations are related to a module.
 * @param {string | undefined} filePath - The file path associated with the transformations, if applicable.
 */
declare function transformAstNode(t: any, rootNode: any, module: boolean, filePath: string | undefined): void;
export { transformAstNode };
