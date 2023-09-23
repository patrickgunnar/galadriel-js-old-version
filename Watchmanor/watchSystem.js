const chokidar = require("chokidar");
const { exec } = require("child_process");
const killPort = require("kill-port");
const { copyFiles } = require("./copyFiles");

let serverProcess;
const sourceDir = ".";

const startWebpackDevServer = () => {
    console.log("Initializing the webpack server...");

    serverProcess = exec(
        `npx webpack serve --config webpack.config.js`,
        (error, stdout, stderr) => {
            if (error) {
                console.error(
                    `Encountered an error while executing the webpack server: ${stderr}`
                );
            } else {
                console.log("Webpack server initiated successfully.");
            }
        }
    );
};

const signalWebpackDevServer = () => {
    console.log("Notifying webpack about new changes...");

    if (serverProcess) {
        killPort(8080, "tcp")
            .then(() => {
                console.log("The server has ceased. Initiating a restart...");
                //startWebpackDevServer();
            })
            .catch((err) =>
                console.error(
                    "Encountered an error while terminating the server:",
                    err
                )
            );
    }
};

const classHarvestPlugin = () => {
    console.log("Executing classHarvestPlugin...");

    exec(
        "node dist/plugins/MystiCSSor/classHarvestPlugin.js",
        (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                console.error(
                    `Encountered an error during the classes harvest process: ${stderr}.`
                );
            } else {
                console.log("Successfully harvested the CSS classes.");
            }
        }
    );
};

const compileTypeScript = () => {
    console.log("Compiling with 'tsc --incremental'.");

    exec(`tsc --incremental`, (error, stdout, stderr) => {
        if (error) {
            console.log(error);
            console.error(
                `Encountered an error during the TypeScript compilation process: ${stderr}.`
            );
        } else {
            console.log(
                "Successfully completed the TypeScript code compilation process."
            );

            // call harvest classes plugin
            classHarvestPlugin();
        }
    });
};

const watchSystem = () => {
    console.log("Observing modifications in TypeScript files...");

    const watcher = chokidar.watch(`${sourceDir}/**/*.ts`, {
        persistent: true,
        ignored: ["dist/**", "node_modules/**"],
    });

    watcher.on("change", () => {
        // call the compilation if a file changes
        compileTypeScript();
    });
};

copyFiles();
compileTypeScript();
watchSystem();
