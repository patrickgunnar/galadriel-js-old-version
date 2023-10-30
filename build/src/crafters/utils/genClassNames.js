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
    return Object.values(classes).map((cls) => cls).join(" ");
};
exports.genClassNames = genClassNames;
