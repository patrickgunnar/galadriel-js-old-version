const chokidar = require("chokidar");
const { parseExclude } = require("./scripts/parseExclude");

function spectraScribe() {
    const rootDir = ".";
    const toExclude = parseExclude();
    const watcher = chokidar.watch(rootDir, {
        persistent: true,
        ignoreInitial: true,
        ignored: toExclude,
    });

    watcher.on("change", (path) => {
        if (path[0] !== ".") {
            console.log(path);
        }
    });

    console.log("Galadriel.js initialization completed successfully");
}

spectraScribe();
