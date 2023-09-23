import fs from "fs";
import path from "path";

const parseConfig = () => {
    const __configPaths = ["galadriel.config.ts", "galadriel.config.js"];

    try {
        for (const __path of __configPaths) {
            const __fullPath = path.resolve(__path);

            if (fs.existsSync(__fullPath)) {
                return require(__fullPath);
            } else {
                throw new Error(
                    "Galadriel config file (galadriel.config.ts or galadriel.config.js) not found."
                );
            }
        }
    } catch (error: any) {
        console.error("An error occurred:", error);

        return [];
    }
};

export { parseConfig };
