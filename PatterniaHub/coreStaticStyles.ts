import { CoreStaticStylesType } from "../types/coreTypes";
import { CSSUtil } from "./StaticVault/CSSUtil";
import { ButtonCSSUtil } from "./StaticVault/ButtonCSSUtil";
import { NavbarCSSUtil } from "./StaticVault/NavbarCSSUtil";
import { FooterCSSUtil } from "./StaticVault/FooterCSSUtil";

export const coreStaticStyles: CoreStaticStylesType = {
    ...CSSUtil,
    ...ButtonCSSUtil,
    ...NavbarCSSUtil,
    ...FooterCSSUtil,
};
