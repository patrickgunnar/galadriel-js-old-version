import generate from "@babel/generator";
import { hashHex } from "./hashHex";
import { genCSSClassName } from "./quantumMesh";
import { retrieveStylesInsideNestedObjects } from "./retrieveStylesInsideNestedObjects";
import { retrieveStylesOutsideNestedObjects } from "./retrieveStylesOutsideNestedObjects";

/**
 * Extract CSS styles from core bank and process associated styles from a given node.
 *
 * @param {any} types - The types object for node analysis.
 * @param {any} node - The node to extract objects from.
 * @param {Record<string, Record<string, string[]>>} coreAST - The core AST to update with styles.
 * @param {Record<string, Record<string, string>>} transformedCSSRules - The control of used CSS rules
 */
function extractStyles(
    types: any,
    node: any,
    coreAST: Record<string, Record<string, string[]>>,
    transformedCSSRules: Record<string, Record<string, string>>
) {
    try {
        if (types.isObjectExpression(node)) {
            // Loop through properties of the object
            for (const prop of node.properties) {
                let objectContent: any;

                if (types.isIdentifier(prop.key)) {
                    const transformedKey = transformedCSSRules[prop.key.name];

                    // Handle StringLiteral properties
                    if (prop.value.type === "StringLiteral") {
                        const transformedValueKey = hashHex(
                            `${prop.key.name}:${prop.value.value}`,
                            true
                        );

                        // Check if the transformed value exists and use it if found
                        if (transformedKey) {
                            const existingValue =
                                transformedKey[transformedValueKey];

                            if (existingValue) {
                                prop.value.value = existingValue;

                                continue;
                            }
                        }

                        // Retrieve styles for StringLiteral properties
                        objectContent = retrieveStylesOutsideNestedObjects(
                            prop.key.name,
                            prop.value.value
                        );

                        if (objectContent) {
                            const { name } = objectContent;

                            if (name) {
                                prop.value.value = name;

                                if (transformedKey) {
                                    transformedKey[transformedValueKey] = name;
                                } else {
                                    Object.assign(transformedCSSRules, {
                                        [prop.key.name]: {
                                            [transformedValueKey]: name,
                                        },
                                    });
                                }
                            }
                        }

                        // Handle ObjectExpression properties
                    } else if (prop.value.type === "ObjectExpression") {
                        const genProps = prop.value.properties
                            .map((item: any) =>
                                generate(item).code.replace(/\s+/g, "")
                            )
                            .join("");
                        const transformedValueKey = hashHex(genProps, true);

                        // Check if the transformed value exists and use it if found
                        if (transformedKey) {
                            const existingValue =
                                transformedKey[transformedValueKey];

                            if (existingValue) {
                                prop.value.type = "StringLiteral";
                                prop.value.value = existingValue;

                                continue;
                            }
                        }

                        // Retrieve styles for nested properties of ObjectExpression
                        const nestedProperties: string[] = [];

                        // Loop through properties of the object
                        for (const nestedProp of prop.value.properties) {
                            if (nestedProp.value.type === "StringLiteral") {
                                const property =
                                    retrieveStylesInsideNestedObjects(
                                        prop.key.name,
                                        nestedProp.key.name,
                                        nestedProp.value.value
                                    );

                                if (property) {
                                    nestedProperties.push(property);
                                }
                            }
                        }

                        const classRules = nestedProperties.join(";");

                        // Generate CSS class name for the combined rules
                        if (classRules && typeof classRules === "string") {
                            objectContent = genCSSClassName(
                                classRules,
                                prop.key.name
                            );

                            if (objectContent) {
                                const { name } = objectContent;

                                if (name) {
                                    prop.value.type = "StringLiteral";
                                    prop.value.value = name;

                                    if (transformedKey) {
                                        transformedKey[transformedValueKey] =
                                            name;
                                    } else {
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

                    // Update coreAST with class rules
                    if (objectContent && typeof objectContent === "object") {
                        const { classRule } = objectContent;
                        let notFoundKey = false;

                        for (const coreKey in coreAST) {
                            const currentCoreNode =
                                coreAST[coreKey][prop.key.name];

                            if (
                                currentCoreNode &&
                                Array.isArray(currentCoreNode)
                            ) {
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
    } catch (error: any) {
        console.error("An error occurred:", error);
    }
}

export { extractStyles };
