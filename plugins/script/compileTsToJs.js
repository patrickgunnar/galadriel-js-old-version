const { transpileModule, ScriptTarget, ModuleKind } = require("typescript");

function compileTsToJs(tsCode) {
    const result = transpileModule(tsCode, {
        compilerOptions: {
            target: ScriptTarget.ESNext, // Choose your target version
            module: ModuleKind.CommonJS, // Choose the module system (CommonJS, ESNext, etc.)
        },
    });

    return result.outputText;
}

module.exports = { compileTsToJs };
