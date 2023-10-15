"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractObjectsFromNode = void 0;
const hashHex_1 = require("./hashHex");
const quantumMesh_1 = require("./quantumMesh");
const retrieveStylesInsideNestedObjects_1 = require("./retrieveStylesInsideNestedObjects");
const retrieveStylesOutsideNestedObjects_1 = require("./retrieveStylesOutsideNestedObjects");
const generator_1 = __importDefault(require("@babel/generator"));
/**
 * Extract objects and process associated styles from a given node.
 *
 * @param {any} types - The types object for node analysis.
 * @param {any} node - The node to extract objects from.
 * @param {Record<string, Record<string, string[]>>} coreAST - The core AST to update with styles.
 * @param {Record<string, Record<string, string>>} transformedCSSRules - The control of used CSS rules
 */
function extractObjectsFromNode(types, node, coreAST, transformedCSSRules) {
    try {
        if (types.isObjectExpression(node)) {
            for (const prop of node.properties) {
                let objectContent;
                if (types.isIdentifier(prop.key)) {
                    const transformedKey = transformedCSSRules[prop.key.name];
                    if (prop.value.type === "StringLiteral") {
                        const transformedValueKey = (0, hashHex_1.hashHex)(prop.value.value, true);
                        if (transformedKey) {
                            const existingValue = transformedKey[transformedValueKey];
                            if (existingValue) {
                                prop.value.value = existingValue;
                                continue;
                            }
                        }
                        objectContent = (0, retrieveStylesOutsideNestedObjects_1.retrieveStylesOutsideNestedObjects)(prop.key.name, prop.value.value);
                        if (objectContent) {
                            const { name } = objectContent;
                            if (name) {
                                prop.value.value = name;
                                if (transformedKey) {
                                    transformedKey[transformedValueKey] = name;
                                }
                                else {
                                    Object.assign(transformedCSSRules, {
                                        [prop.key.name]: {
                                            [transformedValueKey]: name,
                                        },
                                    });
                                }
                            }
                        }
                    }
                    else if (prop.value.type === "ObjectExpression") {
                        const genProps = prop.value.properties
                            .map((item) => (0, generator_1.default)(item).code.replace(/\s+/g, ""))
                            .join("");
                        const transformedValueKey = (0, hashHex_1.hashHex)(genProps, true);
                        if (transformedKey) {
                            const existingValue = transformedKey[transformedValueKey];
                            if (existingValue) {
                                prop.value.type = "StringLiteral";
                                prop.value.value = existingValue;
                                continue;
                            }
                        }
                        const nestedProperties = [];
                        for (const nestedProp of prop.value.properties) {
                            if (nestedProp.value.type === "StringLiteral") {
                                const property = (0, retrieveStylesInsideNestedObjects_1.retrieveStylesInsideNestedObjects)(prop.key.name, nestedProp.key.name, nestedProp.value.value);
                                if (property) {
                                    nestedProperties.push(property);
                                }
                            }
                        }
                        const classRules = nestedProperties.join(";");
                        if (classRules && typeof classRules === "string") {
                            objectContent = (0, quantumMesh_1.genCSSClassName)(classRules, prop.key.name);
                            if (objectContent) {
                                const { name } = objectContent;
                                if (name) {
                                    prop.value.type = "StringLiteral";
                                    prop.value.value = name;
                                    if (transformedKey) {
                                        transformedKey[transformedValueKey] =
                                            name;
                                    }
                                    else {
                                        Object.assign(transformedCSSRules, {
                                            [prop.key.name]: {
                                                [transformedValueKey]: name,
                                            },
                                        });
                                    }
                                }
                            }
                        }
                    }
                    if (objectContent && typeof objectContent === "object") {
                        const { classRule } = objectContent;
                        let notFoundKey = false;
                        for (const coreKey in coreAST) {
                            const currentCoreNode = coreAST[coreKey][prop.key.name];
                            if (currentCoreNode &&
                                Array.isArray(currentCoreNode)) {
                                if (!currentCoreNode.includes(classRule)) {
                                    currentCoreNode.push(classRule);
                                }
                                notFoundKey = true;
                                break;
                            }
                        }
                        if (!notFoundKey) {
                            coreAST["otherProperties"][prop.key.name] = [
                                classRule,
                            ];
                        }
                    }
                }
            }
        }
        for (const key in node) {
            if (node[key] &&
                typeof node[key] === "object" &&
                !(node.type === "ObjectExpression" && Array.isArray(node[key]))) {
                extractObjectsFromNode(types, node[key], coreAST, transformedCSSRules);
            }
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
exports.extractObjectsFromNode = extractObjectsFromNode;
