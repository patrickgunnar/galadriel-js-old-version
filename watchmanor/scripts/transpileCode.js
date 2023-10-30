const babel = require("@babel/core");

function transpileCode(codeString, babelConfig, fileName) {
    const transpiledCode = babel.transformSync(codeString, {
        ...babelConfig,
        filename: fileName,
        ast: true,
        code: false,
    });

    console.log(transpiledCode.ast);
}

module.exports = { transpileCode };
