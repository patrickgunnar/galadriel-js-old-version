const { classHarvestPlugin } = require("./dist/plugins/MystiCSSor/classHarvestPlugin");

const postcssAutoprefixer = require("autoprefixer");
const postcssCssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
    plugins: [
        classHarvestPlugin(),
        postcssAutoprefixer(),
        postcssCssnano(),
        postcssPresetEnv(),
    ],
};
