import { CoreStaticStylesType } from "../types/coreTypes";
import { CSSUtil } from "./StaticVault/CSSUtil";
import { ElementCSSUtil } from "./StaticVault/ElementCSSUtil";

export const coreStaticStyles: CoreStaticStylesType = {
    ...CSSUtil,
    ...ElementCSSUtil,
};
