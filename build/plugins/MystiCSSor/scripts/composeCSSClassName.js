"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeCSSClassName = void 0;
const types_1 = require("@babel/types");
const coreDynamicProperties_1 = require("../../../PatterniaHub/coreDynamicProperties");
const hashHex_1 = require("./hashHex");
const composeCSSClassName = (pseudo, nestedClasses, node) => {
    if (nestedClasses.length > 0) {
        const hashedHex = (0, hashHex_1.hashHex)(nestedClasses.join(" "));
        const rules = nestedClasses.join(";");
        const pseudoClass = coreDynamicProperties_1.coreDynamicProperties[pseudo];
        const strLiteral = (0, types_1.stringLiteral)(`galadriel_${hashedHex}`);
        const objProperty = (0, types_1.objectProperty)((0, types_1.identifier)("className"), strLiteral);
        if (pseudoClass && typeof pseudoClass === "string") {
            // replace the node value to the class name
            node.properties = [objProperty];
            if (pseudoClass.includes("&")) {
                return {
                    isMedia: false,
                    classValue: `.galadriel_${pseudoClass.replace("&", hashedHex)} { ${rules} }`
                };
            }
            else {
                return {
                    isMedia: true,
                    classValue: `.galadriel_${hashedHex} { ${rules} }`
                };
            }
        }
    }
    return "";
};
exports.composeCSSClassName = composeCSSClassName;
