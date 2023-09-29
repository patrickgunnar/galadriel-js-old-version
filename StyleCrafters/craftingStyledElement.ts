//@ts-ignore
import { HTMLElementTagName } from "../types/coreTypes";
import { CraftClassesType } from "../types/typeManifest";

interface CallbackType {
    (): CraftClassesType;
}

interface CraftStylesType {
    (element: HTMLElementTagName, callback: CallbackType): HTMLElement;
}

const craftingStyledElement: CraftStylesType = (
    element,
    callback
): HTMLElement => {
    const createdElement = document.createElement(element);

    try {
        const classNames = Object.entries(callback()).reduce(
            (acc, [key, value]) => {
                const regex = /^__\w+(-\w+)*$/;
                const isMatchingPattern = regex.test(value);

                if (isMatchingPattern) {
                    return acc + (acc.length > 0 ? " " : "") + value;
                } else if (typeof value === "object") {
                    console.log(key, " --> ", value);

                    return "";
                } else {
                    const sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, "");
                    const sanitizedKey = key.replace(
                        /([a-z])([A-Z])/g,
                        "$1-$2"
                    );
                    const cssRule = `galadriel-${sanitizedKey.toLowerCase()}__${sanitizedValue}`;

                    return acc + (acc.length > 0 ? " " : "") + cssRule;
                }
            },
            ""
        );

        createdElement.className = classNames;
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return createdElement;
};

export { craftingStyledElement };
