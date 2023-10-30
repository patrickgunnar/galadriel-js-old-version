const deepmerge = require("deepmerge");
const fs = require("fs");
const path = require("path");

// Import the internal Babel configuration
const internalBabelConfig = require("../../src/babel.config.js");

// Look for user's Babel configuration
const userBabelConfig = fs.existsSync("./babel.config.js")
    ? require(path.resolve("babel.config.js"))
    : fs.existsSync(".babelrc")
    ? JSON.parse(fs.readFileSync(path.resolve(".babelrc")))
    : null;

function mergeBabelConfigs() {
    return userBabelConfig
        ? deepmerge(internalBabelConfig, userBabelConfig)
        : internalBabelConfig;
}

module.exports = { mergeBabelConfigs };
