import path from "path";

const parseConfig = () => {
    const configPaths = ["galadriel.config.ts", "galadriel.config.js"];

    try {
        for (const __path of configPaths) {
            const fullPath = path.resolve(__path);

            return require(fullPath);
        }
    } catch (error: any) {
        console.error("An error occurred:", error);

        return [];
    }

    console.log(
        "Galadriel config file (galadriel.config.ts or galadriel.config.js) not found."
    );
    return {};
};

export { parseConfig };
