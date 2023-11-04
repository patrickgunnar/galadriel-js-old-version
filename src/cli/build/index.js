const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const { glob } = require("glob");
const { parseConfig } = require("./scripts/parseConfig.js");
const { Logger } = require("../../../scripts/logger.js");
const { clearModularControl } = require(path.join(__dirname, "..", "..", "..", "build", "src", "clearModularControl.js"));
const { shouldGenerateCSSFile } = require(path.join(__dirname, "..", "..", "..", "build", "src", "shouldGenerateCSSFile.js"));
const { uniteGaladrielAST } = require(path.join(__dirname, "..", "..", "..", "build", "src", "ast", "uniteGaladrielAST.js"));
const { coreAST } = require(path.join(__dirname, "..", "..", "..", "build", "src", "ast", "coreAST.js"));
const { modularAST } = require(path.join(__dirname, "..", "..", "..", "build", "src", "ast", "modularAST.js"));

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
 * Assembles application styles by processing JavaScript and TypeScript files to generate CSS rules and files.
 * @async
 * @returns {Promise<void>} A promise that resolves when the process is complete.
 */
async function assembleApplicationStyles() {
    try {
        const logger = new Logger();

        // collects the galadriel.config
        const { module, output, ignore } = parseConfig();

        // if exists output and ignore content
        if (output && ignore) {
            // get all the js, jsx, ts, tsx files
            const files = await glob("**/*.{js,jsx,ts,tsx}", {
                ignore: ["node_modules/**", "**/*.{config.js,config.ts}", "**/*.{.}", ...ignore.map(item => {
                    // if item is the name of a folder
                    if (
                        !item.includes("./") && !item.includes("/") && !item.includes(".")
                    ) return `${item}/**`;
                    else return item;
                })],
            });
            
            // starting log
            logger.now(logger.makeBold("Galadriel.js build process just started"));

            // loops through the array of files
            for (const file of files) {
                // if current path does not include a starting dot
                if (file[0] !== ".") {
                    try {
                        // get the starting time
                        const startTime = new Date();

                        // console log the processing path 
                        logger.now(`processing the path: ${logger.makeBold(file)}`);

                        // read the code to be processed
                        const codeToTranspile = fs.readFileSync(
                            path.resolve(file), "utf-8"
                        );

                        // if the code includes the craftingStyles handler
                        if (codeToTranspile.includes("craftingStyles")) {
                            // if module and modularAST are valid
                            if (module) {
                                // clear the modular ast
                                clearAstElements(modularAST);
                                clearModularControl();
                            }

                            // process the code - generates the CSS rules
                            const transpiledCode = babel.transformSync(codeToTranspile, {
                                filename: file,
                                configFile: path.join(__dirname, "..", "..", "babel.internal.config.js")
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
                                    const __output = module ? `${file.split(".")[0]}.css`: output;

                                    // write the generated styles content to the output path
                                    fs.writeFileSync(path.resolve(__output), contentCSS);

                                    // if modular mode is enabled
                                    if (module) {
                                        // get the basement from the path - Like: ("index.js")
                                        const importPath = path.basename(file).split(".")[0];
                                        // generates the importing string for the generated CSS file to be inserted to the current processed file
                                        const importString = `// Importing the CSS file generated by Galadriel.js\nimport './${importPath}.css';\n`;

                                        // if the current processed file does not contain the import string
                                        if (!codeToTranspile.includes(importString)) {
                                            try {
                                                // split the current processed code
                                                const splittedLines = codeToTranspile.split("\n");
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
                                                fs.writeFileSync(path.resolve(file), splittedLines.join("\n"));
                                            } catch (error) {
                                                console.error("An error occurred:", error);

                                                return;
                                            }
                                        }
                                    }

                                    // get the ending time
                                    const endTime = new Date();

                                    // log the successful completion with elapsed time
                                    logger.now(`CSS generated successfully in ${logger.makeBold(endTime - startTime)} ms`);
                                } catch (error) {
                                    console.error("An error occurred:", error);

                                    return;
                                }
                            } else {
                                // log the unnecessary processing operation
                                logger.now(`no changes made to its style - ${logger.makeBold("not processed path")}`);
                            }
                        } else {
                            // log the unnecessary processing operation
                            // there's no craftingStyles handler call
                            logger.now(
                                `no craftingStyles has been instantiated - ${logger.makeBold("not processed path")}`
                            );
                        }
                    } catch (error) {
                        console.error("An error occurred:", error);

                        return;
                    }
                }
            }

            // ending log
            logger.now(logger.makeBold("Galadriel.js build ended successfully"));
        }
    } catch (error) {
        console.error("An error occurred:", error);

        return;
    }
}

module.exports = { assembleApplicationStyles };
