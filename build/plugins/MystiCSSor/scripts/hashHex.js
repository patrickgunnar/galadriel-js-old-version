"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashHex = void 0;
const crypto_1 = __importDefault(require("crypto"));
const hashHex = (str, is96bits = false) => {
    const hash = crypto_1.default.createHash("sha256");
    const updatedHash = hash.update(str);
    const digestedHash = updatedHash.digest("hex");
    if (!is96bits) {
        return digestedHash.substring(digestedHash.length - 8);
    }
    else {
        return digestedHash.substring(digestedHash.length - 12);
    }
};
exports.hashHex = hashHex;
