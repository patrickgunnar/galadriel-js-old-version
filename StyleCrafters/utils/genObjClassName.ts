const genObjClassName = (key: string, value: string) => {
    const customClass: string[] = [];
    const sanitizedSpecialChars = /[^a-zA-Z0-9]/g;
    const sanitizedCamelCase = /([a-z])([A-Z])/g;

    const nestedClass = Object.entries(value)
        .map(([nestedKey, nestedValue]) => {
            if (typeof nestedValue === "string" && !nestedValue.includes("$")) {
                return `${nestedKey}-${nestedValue}`;
            }

            if (nestedValue) {
                const sanitizedNestedValue = (nestedValue as string).replace(
                    "$",
                    ""
                );
                customClass.push(`${sanitizedNestedValue}_${key}`);
            }

            return "";
        })
        .filter(Boolean)
        .join("-")
        .replace(/[aeiou]/gi, "")
        .replace(sanitizedSpecialChars, "_")
        .replace(/_+/g, "_");

    const customStr = customClass
        .filter((str) => str.trim().replace(/\s/g, "").length > 0)
        .join(" ");

    return `${key.replace(sanitizedCamelCase, "$1-$2").toLowerCase()}__${nestedClass}` + (customStr ? ` ${customStr}` : "");
};

export { genObjClassName };
