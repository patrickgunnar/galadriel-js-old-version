"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniteGaladrielAST = void 0;
const coreDynamicProperties_1 = require("../kernel/coreDynamicProperties");
const coreAST_1 = require("./coreAST");
const uniteGaladrielAST = () => {
    let classesString = "";
    for (const node in coreAST_1.coreAST) {
        if (coreAST_1.coreAST[node]) {
            for (const child in coreAST_1.coreAST[node]) {
                if (coreAST_1.coreAST[node][child].length > 0) {
                    if (node === "mediaQueryVariables") {
                        const mediaValue = coreDynamicProperties_1.coreDynamicProperties[child].replace("$", "");
                        if (mediaValue) {
                            classesString += ` @media screen and (${mediaValue}) { ${coreAST_1.coreAST[node][child].join(" ")} }\n\n`;
                        }
                    }
                    else {
                        classesString += ` ${coreAST_1.coreAST[node][child].join(" ")}\n\n`;
                    }
                }
            }
        }
    }
    return classesString;
};
exports.uniteGaladrielAST = uniteGaladrielAST;
