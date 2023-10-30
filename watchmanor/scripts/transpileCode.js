const babel = require("@babel/core");

function transpileCode(codeString, fileName) {
    const transpiledCode = babel.transformSync(codeString, {
        filename: fileName,
    });

    console.log(transpiledCode.code);
}

module.exports = { transpileCode };
