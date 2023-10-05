import { Node, stringLiteral, objectProperty, identifier } from "@babel/types";
import { coreDynamicProperties } from "../../../PatterniaHub/coreDynamicProperties";
import { hashHex } from "./hashHex";

const composeCSSClassName = (pseudo: string, nestedClasses: string[], node: Node) => {
    if (nestedClasses) {
        const hashedHex = hashHex(nestedClasses.join(" "));
        const rules = nestedClasses.join(";");
        const pseudoClass = coreDynamicProperties[pseudo];
        const strLiteral = stringLiteral(`galadriel_${hashedHex}`);
        const objProperty = objectProperty(identifier("className"), strLiteral);

        if (pseudoClass.includes("$")) {
            // replace the node value to the class name
            (node as any).properties = [objProperty]

            return `@media screen and (${pseudoClass.replace("$", "")}) { .galadriel_${hashedHex} { ${rules} } }`;
        } else {
            // replace the node value to the class name
            (node as any).properties = [objProperty]

            return `.galadriel_${pseudoClass.replace("&", hashedHex)} { ${rules} }`;
        }
    }

    return "";
};

export { composeCSSClassName };
