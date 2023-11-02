const path = require("path");
const fs = require("fs");

function parseConfig() {
    // Paths for the Galadriel configuration files
    const configPaths = ["galadriel.config.ts", "galadriel.config.js"];

    try {
        for (const __path of configPaths) {
            // Resolve the full path of the configuration file
            const fullPath = path.resolve(__path);

            if (fs.existsSync(fullPath)) {
                // Delete the cached module to ensure fresh require
                delete require.cache[require.resolve(fullPath)];
                // Get the required configuration file if found
                const config = require(fullPath);

                if (config) {
                    // Get the exclude content
                    const { exclude, output, module } = config;

                    if (exclude && output) {
                        // Return the  filtered exclude paths
                        return {
                            module: module ? true : false,
                            output: typeof output === "string" ? output : null,
                            ignore: Array.isArray(exclude)
                                ? exclude.filter(
                                    (item) =>
                                        typeof item === "string" &&
                                        item.length > 0
                                )
                                : typeof exclude === "string"
                                ? [exclude]
                                : null,
                        };
                    }
                }
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }

    return [];
}

module.exports = { parseConfig };
