"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGaladrielConfig = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
/**
 * Parses the Galadriel configuration file (galadriel.config.ts or galadriel.config.js).
 *
 * @returns {object} The parsed configuration object.
 */
const parseGaladrielConfig = () => {
    // Paths for the Galadriel configuration files
    const configPaths = ["galadriel.config.ts", "galadriel.config.js"];
    try {
        for (const __path of configPaths) {
            // Resolve the full path of the configuration file
            const fullPath = path_1.default.resolve(__path);
            if (fs_1.default.existsSync(fullPath)) {
                // Delete the cached module to ensure fresh require
                delete require.cache[require.resolve(fullPath)];
                // Return the required configuration file if found
                return require(fullPath);
            }
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
    console.log("Galadriel config file (galadriel.config.ts or galadriel.config.js) not found.");
    return {};
};
exports.parseGaladrielConfig = parseGaladrielConfig;
