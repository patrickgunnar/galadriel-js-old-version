"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniteGaladrielAST = void 0;
const coreDynamicProperties_1 = require("../kernel/coreDynamicProperties");
const uniteGaladrielAST = (ast) => {
    let classesString = "";
    for (const node in ast) {
        if (ast[node]) {
            for (const child in ast[node]) {
                if (ast[node][child].length > 0) {
                    if (node === "mediaQueryVariables") {
                        const mediaValue = coreDynamicProperties_1.coreDynamicProperties[child].replace("$", "");
                        if (mediaValue) {
                            classesString += `@media screen and (${mediaValue}) {\n\t${ast[node][child].join("\n\t")}\n}\n`;
                        }
                    }
                    else {
                        classesString += `${ast[node][child].join("\n")}\n`;
                    }
                }
            }
        }
    }
    return classesString;
};
exports.uniteGaladrielAST = uniteGaladrielAST;
