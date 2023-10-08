import { HTMLElementTagName } from "../types/coreTypes";
import { CraftClassesType } from "../types/typeManifest";
interface CallbackType {
    (): CraftClassesType;
}
interface CraftStylesType {
    (element: HTMLElementTagName, callback: CallbackType): HTMLElement;
}
declare const craftingStyledElement: CraftStylesType;
export { craftingStyledElement };
