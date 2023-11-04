const babel = require("@babel/core");
const path = require("path");
const fs = require("fs");
const { Logger } = require("../../../../scripts/logger");
const { uniteGaladrielAST } = require(path.join(__dirname, "..", "..", "..", "..", "build", "src", "ast", "uniteGaladrielAST.js"));
const { coreAST } = require(path.join(__dirname, "..", "..", "..", "..", "build", "src", "ast", "coreAST.js"));
const { modularAST } = require(path.join(__dirname, "..", "..", "..", "..", "build", "src", "ast", "modularAST.js"));
const { clearModularControl } = require(path.join(__dirname, "..", "..", "..", "..", "build", "src", "clearModularControl.js"));
const { shouldGenerateCSSFile } = require(path.join(__dirname, "..", "..", "..", "..", "build", "src", "shouldGenerateCSSFile.js"));

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

/**
 * Generate CSS rules and CSS file from code string.
 *
 * @param {string} codeString - The input code string.
 * @param {string} filePath - The file path of the code.
 * @param {string} output - The output path for the generated CSS file.
 * @param {boolean} module - Indicates if modular mode is enabled.
 * @param {Date} startTime - The start time of the operation.
 */
function generateCSSfile(codeString, filePath, output, module, startTime) {
    try {
        // if module and modularAST are valid
        if (module) {
            // clear the modular ast
            clearAstElements(modularAST);
            clearModularControl();
        }

        const logger = new Logger();
        // process the code - generates the CSS rules
        const transpiledCode = babel.transformSync(codeString, {
            filename: filePath,
            configFile: path.join(__dirname, "..", "..", "..", "babel.internal.config.js")
        });

        // check if there are any changes to the styles content
        // if true, generates the CSS files with the updated styles content
        const shouldGenerate = shouldGenerateCSSFile();

        // if there is the transpiled code and it is to generate the CSS file
        if (transpiledCode && shouldGenerate) {
            try {
                // collects the updated styles content
                const contentCSS = uniteGaladrielAST(module ? modularAST : coreAST);
                // generates the output path
                const __output = module ? `${filePath.split(".")[0]}.css`: output;

                // write the generated styles content to the output path
                fs.writeFileSync(path.resolve(__output), contentCSS);

                // if modular mode is enabled
                if (module) {
                    // get the basement from the path - Like: ("index.js")
                    const importPath = path.basename(filePath).split(".")[0];
                    // generates the importing string for the generated CSS file to be inserted to the current processed file
                    const importString = `// Importing the CSS file generated by Galadriel.js\nimport './${importPath}.css';\n`;

                    // if the current processed file does not contain the import string
                    if (!codeString.includes(importString)) {
                        try {
                            // split the current processed code
                            const splittedLines = codeString.split("\n");
                            // looks for the last index of the import's group in the splitted lines
                            const lastImportIdx = splittedLines.reduce(
                                (acc, line, index) => {
                                    if (line.trim().startsWith("import")) {
                                        acc = index;
                                    }

                                    return acc;
                                }, 0
                            );

                            // if the last import is 0 or greater than 0, add 1 to the lastImportIdx, else set 0
                            // then splice the importing string into the lastImportIdx
                            splittedLines.splice(lastImportIdx > -1 ? lastImportIdx + 1 : 0, 0, importString);
                            // write the current processed file with the import
                            fs.writeFileSync(path.resolve(filePath), splittedLines.join("\n"));
                        } catch (error) {
                            console.error("An error occurred:", error);
                        }
                    }
                }

                // get the ending time
                const endTime = new Date();

                // log the successful completion with elapsed time
                logger.now(`CSS generated successfully in ${logger.makeBold(endTime - startTime)} ms`);
            } catch (error) {
                console.error("An error occurred:", error);
            }
        } else {
            // log the unnecessary processing operation
            logger.now(`no changes made to its style - ${logger.makeBold("not processed path")}`);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

module.exports = { generateCSSfile };
