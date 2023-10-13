import { CraftClassesType } from "../types/typeManifest";
import { genClassNames } from "./utils/genClassNames";

interface CallbackType {
    (): CraftClassesType;
}

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
function craftingStyles(callback: CallbackType): string {
    return genClassNames(callback());
}

export { craftingStyles };
