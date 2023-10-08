"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveStyleClasses = void 0;
const computeConfigCSS_1 = require("./computeConfigCSS");
const getStaticStyles_1 = require("./getStaticStyles");
const getDynamicStyles_1 = require("./getDynamicStyles");
const retrieveStyleClasses = (key, node) => {
    const testRegex = /^\$\w+(-\w+)*$/;
    const value = node.value;
    if (value && typeof value === "string" && testRegex.test(value)) {
        const staticStyle = (0, getStaticStyles_1.getStaticStyles)(key, value);
        if (staticStyle) {
            // replace the node value to the class name
            node.value = value.replace("$", "");
            return staticStyle;
        }
        else {
            let customClassName;
            if (key.includes(":")) {
                customClassName = value.replace("$", "").split(":")[0];
            }
            else {
                customClassName = value.replace("$", "");
            }
            const customStyle = (0, computeConfigCSS_1.computeConfigCSS)(customClassName);
            if (customStyle && typeof customStyle === "string") {
                /// replace the node value to the class name
                node.value = customClassName;
                return customStyle.replace("&", "");
            }
        }
    }
    else if (value && typeof value === "string") {
        const classContent = (0, getDynamicStyles_1.getDynamicStyles)(key, false, value);
        if (classContent && typeof classContent === "object") {
            const { className, classValue } = classContent;
            // replace the node value to the class name
            node.value = className;
            return classValue;
        }
    }
};
exports.retrieveStyleClasses = retrieveStyleClasses;
