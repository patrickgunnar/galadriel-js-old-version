import postcss, { Result, Root } from "postcss";
import { getDevelopmentStyleRules } from "./galadrielHarvestPlugin";

module.exports = function () {
    return {
        postcssPlugin: "galadrielInjectionPlugin",
        Once(root: Root, { result }: { result: Result }) {
            try {
                const styleRules = getDevelopmentStyleRules();
                const parsedRules = postcss.parse(styleRules);

                root.append(parsedRules);
            } catch (error: any) {
                console.error("An error occurred:", error);
            }
        },
    };
};

module.exports.postcss = true;
