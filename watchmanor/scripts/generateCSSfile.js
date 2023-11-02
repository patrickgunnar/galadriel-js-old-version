const babel = require("@babel/core");
const path = require("path");
const fs = require("fs");
const babelConfig = require(path.join(__dirname, "..", "..", "src", "babel.internal.config.js"));
const { uniteGaladrielAST } = require(path.join(__dirname, "..", "..", "build", "src", "ast", "uniteGaladrielAST.js"));
const { coreAST } = require(path.join(__dirname, "..", "..", "build", "src", "ast", "coreAST.js"));
const { modularAST } = require(path.join(__dirname, "..", "..", "build", "src", "ast", "modularAST.js"));

/**
 * Clears the arrays within a nested object representing an Abstract Syntax Tree (AST).
 *
 * @param {Record<string, Record<string, string[]>} ast - The AST to be modified.
 */
function clearAstElements(ast) {
    try {
        // loops through ast properties
        for (const item in ast) {
            // loops through property's element
            for (const element in ast[item]) {
                // clear the array
                ast[item][element].length = 0;
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

function generateCSSfile(codeString, filePath, output, module) {
    // if module and modularAST are valid
    if (module) {
        // clear the modular ast
        clearAstElements(modularAST);
    }

    const transpiledCode = babel.transformSync(codeString, {
        ...babelConfig,
        filename: filePath,
    });

    if (transpiledCode) {
        const contentCSS = uniteGaladrielAST(module ? modularAST : coreAST);
        const __output = module ? `${filePath.split(".")[0]}.css`: output;

        fs.writeFileSync(path.resolve(__output), contentCSS);
    }
}

module.exports = { generateCSSfile };
