const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const { parseExclude } = require("./scripts/parseExclude");
const { Logger } = require("../scripts/logger");
const { mergeBabelConfigs } = require("./scripts/mergeBabelConfigs");
const { transpileCode } = require("./scripts/transpileCode");

function spectraScribe() {
    const logger = new Logger();
    const toExclude = parseExclude();
    const watcher = chokidar.watch(".", {
        persistent: true,
        ignoreInitial: true,
        ignored: toExclude,
    });

    watcher.on("change", (__path) => {
        if (__path[0] !== ".") {
            logger.now(`${logger.makeBold(__path)} just saved`, true);

            const babelConfig = mergeBabelConfigs();
            const codeToTranspile = fs.readFileSync(
                path.resolve(__path),
                "utf-8"
            );

            transpileCode(codeToTranspile, babelConfig, __path);
        }
    });

    logger.now("Galadriel.js just started", true);
}

module.exports = { spectraScribe };
