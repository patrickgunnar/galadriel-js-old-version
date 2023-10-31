import { PluginObj } from "@babel/core";
/**
 * Exported default function to process a Babel plugin - Harvest the CSS rules.
 *
 * @param {Object} param - The parameters for the function.
 * @param {any} param.t - The types object for node analysis.
 * @returns {PluginObj} The Babel plugin object.
 */
export default function ({ t }: {
    t: any;
}): PluginObj;
