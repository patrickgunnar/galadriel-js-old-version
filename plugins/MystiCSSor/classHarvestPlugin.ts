import fs from "fs";
import path from "path";
import { computeObjectStyles } from "./scripts/computeObjectStyles";

const classHarvestPlugin = async () => {
    console.log("Harvesting the CSS classes...")
    console.time("pluginExecutionTime");

    try {
        const galadrielPath = path.join(__dirname, "..", "..", "galadriel.css");

        if (fs.existsSync(galadrielPath)) {
            const { staticStyles } = await computeObjectStyles();
            // generates dynamic styles
            // generates config styles

            const galadrielCSS = await fs.promises.readFile(
                galadrielPath,
                "utf-8"
            );
            const modifiedContent = galadrielCSS.replace(
                /@galadriel staticStyles;/g,
                staticStyles
            );

            // replace /@galadriel dynamicStyles;/g
            // replace /@galadriel configStyles;/g

            const destinyPath = path.join(__dirname, "..", "..", "styles");

            if (!fs.existsSync(destinyPath)) {
                fs.mkdirSync(destinyPath, { recursive: true });
            }

            await fs.promises.writeFile(
                path.join(destinyPath, "galadriel.css"),
                modifiedContent
            );

            console.log(
                "CSS successfully generated and saved as 'galadriel.css'."
            );
        } else {
            console.log("The 'galadriel.css' CSS file was not found.");
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    console.log("The harvest has finished! Time of execution: ")
    console.timeEnd("pluginExecutionTime");
};

classHarvestPlugin();
