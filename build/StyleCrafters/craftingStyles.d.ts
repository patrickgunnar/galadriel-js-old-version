import { CraftClassesType } from "../types/typeManifest";
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
declare function craftingStyles(callback: CallbackType): string;
export { craftingStyles };
