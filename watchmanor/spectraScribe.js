const chokidar = require("chokidar");
const { parseExclude } = require("./scripts/parseExclude");
const { Logger } = require("../scripts/logger");
const { mergeBabelConfigs } = require("./scripts/mergeBabelConfigs");

function spectraScribe() {
    const logger = new Logger();
    const rootDir = ".";
    const toExclude = parseExclude();
    const watcher = chokidar.watch(rootDir, {
        persistent: true,
        ignoreInitial: true,
        ignored: toExclude,
    });

    watcher.on("change", (path) => {
        if (path[0] !== ".") {
            logger.now(`${logger.makeBold(path)} just saved`, true);

            const babelConfig = mergeBabelConfigs();
            console.log(babelConfig)
        }
    });

    logger.now("Galadriel.js just started", true);
}

module.exports = { spectraScribe };
