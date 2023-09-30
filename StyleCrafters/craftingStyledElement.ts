//@ts-ignore
import { HTMLElementTagName } from "../types/coreTypes";
import { CraftClassesType } from "../types/typeManifest";

interface CallbackType {
    (): CraftClassesType;
}

interface CraftStylesType {
    (element: HTMLElementTagName, callback: CallbackType): HTMLElement;
}

const craftingStyledElement: CraftStylesType = (
    element,
    callback
): HTMLElement => {
    const createdElement = document.createElement(element);
    const testRegex = /^__\w+(-\w+)*$/;
    const sanitizedSpecialChars = /[^a-zA-Z0-9]/g;
    const sanitizedCamelCase = /([a-z])([A-Z])/g;

    try {
        const classNames = Object.entries(callback()).reduce(
            (acc, [key, value]) => {
                const isMatchingPattern = testRegex.test(value);

                if (isMatchingPattern) {
                    return acc + (acc.length > 0 ? " " : "") + value;
                } else if (typeof value === "object") {
                    const nestedClass = Object.entries(value)
                        .filter(([nestedKey, nestedValue]) => {
                            if (
                                typeof nestedValue !== "object" &&
                                nestedValue !== null &&
                                nestedValue !== undefined
                            ) {
                                return `${nestedKey}-${nestedValue}`;
                            }
                        })
                        .join("-")
                        .replace(/[aeiou]/gi, "")
                        .replace(sanitizedSpecialChars, "_")
                        .replace(/_+/g, "_");

                    return (
                        acc +
                        (acc.length > 0 ? " " : "") +
                        `${key.replace(
                            sanitizedCamelCase,
                            "$1-$2"
                        )}__${nestedClass}`.toLowerCase()
                    );
                } else {
                    const sanitizedValue = value.replace(sanitizedSpecialChars, "");
                    const sanitizedKey = key.replace(sanitizedCamelCase, "$1-$2");
                    const cssRule = `galadriel-${sanitizedKey.toLowerCase()}__${sanitizedValue}`;

                    return acc + (acc.length > 0 ? " " : "") + cssRule;
                }
            },
            ""
        );

        createdElement.className = classNames;
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return createdElement;
};

export { craftingStyledElement };
