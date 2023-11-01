import crypto from "crypto";

/**
 * Generates a hexadecimal hash (SHA-256) from the given string.
 * Optionally, it can return a portion of the hash (96 bits or 128 bits).
 *
 * @param {string} str - The input string to be hashed.
 * @param {boolean} is96bits - Flag to determine the length of the output hash (default: false).
 * @returns {string} The hashed string (hexadecimal representation).
 */
const hashingHex = (str: string, is96bits=false, is2Digits=false) => {
    try {
        // Creating a hash instance using the SHA-256 algorithm
        const hash = crypto.createHash("sha256");
        // Updating the hash with the provided string
        const updatedHash = hash.update(str);
        // Digesting the hash and obtaining the hexadecimal representation
        const digestedHash = updatedHash.digest("hex");

        // Returning a portion of the hash based on the is96bits flag
        if (is96bits) {
            return digestedHash.substring(digestedHash.length - 12);
        } else if (is2Digits) {
            return digestedHash.substring(digestedHash.length - 2);
        } else {
            return digestedHash.substring(digestedHash.length - 8);
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return "";
};

export { hashingHex };
