"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveNestedStyleClasses = void 0;
const getDynamicStyles_1 = require("./getDynamicStyles");
const getStaticStyles_1 = require("./getStaticStyles");
const composeCSSClassName_1 = require("./composeCSSClassName");
const computeConfigCSS_1 = require("./computeConfigCSS");
const retrieveNestedStyleClasses = (pseudo, node, coreAST) => {
    const testRegex = /^\$\w+(-\w+)*$/;
    const nestedClasses = [];
    node.properties.forEach((property) => {
        if (property.value.type.includes("Literal")) {
            const key = property.key.name;
            const value = property.value.value;
            if (key && typeof key === "string") {
                if (value && typeof value === "string" && testRegex.test(value)) {
                    const staticStyle = (0, getStaticStyles_1.getStaticStyles)(key, value, true);
                    if (staticStyle) {
                        const [[objKey, objValue]] = Object.entries(staticStyle);
                        nestedClasses.push(`${objKey}:${objValue}`);
                    }
                    else {
                        const customClassName = value.replace("$", "");
                        const customStyle = (0, computeConfigCSS_1.computeConfigCSS)(customClassName, true);
                        if (customStyle && typeof customStyle === "object") {
                            const { customKey, customValue } = customStyle;
                            nestedClasses.push(`${customKey}:${customValue}`);
                        }
                    }
                }
                else if (value && typeof value === "string") {
                    const classContent = (0, getDynamicStyles_1.getDynamicStyles)(key, true);
                    if (classContent) {
                        nestedClasses.push(`${classContent}:${value}`);
                    }
                }
            }
        }
    });
    const composedClass = (0, composeCSSClassName_1.composeCSSClassName)(pseudo, nestedClasses, node);
    if (composedClass && typeof composedClass === "object") {
        const { isMedia, classValue } = composedClass;
        let coreNodeName = "pseudoSelectors";
        if (isMedia) {
            coreNodeName = "mediaQueryVariables";
        }
        if (coreAST[coreNodeName][pseudo]) {
            coreAST[coreNodeName][pseudo].push(classValue);
        }
        else {
            coreAST[coreNodeName][pseudo] = [classValue];
        }
    }
};
exports.retrieveNestedStyleClasses = retrieveNestedStyleClasses;
