import { genObjClassName } from "./genObjClassName";

const genClassNames = (rulesObj: Record<string, any>): string => {
    const testRegex = /^\$\w+(-\w+)*$/;
    const sanitizedSpecialChars = /[^a-zA-Z0-9]/g;
    const sanitizedCamelCase = /([a-z])([A-Z])/g;

    try {
        return Object.entries(rulesObj)
            .reduce((acc, [key, value]) => {
                if (testRegex.test(value)) {
                    return acc + `${acc ? " " : ""}${value.replace("$", "")}`;
                }

                if (typeof value === "object") {
                    return acc + `${acc ? " " : ""}${genObjClassName(key, value)}`;
                }

                const sanitizedValue = value.replace(sanitizedSpecialChars, "");
                const sanitizedKey = key.replace(sanitizedCamelCase, "$1-$2");
                const cssRule = `galadriel-${sanitizedKey.toLowerCase()}__${sanitizedValue}`;

                return acc + `${acc ? " " : ""}${cssRule}`;
            }, "")
            .trim();
    } catch (error: any) {
        console.error("An error occurred:", error);
        return "";
    }
};

export { genClassNames };
