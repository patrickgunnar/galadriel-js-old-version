const deepmerge = require("deepmerge");
const babel = require("@babel/core");
const fs = require("fs");

// Import the internal Babel configuration
const internalBabelConfig = require("./babel.config.js");

// Look for user's Babel configuration
const userBabelConfig = fs.existsSync("./babel.config.js")
    ? require("./babel.config.js")
    : fs.existsSync(".babelrc")
    ? require(".babelrc")
    : null;

function mergeBabelConfigs() {}

module.exports = { mergeBabelConfigs };
