"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashHex = void 0;
const crypto_1 = __importDefault(require("crypto"));
const hashHex = (str) => {
    const hash = crypto_1.default.createHash("sha256");
    const updatedHash = hash.update(str);
    const digestedHash = updatedHash.digest("hex");
    const hashedHex = digestedHash.substring(digestedHash.length - 8);
    return hashedHex;
};
exports.hashHex = hashHex;
