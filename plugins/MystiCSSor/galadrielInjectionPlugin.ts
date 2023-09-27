import postcss, { Result, Root } from "postcss";
import { getDevelopmentStyleRules } from "./galadrielHarvestPlugin";

module.exports = function () {
    return {
        postcssPlugin: "galadrielInjectionPlugin",
        Once(root: Root, { result }: { result: Result }) {
            const styleRules = getDevelopmentStyleRules();
            const parsedRules = postcss.parse(styleRules);

            root.append(parsedRules);
        },
    };
};

module.exports.postcss = true;
