const babel = require("@babel/core");
const path = require("path");
const fs = require("fs");
const babelConfig = require(path.join(__dirname, "..", "..", "src", "babel.internal.config.js"));
const { uniteGaladrielAST } = require(path.join(__dirname, "..", "..", "build", "src", "ast", "uniteGaladrielAST.js"));

function generateCSSfile(codeString, fileName, output) {
    const transpiledCode = babel.transformSync(codeString, {
        ...babelConfig,
        filename: fileName,
    });

    if (transpiledCode) {
        const contentCSS = uniteGaladrielAST();
        const __output = path.resolve(output);

        fs.writeFileSync(__output, contentCSS);
    }
}

module.exports = { generateCSSfile };
