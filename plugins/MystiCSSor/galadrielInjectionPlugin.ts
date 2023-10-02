import postcss, { Result, Root } from "postcss";
import { getStyleClasses } from "./galadrielHarvestPlugin";

module.exports = function () {
    return {
        postcssPlugin: "galadrielInjectionPlugin",
        Once(root: Root, { result }: { result: Result }) {
            try {
                const styleRules = getStyleClasses();
                const parsedRules = postcss.parse(styleRules);

                root.append(parsedRules);
            } catch (error: any) {
                console.error("An error occurred:", error);
            }
        },
    };
};

module.exports.postcss = true;
