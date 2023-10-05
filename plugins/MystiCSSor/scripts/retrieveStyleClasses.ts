import { Node } from "@babel/types";
import { computeConfigCSS } from "./computeConfigCSS";
import { getStaticStyles } from "./getStaticStyles";
import { getDynamicStyles } from "./getDynamicStyles";

const retrieveStyleClasses = (key: string, node: Node) => {
    const testRegex = /^\$\w+(-\w+)*$/;
    const value = (node as any).value;

    if (value && typeof value === "string" && testRegex.test(value)) {
        const staticStyle = getStaticStyles(key, value);

        if (staticStyle) {
            // replace the node value to the class name
            (node as any).value = value.replace("$", "");

            return staticStyle;
        } else {
            const customClassName = value.replace("$", "");
            const customStyle = computeConfigCSS(customClassName);

            if (customStyle) {
                /// replace the node value to the class name
                (node as any).value = customClassName;

                return customStyle.replace("&", "");
            }
        }
    } else if (value && typeof value === "string") {
        const classContent = getDynamicStyles(key, false, value);

        if (classContent && typeof classContent === "object") {
            const { className, classValue } = classContent;

            // replace the node value to the class name
            (node as any).value = className;

            return classValue;
        }
    }
};

export { retrieveStyleClasses };
