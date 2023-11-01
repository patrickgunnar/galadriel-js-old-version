import { coreDynamicProperties } from "../kernel/coreDynamicProperties";
import { coreAST } from "./coreAST";

const uniteGaladrielAST = (): string => {
    let classesString = "";

    for (const node in coreAST) {
        if (coreAST[node]) {
            for (const child in coreAST[node]) {
                if (coreAST[node][child].length > 0) {
                    if (node === "mediaQueryVariables") {
                        const mediaValue = coreDynamicProperties[child].replace("$", "");

                        if (mediaValue) {
                            classesString += `@media screen and (${mediaValue}) {\n\t${coreAST[node][child].join("\n\t")}\n}\n`;
                        }
                    } else {
                        classesString += `${coreAST[node][child].join("\n")}\n`;
                    }
                }
            }
        }
    }

    return classesString;
};

export { uniteGaladrielAST };
