const postcssAutoprefixer = require("autoprefixer");
const postcssCssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");

const galadrielInjectionPlugin = require("./dist/plugins/MystiCSSor/galadrielInjectionPlugin.js");

module.exports = {
    plugins: [
        galadrielInjectionPlugin(),
        postcssPresetEnv(),
        postcssCssnano(),
        postcssAutoprefixer(),
    ],
};
