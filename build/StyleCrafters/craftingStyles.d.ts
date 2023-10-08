import { CraftClassesType } from "../types/typeManifest";
interface CallbackType {
    (): CraftClassesType;
}
interface CraftStylesType {
    (callback: CallbackType): string;
}
declare const craftingStyles: CraftStylesType;
export { craftingStyles };
