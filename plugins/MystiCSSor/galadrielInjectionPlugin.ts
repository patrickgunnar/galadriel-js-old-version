import postcss, { Result, Root } from "postcss";
import { uniteGaladrielAST } from "./AST/uniteGaladrielAST";

module.exports = function () {
    return {
        postcssPlugin: "galadrielInjectionPlugin",
        Once(root: Root, { result }: { result: Result }) {
            try {
                const strFromAST = uniteGaladrielAST();

                if (strFromAST) {
                    const parsedRules = postcss.parse(strFromAST);

                    if (parsedRules) {
                        root.append(parsedRules);
                    }
                }
            } catch (error: any) {
                console.error("An error occurred:", error);
            }
        },
    };
};

module.exports.postcss = true;
