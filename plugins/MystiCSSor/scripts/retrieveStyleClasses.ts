import { Node } from "@babel/types";
import { computeConfigCSS } from "./computeConfigCSS";
import { getStaticStyles } from "./getStaticStyles";
import { getDynamicStyles } from "./getDynamicStyles";

const retrieveStyleClasses = (
    key: string,
    node: Node,
    coreNode: Record<string, string[]>
) => {
    const testRegex = /^\$\w+(-\w+)*$/;
    const value = (node as any).value;

    if (value && typeof value === "string" && testRegex.test(value)) {
        const staticStyle = getStaticStyles(key, value);

        if (staticStyle && typeof staticStyle === "string") {
            // replace the node value to the class name
            (node as any).value = value.replace("$", "");

            if (coreNode[key]) {
                coreNode[key].push(staticStyle);
            } else {
                coreNode[key] = [staticStyle];
            }
        } else {
            let customClassName: string;

            if (key.includes(":")) {
                customClassName = value.replace("$", "").split(":")[0];
            } else {
                customClassName = value.replace("$", "");
            }

            const customStyle = computeConfigCSS(customClassName);

            if (customStyle && typeof customStyle === "string") {
                /// replace the node value to the class name
                (node as any).value = customClassName;

                if (coreNode[key]) {
                    coreNode[key].push(customStyle);
                } else {
                    coreNode[key] = [customStyle];
                }
            }
        }
    } else if (value && typeof value === "string") {
        const classContent = getDynamicStyles(key, false, value);

        if (classContent && typeof classContent === "object") {
            const { className, classValue } = classContent;

            // replace the node value to the class name
            (node as any).value = className;

            if (typeof classValue === "string") {
                if (coreNode[key]) {
                    coreNode[key].push(classValue);
                } else {
                    coreNode[key] = [classValue];
                }
            }
        }
    }
};

export { retrieveStyleClasses };
