const genParsedNestedRules = (
    styleRules: Record<string, any>[] | null,
    stylesValues: string[],
    objKey: string,
    pseudoClass: string,
    customRules: string[]
) => {
    const sanitizedSpecialChars = /[^a-zA-Z0-9]/g;
    const sanitizedCamelCase = /([a-z])([A-Z])/g;

    if (styleRules) {
        try {
            const styles = styleRules.reduce((acc, obj) => {
                const [[key, value]] = Object.entries(obj);

                if (key && value) {
                    return (acc += `${key}: ${value.replace("$", "")}; `);
                }

                return acc;
            }, "");

            const valueNames = stylesValues
                .join("-")
                .replace(/[aeiou]/gi, "")
                .replace(sanitizedCamelCase, "$1-$2")
                .replace(sanitizedSpecialChars, "_")
                .replace(/_+/g, "_");

            const className = `.${objKey.replace(sanitizedCamelCase, "$1-$2")}__${valueNames}`.toLowerCase();

            if (pseudoClass.includes("$")) {
                const sanitizedMedia = pseudoClass.replace("$", "");
                return `@media screen and (${sanitizedMedia}) { ${className} { ${styles} } ${customRules.join(
                    " "
                )} }`;
            } else {
                const classNameWithPseudo = pseudoClass.replace("&", className);

                return `${classNameWithPseudo} { ${styles} } ${customRules.join(" ")}`;
            }
        } catch (error: any) {
            console.error("An error occurred:", error);
        }
    }
};

export { genParsedNestedRules };
