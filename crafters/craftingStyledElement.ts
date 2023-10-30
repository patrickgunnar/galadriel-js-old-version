//@ts-ignore
import { HTMLElementTagName } from "../types/coreTypes";
import { CraftClassesType } from "../types/typeManifest";
import { genClassNames } from "./utils/genClassNames";

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
    const classNames = genClassNames(callback());

    if (classNames) {
        createdElement.className = classNames;
    }

    return createdElement;
};

//export { craftingStyledElement };
