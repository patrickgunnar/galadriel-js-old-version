import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { coreStaticStyles } from "../../../PatterniaHub/coreStaticStyles";

const pseudoClasses = [
    "hover",
    "active",
    "focus",
    "firstChild",
    "lastChild",
    "firstOfType",
    "lastOfType",
    "visited",
    "checked",
    "onlyChild",
    "onlyOfType",
    "targetPseudoClass",
    "disabled",
    "enabled",
    "readOnly",
    "readWrite",
    "placeholderShown",
    "valid",
    "invalid",
    "required",
    "optional",
    "fullscreen",
    "focusWithin",
    "firstLine",
    "firstLetter",
    "before",
    "after",
    "outOfRange",
    "root",
    "firstPage",
    "leftPage",
    "rightPage",
    "empty",
    "minLargeDesktops",
    "minStandardDesktops",
    "minPortraitTablets",
    "minLargeSmartphones",
    "minStandardSmartphones",
    "maxLargeDesktops",
    "maxStandardDesktops",
    "maxPortraitTablets",
    "maxLargeSmartphones",
    "maxStandardSmartphones",
];

const dynamicObjectManager = (): { types: string; config: string } | null => {
    try {
        const config: string[] = [
            "exclude?: string[];",
            "include?: string[];",
            "craftStyles?: {",
        ];
        const keys = new Set([
            ...Object.keys(coreStaticStyles),
            ...Object.keys(coreDynamicProperties),
        ]);
        const types = Array.from(keys).map((key) => {
            config.push(`${key}?: Record<string, string>;`);

            if (pseudoClasses.includes(key)) {
                return `${key}?: Record<string, string>;`;
            }

            return `${key}?: string;`;
        });

        config.push("}");

        return {
            types: types.join(" "),
            config: config.join(" "),
        };
    } catch (error) {
        console.error("An error occurred:", error);
    }

    return null;
};

export { dynamicObjectManager };
