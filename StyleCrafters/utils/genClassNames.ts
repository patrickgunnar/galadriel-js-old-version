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
                    const customClass: string[] = [];

                    const nestedClass = Object.entries(value)
                        .map(([nestedKey, nestedValue]) => {
                            if (
                                typeof nestedValue === "string" &&
                                !nestedValue.includes("$")
                            ) {
                                return `${nestedKey}-${nestedValue}`;
                            }

                            if (nestedValue) {
                                const sanitizedNestedValue = (
                                    nestedValue as string
                                ).replace("$", "");
                                customClass.push(
                                    `${sanitizedNestedValue}_${key}`
                                );
                            }

                            return "";
                        })
                        .filter(Boolean)
                        .join("-")
                        .replace(/[aeiou]/gi, "")
                        .replace(sanitizedSpecialChars, "_")
                        .replace(/_+/g, "_");

                    const customStr = customClass
                        .filter(
                            (str) => str.trim().replace(/\s/g, "").length > 0
                        )
                        .join(" ");

                    return (
                        acc +
                        `${acc ? " " : ""}${key
                            .replace(sanitizedCamelCase, "$1-$2")
                            .toLowerCase()}__${nestedClass}` +
                        (customStr ? ` ${customStr}` : "")
                    );
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
