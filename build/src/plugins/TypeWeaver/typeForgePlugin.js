"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const dynamicObjectManager_1 = require("./scripts/dynamicObjectManager");
const typeForgePlugin = () => {
    const objectsData = (0, dynamicObjectManager_1.dynamicObjectManager)();
    if (objectsData) {
        const { types, config } = objectsData;
        if (types) {
            try {
                fs.writeFileSync(path.join(__dirname, "..", "..", "types", "typeManifest.ts"), `export type CraftClassesType = { ${types} }`);
            }
            catch (error) {
                console.error("An error occurred:", error);
            }
        }
        if (config) {
            try {
                fs.writeFileSync(path.join(__dirname, "..", "..", "types", "config.ts"), `export type Config = { ${config} }`);
            }
            catch (error) {
                console.error("An error occurred:", error);
            }
        }
    }
};
typeForgePlugin();