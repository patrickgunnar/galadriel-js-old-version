const readline = require("readline");
const { Logger } = require("../scripts/logger");
const { spawn } = require("child_process");
const { Spinner } = require("../scripts/spinner");

const logger = new Logger();
const spinner = new Spinner();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

logger.message("Welcome to the Galadriel.js Installation Process", true);

function askTranspiler() {
    rl.question(
        "Which transpiler tool would you like to use? [Babel | SWC - (recommended)]: ",
        (answer) => {
            if (answer.toLowerCase() === "babel") {
                // start the spinner
                spinner.start("Installing Babel and its dependencies...");

                // babel installation
                const childProcess = spawn("npm", [
                    "install",
                    "--save-dev",
                    "@babel/cli",
                    "@babel/core",
                    "@babel/generator",
                    "@babel/preset-env",
                    "@babel/preset-typescript",
                    "@types/babel-core",
                    "@types/babel__core",
                    "@types/babel__generator",
                    "babel-loader",
                ]);

                childProcess.on("close", (code) => {
                    spinner.stop();

                    if (code === 0) {
                        logger.message(
                            "Babel and its dependencies installed successfully"
                        );
                    } else {
                        console.error(
                            "Error during Babel installation: ",
                            error
                        );
                    }
                });

                rl.close();
            } else if (answer.toLowerCase() === "swc") {
                // start the spinner
                spinner.start("Installing SWC and its dependencies...");

                // swc installation
                const childProcess = spawn("npm", [
                    "install",
                    "--save-dev",
                    "@swc/core",
                ]);

                childProcess.on("close", (code) => {
                    spinner.stop();

                    if (code === 0) {
                        logger.message(
                            "SWC and its dependencies installed successfully"
                        );
                    } else {
                        console.error("Error during SWC installation: ", error);
                    }
                });

                rl.close();
            } else {
                logger.message(
                    'Invalid choice. Please select "Babel" or "SWC"',
                    true
                );
                askTranspiler();
            }
        }
    );
}

askTranspiler();
