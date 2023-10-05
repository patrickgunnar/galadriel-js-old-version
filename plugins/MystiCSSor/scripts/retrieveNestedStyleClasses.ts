import { Node } from "@babel/types";
import { getDynamicStyles } from "./getDynamicStyles";
import { getStaticStyles } from "./getStaticStyles";
import { composeCSSClassName } from "./composeCSSClassName";
import { computeConfigCSS } from "./computeConfigCSS";

const retrieveNestedStyleClasses = (pseudo: string, node: Node) => {
    const testRegex = /^\$\w+(-\w+)*$/;
    const nestedClasses: string[] = [];

    (node as any).properties.forEach((property: any) => {
        if ((property as any).value.type.includes("Literal")) {
            const key = (property as any).key.name;
            const value = (property as any).value.value;

            if (key && typeof key === "string") {
                if ( value && typeof value === "string" && testRegex.test(value)) {
                    const staticStyle = getStaticStyles(key, value, true);

                    if (staticStyle) {
                        const [[objKey, objValue]] = Object.entries(staticStyle);

                        nestedClasses.push(`${objKey}:${objValue}`);
                    } else {
                        const customClassName = value.replace("$", "");
                        const customStyle = computeConfigCSS(customClassName, true);

                        if (customStyle && typeof customStyle === "object") {
                            const { customKey, customValue } = customStyle;

                            nestedClasses.push(`${customKey}:${customValue}`);
                        }
                    }
                } else if (value && typeof value === "string") {
                    const classContent = getDynamicStyles(key, true);

                    if (classContent) {
                        nestedClasses.push(`${classContent}:${value}`);
                    }
                }
            }
        }
    });

    return composeCSSClassName(pseudo, nestedClasses, node);
};

export { retrieveNestedStyleClasses };
