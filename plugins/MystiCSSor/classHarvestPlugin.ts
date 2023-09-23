import { Root, Result } from "postcss";
import fs from "fs";
import path from "path";
import { computeObjectStyles } from "./scripts/computeObjectStyles";

const classHarvestPlugin = () => {
    return {
        postcssPlugin: "class-harvest-plugin",
        Once(root: Root, result: Result) {
            try {
                const __galadrielPath = path.join(
                    __dirname,
                    "..",
                    "..",
                    "galadriel.css"
                );

                if (fs.existsSync(__galadrielPath)) {
                    const { __staticStyles } = computeObjectStyles()
                    // generates dynamic styles
                    // generates config styles

                    const __galadrielCSS = fs.readFileSync(__galadrielPath, "utf-8");
                    const __modifiedContent = __galadrielCSS.replace(
                        /@galadriel staticStyles;/g,
                        __staticStyles
                    );

                    // replace /@galadriel dynamicStyles;/g
                    // replace /@galadriel configStyles;/g

                    const __destinyPath = path.join(
                        __dirname,
                        "..",
                        "..",
                        "dist"
                    );

                    if (!fs.existsSync(__destinyPath)) {
                        fs.mkdirSync(__destinyPath, { recursive: true });
                    }

                    fs.writeFileSync(
                        path.join(__destinyPath, "galadriel.css"),
                        __modifiedContent
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
        },
    };
};

classHarvestPlugin.postcss = true;

export { classHarvestPlugin };
