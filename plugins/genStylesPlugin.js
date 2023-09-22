const path = require("path");
const fs = require("fs");

const { processObjects } = require("./script/processObjects");

const genStylesPlugin = () => {
    return {
        postcssPlugin: "generates-styles-plugin",
        Once(root, { result }) {
            try {
                const staticCSSFilePath = path.join(
                    __dirname,
                    "..",
                    "galadrielStatic.css"
                );

                if (fs.existsSync(staticCSSFilePath)) {
                    const { staticStyles } = processObjects();
                    // generates dynamic styles
                    // generates config styles

                    const staticCSSStyles = fs.readFileSync(
                        staticCSSFilePath,
                        "utf-8"
                    );

                    const staticModifiedContent = staticCSSStyles.replace(
                        /@galadriel staticStyles;/g,
                        staticStyles
                    );

                    // replace /@galadriel dynamicStyles;/g
                    // replace /@galadriel configStyles;/g

                    const saveToPath = path.join(__dirname, "..", "dist");

                    if (!fs.existsSync(saveToPath)) {
                        fs.mkdirSync(saveToPath, { recursive: true });
                    }

                    fs.writeFileSync(
                        path.join(saveToPath, "galadriel.css"),
                        staticModifiedContent
                    );

                    console.log("Successfully generated the galadriel.css!");
                } else {
                    console.error("Static CSS file not found.");
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        },
    };
};

genStylesPlugin.postcss = true;

module.exports = genStylesPlugin;
