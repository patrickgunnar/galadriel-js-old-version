const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const { parseConfig } = require("./scripts/parseConfig");
const { Logger } = require("../scripts/logger");
const { generateCSSfile } = require("./scripts/generateCSSfile");

function spectraScribe() {
    const logger = new Logger();
    const { ignore, output, module } = parseConfig();

    if (ignore && output) {
        const watcher = chokidar.watch(".", {
            persistent: true,
            ignoreInitial: true,
            ignored: [...ignore, output],
        });

        watcher.on("change", (__path) => {
            if (__path[0] !== ".") {
                const startTime = new Date();
                logger.now(`${logger.makeBold(__path)} just saved`, true);

                const codeToTranspile = fs.readFileSync(
                    path.resolve(__path),
                    "utf-8"
                );

                generateCSSfile(codeToTranspile, __path, output, module);

                const endTime = new Date();

                logger.now(
                    `CSS generated successfully in ${endTime - startTime} ms`,
                    true
                );
            }
        });

        logger.now("Galadriel.js just started", true);
    } else {
        logger.message("galadriel.config (.js or .ts) with fields output and exclude required", true);
    }
}

module.exports = { spectraScribe };
