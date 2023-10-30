import { CoreStaticStylesType } from "../types/coreTypes";
import { CSSUtil } from "./static/CSSUtil";
import { ButtonCSSUtil } from "./static/ButtonCSSUtil";
import { NavbarCSSUtil } from "./static/NavbarCSSUtil";
import { FooterCSSUtil } from "./static/FooterCSSUtil";

export const coreStaticStyles: CoreStaticStylesType = {
    ...CSSUtil,
    ...ButtonCSSUtil,
    ...NavbarCSSUtil,
    ...FooterCSSUtil,
};
