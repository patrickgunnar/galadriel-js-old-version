#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";

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
    const galadrielConfigPath = path.join(
        rootPath,
        "galadriel.config" + (isTypescriptProject() ? ".ts" : ".js")
    );

    fs.writeFileSync(babelConfigPath, babelConfig);
    fs.writeFileSync(postCSSConfigPath, postCSSConfig);
    fs.writeFileSync(galadrielConfigPath, galadrielConfig);

    console.log("Configurations generated successfully!");
};

galadrielInit();
