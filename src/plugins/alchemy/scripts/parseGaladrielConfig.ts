import path from "path";
import fs from "fs";

/**
 * Parses the Galadriel configuration file (galadriel.config.ts or galadriel.config.js).
 *
 * @returns {object} The parsed configuration object.
 */
const parseGaladrielConfig = () => {
    // Paths for the Galadriel configuration files
    const configPaths = ["galadriel.config.ts", "galadriel.config.js"];

    try {
        for (const __path of configPaths) {
            // Resolve the full path of the configuration file
            const fullPath = path.resolve(__path);
            
            if (fs.existsSync(fullPath)) {
                // Delete the cached module to ensure fresh require
                delete require.cache[require.resolve(fullPath)];

                // Return the required configuration file if found
                return require(fullPath);
            }
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    console.log(
        "Galadriel config file (galadriel.config.ts or galadriel.config.js) not found."
    );
    return {};
};

export { parseGaladrielConfig };
