import { CraftClassesType } from "../types/typeManifest";
interface CallbackType {
    (): CraftClassesType;
}
declare function craftingStyles(callback: CallbackType): string;
export { craftingStyles };
