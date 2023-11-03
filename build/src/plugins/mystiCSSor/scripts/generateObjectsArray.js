"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateObjectsArray = void 0;
/**
 * Parses a callbackBody string and generates an array of objects properties.
 *
 * @param {string} callbackBody - The callback body string to parse.
 * @returns {Array<string>} An array of parsed objects as strings.
 */
function generateObjectsArray(callbackBody) {
    // if not callback body or callback body is not a string
    if (!callbackBody || typeof callbackBody !== "string")
        return [];
    try {
        // control of nested objects, nested content and array of the callback body
        let isNested = false;
        const nestedContent = [];
        const bodyArray = callbackBody.split(/,(?=(?:(?:[^"]*"){2})*(?![^"]*"))/);
        // loop through the array body
        return bodyArray.reduce((acc, str) => {
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
                        }
                        else if (item.includes("}")) {
                            // loop through the splitted item
                            for (const el of item.split("}")) {
                                // if el includes a colon
                                if (el.includes(":")) {
                                    // if is a nested object operation
                                    if (isNested) {
                                        nestedContent.push(`${el},`);
                                    }
                                    else {
                                        acc.push(el);
                                    }
                                }
                            }
                            // if item does not include an equals sign
                        }
                        else if (!item.includes("=")) {
                            // if is a nested object operation
                            if (isNested) {
                                nestedContent.push(`${item},`);
                            }
                            else {
                                acc.push(item);
                            }
                        }
                    }
                }
                // if str includes a closed  curly bracket
            }
            else if (str.includes("}")) {
                // loop through the splitted str
                for (const item of str.split("}")) {
                    // if item includes a colon
                    if (item.includes(":")) {
                        // if is a nested object operation
                        if (isNested) {
                            acc.push(`${nestedContent.join("")}${item}}`);
                            isNested = false;
                            nestedContent.length = 0;
                        }
                        else {
                            acc.push(item);
                        }
                    }
                }
                // if str includes colon and not include an equals sign
            }
            else if (str.includes(":") && !str.includes("=")) {
                // if is a nested object operation
                if (isNested) {
                    nestedContent.push(`${str},`);
                }
                else {
                    acc.push(str);
                }
            }
            return acc;
        }, []);
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
exports.generateObjectsArray = generateObjectsArray;
