const path = require("path");
const fs = require("fs");

const getConfigSettings = () => {
    const configPaths = ["galadriel.config.ts", "galadriel.config.js"];

    try {
        for (const configPath of configPaths) {
            const fullPath = path.resolve(configPath);

            if (fs.existsSync(fullPath)) {
                return require(fullPath);
            } else {
                throw new Error(
                    "Galadriel config file (galadriel.config.ts or galadriel.config.js) not found."
                );
            }
        }
    } catch (error) {
        console.error(error);

        return [];
    }
};

module.exports = { getConfigSettings };
