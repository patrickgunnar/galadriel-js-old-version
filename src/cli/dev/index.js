const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const { parseConfig } = require("./scripts/parseConfig");
const { Logger } = require("../../../scripts/logger");
const { generateCSSfile } = require("./scripts/generateCSSfile");

// extensions to be watched
const extensions = ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"];

/**
 * Begin monitoring and processing code changes with Galadriel.
 *
 * This function initializes Galadriel's code monitoring and processing system. 
 * It watches for changes in specified files, processes them, 
 * and generates CSS files if the code includes the "craftingStyles" handler.
 */
function spectraScribe() {
    try {
        const logger = new Logger();
        // collects the configuration from galadriel.config
        const { ignore, output, module } = parseConfig();

        // if ignore and output do not exist
        if (!ignore || !output) {
            return logger.message(
                "galadriel.config (.js or .ts) with fields output and exclude required", true
            );
        }

        // instantiate the watcher
        const watcher = chokidar.watch(extensions, {
            persistent: true,
            ignoreInitial: true,
            ignored: [...ignore, output, /(^|[/\\])\../],
        });

        // watch all changes on the application
        watcher.on("change", (__path) => {
            // if current path does not include a starting dot
            if (__path[0] !== ".") {
                try {
                    // get the starting time
                    const startTime = new Date();

                    // console log the processing path 
                    logger.now(`processing the path: ${logger.makeBold(__path)}`);

                    // read the code to be processed
                    const codeToTranspile = fs.readFileSync(
                        path.resolve(__path), "utf-8"
                    );

                    // if the code includes the craftingStyles handler
                    if (codeToTranspile.includes("craftingStyles")) {
                        // generates the CSS rules and file
                        generateCSSfile(codeToTranspile, __path, output, module, startTime);
                    } else {
                        // log the unnecessary processing operation
                        // there's no craftingStyles handler call
                        logger.now(
                            `no craftingStyles has been instantiated - ${logger.makeBold("not processed path")}`
                        );
                    }
                } catch (error) {
                    console.error("An error occurred:", error);
                }
            }
        });

        // starting log
        logger.now(logger.makeBold("Galadriel.js just started"));
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

module.exports = { spectraScribe };
