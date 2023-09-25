import { CoreStaticStylesType } from "../types/coreTypes";
import { CSSUtil } from "./StaticVault/CSSUtil";
import { ButtonCSSUtil } from "./StaticVault/ButtonCSSUtil";

export const coreStaticStyles: CoreStaticStylesType = {
    ...CSSUtil,
    ...ButtonCSSUtil,
};
