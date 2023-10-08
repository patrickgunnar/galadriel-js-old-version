"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseConfig = void 0;
const path_1 = __importDefault(require("path"));
const parseConfig = () => {
    const configPaths = ["galadriel.config.ts", "galadriel.config.js"];
    try {
        for (const __path of configPaths) {
            const fullPath = path_1.default.resolve(__path);
            delete require.cache[require.resolve(fullPath)];
            return require(fullPath);
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
    console.log("Galadriel config file (galadriel.config.ts or galadriel.config.js) not found.");
    return {};
};
exports.parseConfig = parseConfig;
