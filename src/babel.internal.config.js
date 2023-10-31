const path = require("path");

module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-typescript"],
    plugins: [path.join(__dirname, "..", "build", "src", "plugins", "mystiCSSor", "galadrielHarvestPlugin")],
};
