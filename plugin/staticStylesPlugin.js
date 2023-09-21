const { genStaticClasses } = require("../scripts/builds/scripts/genStaticClasses");

const postcss = require("postcss");
const path = require("path");
const fs = require("fs");

const staticStylesPlugin = () => {
    return {
        postcssPlugin: "static-styles-plugin",
        Once(root, { result }) {
            try {
                const staticCSSFilePath = path.join(
                    __dirname,
                    "..",
                    "galadrielStatic.css"
                );

                if (fs.existsSync(staticCSSFilePath)) {
                    const staticStyles = genStaticClasses();
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

staticStylesPlugin.postcss = true;

module.exports = staticStylesPlugin;
