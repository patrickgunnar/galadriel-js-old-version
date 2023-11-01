import { coreDynamicProperties } from "../kernel/coreDynamicProperties";

const uniteGaladrielAST = (ast: Record<string, Record<string, string[]>>): string => {
    let classesString = "";

    for (const node in ast) {
        if (ast[node]) {
            for (const child in ast[node]) {
                if (ast[node][child].length > 0) {
                    if (node === "mediaQueryVariables") {
                        const mediaValue = coreDynamicProperties[child].replace("$", "");

                        if (mediaValue) {
                            classesString += `@media screen and (${mediaValue}) {\n\t${ast[node][child].join("\n\t")}\n}\n`;
                        }
                    } else {
                        classesString += `${ast[node][child].join("\n")}\n`;
                    }
                }
            }
        }
    }

    return classesString;
};

export { uniteGaladrielAST };
