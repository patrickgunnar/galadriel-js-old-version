const fs = require("fs");
const path = require("path");
const { Logger } = require("../../../scripts/logger");

const babelConfig = `const path = require("path");

module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-typescript"],
    plugins: [path.join("galadrieljs", "build", "src", "plugins", "mystiCSSor", "galadrielHarvestPlugin")],
};
`;

const galadrielConfig = `const config = {
    // set modular saving, defaults to false
    module: false,
    // output css file
    output: "",
    // content to exclude
    exclude: ["node_modules"],
    // content to include
    include: [],
    // new css rules
    craftStyles: {},
};

module.exports = config;
`;

function isTypescriptProject() {
    return fs.existsSync(path.join(process.cwd(), "tsconfig.json"));
}

function galadrielInit() {
    const logger = new Logger();
    const rootPath = process.cwd();
    const babelConfigPath = path.join(rootPath, "babel.config.js");
    const galadrielConfigPath = path.join(
        rootPath,
        "galadriel.config" + (isTypescriptProject() ? ".ts" : ".js")
    );

    fs.writeFileSync(babelConfigPath, babelConfig);
    fs.writeFileSync(galadrielConfigPath, galadrielConfig);

    logger.now("Configurations generated successfully!");
}

module.exports = { galadrielInit };
