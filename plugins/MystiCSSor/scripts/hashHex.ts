import crypto from "crypto";

const hashHex = (str: string) => {
    const hash = crypto.createHash("sha256");
    const updatedHash = hash.update(str);
    const digestedHash = updatedHash.digest("hex");
    const hashedHex = digestedHash.substring(digestedHash.length - 8);

    return hashedHex;
};

export { hashHex };
