import { Node, stringLiteral, objectProperty, identifier } from "@babel/types";
import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { hashHex } from "./hashHex";

const composeCSSClassName = (pseudo: string, nestedClasses: string[], node: Node) => {
    if (nestedClasses.length > 0) {
        const hashedHex = hashHex(nestedClasses.join(" "));
        const rules = nestedClasses.join(";");
        const pseudoClass = coreDynamicProperties[pseudo];
        const strLiteral = stringLiteral(`galadriel_${hashedHex}`);
        const objProperty = objectProperty(identifier("className"), strLiteral);

        if (pseudoClass && typeof pseudoClass === "string") {
            // replace the node value to the class name
            (node as any).properties = [objProperty]

            if (pseudoClass.includes("&")) {    
                return {
                    isMedia: false,
                    classValue: `.galadriel_${pseudoClass.replace("&", hashedHex)} { ${rules} }`
                };
            } else {
                return {
                    isMedia: true,
                    classValue: `.galadriel_${hashedHex} { ${rules} }`
                };
            }
        }
    }

    return "";
};

export { composeCSSClassName };
