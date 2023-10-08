"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreStaticStyles = void 0;
const CSSUtil_1 = require("./StaticVault/CSSUtil");
const ButtonCSSUtil_1 = require("./StaticVault/ButtonCSSUtil");
const NavbarCSSUtil_1 = require("./StaticVault/NavbarCSSUtil");
const FooterCSSUtil_1 = require("./StaticVault/FooterCSSUtil");
exports.coreStaticStyles = Object.assign(Object.assign(Object.assign(Object.assign({}, CSSUtil_1.CSSUtil), ButtonCSSUtil_1.ButtonCSSUtil), NavbarCSSUtil_1.NavbarCSSUtil), FooterCSSUtil_1.FooterCSSUtil);
