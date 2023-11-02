"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genClassNames = void 0;
/**
 * Generate class names from a record of classes.
 *
 * @param {Record<string, any>} classes - The record of classes.
 * @returns {string} The generated class names.
 */
const genClassNames = (classes) => {
    return Object.entries(classes).map(([_, cls]) => {
        if (typeof cls === "object") {
            return Object.values(cls).join(" ");
        }
        else if (typeof cls === "string") {
            return cls;
        }
        else {
            return JSON.stringify(cls);
        }
    }).join(" ");
};
exports.genClassNames = genClassNames;
