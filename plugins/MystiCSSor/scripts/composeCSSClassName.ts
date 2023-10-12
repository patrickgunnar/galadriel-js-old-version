import { Node, stringLiteral, objectProperty, identifier } from "@babel/types";
import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { hashHex } from "./hashHex";

const composeCSSClassName = (pseudo: string, nestedClasses: string[], node: Node) => {
    if (nestedClasses.length > 0) {
        const pseudoClass = coreDynamicProperties[pseudo];
        
        if (pseudoClass && typeof pseudoClass === "string") {
            const rules = nestedClasses.join(";");
            const hashString = pseudoClass.includes("&") ? rules : `${pseudoClass}_${rules}`;
            const hashedHex = hashHex(hashString);
            const strLiteral = stringLiteral(`galadriel_${hashedHex}`);
            const objProperty = objectProperty(identifier("className"), strLiteral);

            // replace the node value to the class name
            (node as any).properties = [objProperty];

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
