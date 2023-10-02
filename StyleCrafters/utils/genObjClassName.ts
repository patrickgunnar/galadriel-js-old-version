const genObjClassName = (key: string, value: string) => {
    const sanitizedSpecialChars = /[^a-zA-Z0-9]/g;
    const sanitizedCamelCase = /([a-z])([A-Z])/g;

    const nestedClass = Object.entries(value)
        .map(([nestedKey, nestedValue]) => {
            if (typeof nestedValue === "string") {
                return `${nestedKey}-${nestedValue}`;
            }

            return "";
        })
        .filter(Boolean)
        .join("-")
        .replace(/[aeiou]/gi, "")
        .replace(sanitizedCamelCase, "$1-$2")
        .replace(sanitizedSpecialChars, "_")
        .replace(/_+/g, "_");

    return `${key.replace(sanitizedCamelCase, "$1-$2")}__${nestedClass}`.toLowerCase();
};

export { genObjClassName };
