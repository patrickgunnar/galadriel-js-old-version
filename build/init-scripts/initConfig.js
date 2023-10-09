#!/usr/bin/env node
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
const babelConfig = `module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-typescript"],
    plugins: ["galadrieljs/build/plugins/MystiCSSor/galadrielHarvestPlugin"],
};
`;
const postCSSConfig = `module.exports = {
    plugins: {
        "galadrieljs/build/plugins/MystiCSSor/galadrielInjectionPlugin": {},
        autoprefixer: {},
        "postcss-preset-env": {},
        cssnano: {},
    },
};`;
const galadrielConfig = `const config = {
    // content to exclude
    exclude: ["node_modules",],
    // content to include
    include: [],
    // new css rules
    craftStyles: {},
};

module.exports = config;
`;
const isTypescriptProject = () => {
    return fs.existsSync(path.join(process.cwd(), "tsconfig.json"));
};
const galadrielInit = () => {
    const rootPath = process.cwd();
    const babelConfigPath = path.join(rootPath, "babel.config.js");
    const postCSSConfigPath = path.join(rootPath, "postcss.config.js");
    const galadrielConfigPath = path.join(rootPath, "galadriel.config" + (isTypescriptProject() ? ".ts" : ".js"));
    fs.writeFileSync(babelConfigPath, babelConfig);
    fs.writeFileSync(postCSSConfigPath, postCSSConfig);
    fs.writeFileSync(galadrielConfigPath, galadrielConfig);
    console.log("Configurations generated successfully!");
};
galadrielInit();
