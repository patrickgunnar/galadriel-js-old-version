function generateObjectsArray(callbackBody: string) {
    // if not callback body
    if (!callbackBody) return [];

    // control of nested objects, nested content and array of the callback body
    let isNested = false;
    const nestedContent: string[] = [];
    const bodyArray = callbackBody.split(",");

    // loop through the array body
    return bodyArray.reduce((acc: string[], str: string) => {
        // if str includes an opened curly bracket
        if (str.includes("{")) {
            // loop through splitted str
            for (const item of str.split("{")) {
                // if item includes a colon
                if (item.includes(":")) {
                    // if item last sign is a colon
                    if (item[item.length - 1] === ":") {
                        isNested = true;

                        nestedContent.push(`${item}{`);
                    } else if (item.includes("}")) {
                        // loop through the splitted item
                        for (const el of item.split("}")) {
                            // if el includes a colon
                            if (el.includes(":")) {
                                // if is a nested object operation
                                if (isNested) {
                                    nestedContent.push(`${el},`);
                                } else {
                                    acc.push(el);
                                }
                            }
                        }
                        // if item does not include an equals sign
                    } else if (!item.includes("=")) {
                        // if is a nested object operation
                        if (isNested) {
                            nestedContent.push(`${item},`);
                        } else {
                            acc.push(item);
                        }
                    }
                }
            }
            // if str includes a closed  curly bracket
        } else if (str.includes("}")) {
            // loop through the splitted str
            for (const item of str.split("}")) {
                // if item includes a colon
                if (item.includes(":")) {
                    // if is a nested object operation
                    if (isNested) {
                        acc.push(`${nestedContent.join("")}${item}}`);
                        isNested = false;
                        nestedContent.length = 0;
                    } else {
                        acc.push(item);
                    }
                }
            }
            // if str includes colon and not include an equals sign
        } else if (str.includes(":") && !str.includes("=")) {
            // if is a nested object operation
            if (isNested) {
                nestedContent.push(`${str},`);
            } else {
                acc.push(str);
            }
        }

        return acc;
    }, []);
}

export { generateObjectsArray };
