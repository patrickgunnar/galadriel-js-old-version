import crypto from "crypto";

const hashHex = (str: string, is96bits=false) => {
    const hash = crypto.createHash("sha256");
    const updatedHash = hash.update(str);
    const digestedHash = updatedHash.digest("hex");

    if (!is96bits) {
        return digestedHash.substring(digestedHash.length - 8);
    } else {
        return digestedHash.substring(digestedHash.length - 12);
    }
};

export { hashHex };
