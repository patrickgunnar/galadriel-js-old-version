/**
 * Generates a hexadecimal hash (SHA-256) from the given string.
 * Optionally, it can return a portion of the hash (96 bits or 128 bits).
 *
 * @param {string} str - The input string to be hashed.
 * @param {boolean} is96bits - Flag to determine the length of the output hash (default: false).
 * @returns {string} The hashed string (hexadecimal representation).
 */
declare const hashingHex: (str: string, is96bits?: boolean, is32bits?: boolean) => string;
export { hashingHex };
