const genStylesPlugin = require("./plugins/genStylesPlugin");

const postcssAutoprefixer = require("autoprefixer");
const postcssCssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
    plugins: [
        postcssAutoprefixer(),
        postcssCssnano(),
        postcssPresetEnv(),
        genStylesPlugin(),
    ],
};
