const chokidar = require("chokidar");
const { parseExclude } = require("./scripts/parseExclude");
const { Logger } = require("./scripts/logger");

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
        }
    });

    logger.now("Galadriel.js just started", true);
}

module.exports = { spectraScribe };
