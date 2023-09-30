//@ts-ignore
import { CraftClassesType } from "../types/typeManifest";
import { genClassNames } from "./utils/genClassNames";

interface CallbackType {
    (): CraftClassesType;
}

interface CraftStylesType {
    (callback: CallbackType): string;
}

const craftingStyles: CraftStylesType = (callback): string => {
    return genClassNames(callback());
};

export { craftingStyles };
