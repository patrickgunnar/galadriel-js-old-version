"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.craftingStyles = void 0;
const genClassNames_1 = require("./utils/genClassNames");
/**
 * Callback function type returning CraftClassesType.
 * @typedef {function(): CraftClassesType} CallbackType
 */
/**
 * Process a callback to generate class names using genClassNames.
 *
 * @param {CallbackType} callback - The callback function.
 * @returns {string} The generated class names.
 */
function craftingStyles(callback) {
    return (0, genClassNames_1.genClassNames)(callback());
}
exports.craftingStyles = craftingStyles;
