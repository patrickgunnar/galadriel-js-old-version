const { transpileModule, ScriptTarget, ModuleKind } = require("typescript");

function compileTsToJs(tsCode) {
    const result = transpileModule(tsCode, {
        compilerOptions: {
            target: ScriptTarget.ESNext,
            module: ModuleKind.CommonJS,
        },
    });

    return result.outputText;
}

module.exports = { compileTsToJs };
