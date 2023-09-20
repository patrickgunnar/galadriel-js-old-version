const staticStylesPlugin = require("./plugin/staticStylesPlugin");

const postcssAutoprefixer = require("autoprefixer");
const postcssCssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
    plugins: [
        staticStylesPlugin(),
        postcssAutoprefixer(),
        postcssCssnano(),
        postcssPresetEnv(),
    ],
};
