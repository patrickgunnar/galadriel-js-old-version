const genClassNames = (rulesObj: Record<string, any>) => {
    const testRegex = /^__\w+(-\w+)*$/;
    const sanitizedSpecialChars = /[^a-zA-Z0-9]/g;
    const sanitizedCamelCase = /([a-z])([A-Z])/g;

    try {
        return Object.entries(rulesObj).reduce((acc, [key, value]) => {
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
        }, "");
    } catch (error: any) {
        console.error("An error occurred:", error);

        return "";
    }
};

export { genClassNames };
