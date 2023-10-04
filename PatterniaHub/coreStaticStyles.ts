import { CoreStaticStylesType } from "../types/coreTypes";
import { CSSUtil } from "./StaticVault/CSSUtil";
import { ButtonCSSUtil } from "./StaticVault/ButtonCSSUtil";
import { NavbarCSSUtil } from "./StaticVault/NavbarCSSUtil";

export const coreStaticStyles: CoreStaticStylesType = {
    ...CSSUtil,
    ...ButtonCSSUtil,
    ...NavbarCSSUtil,
};
