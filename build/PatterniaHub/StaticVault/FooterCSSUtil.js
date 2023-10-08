"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterCSSUtil = void 0;
exports.FooterCSSUtil = {
    /*
        CUSTOM CLASSES FOR ELEMENTS
    */
    simplifiedFooter: ({ extractGaladrielClasses }) => {
        const genFooter = ({ bgColorStart, bgColorEnd, textColorOne, textColorTwo, shadowColor }) => ({
            "&": `{ background: linear-gradient(to top, ${bgColorStart} 0%, ${bgColorEnd} 100%); box-sizing: border-box; box-shadow: 6px 0 10px ${shadowColor}; display: flex; align-items: center; justify-content: center; user-select: none; position: fixed; bottom: 0; padding: 5px; height: 70px; width: 100%; z-index: 99; }`,
            "& div": "{ display: flex; align-items: center; justify-content: space-between; margin: auto; padding: 0px 60px; position: relative; height: 100%; width: 100%; max-width: 1300px; }",
            "& a": `{ color: ${textColorOne}; font-size: 30px; font-weight: 600; text-decoration: none; }`,
            "& p": `{ color: ${textColorTwo}; font-size: 15px; font-weight: 400; padding: 10px 20px; margin: 0px 5px; border-radius: 5px; }`,
            "& div div a": "{ border-bottom: 2px solid transparent; font-size: 18px; padding: 10px 20px; margin: 0px 5px; }",
            "& div div a:hover": `{ border-bottom: 2px solid ${textColorOne}; }`,
        });
        return extractGaladrielClasses({
            ".$element-footer-light": genFooter({
                bgColorStart: "#dfe9f3",
                bgColorEnd: "white",
                textColorOne: "#333333",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-midnight-blue": genFooter({
                bgColorStart: "#020061",
                bgColorEnd: "#6195db",
                textColorOne: "#dfe9f3",
                textColorTwo: "#cccccc",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-dodger-blue": genFooter({
                bgColorStart: "#2c7ec4",
                bgColorEnd: "#3494e6",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-pale-pink": genFooter({
                bgColorStart: "#c95e93",
                bgColorEnd: "#ec6ead",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-turquoise-green": genFooter({
                bgColorStart: "#00ae92",
                bgColorEnd: "#00cdac",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-byzantine-purple": genFooter({
                bgColorStart: "#5a0461",
                bgColorEnd: "#6a0572",
                textColorOne: "#dfe9f3",
                textColorTwo: "#cccccc",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-thistle": genFooter({
                bgColorStart: "#916f89",
                bgColorEnd: "#ab83a1",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-coral-red": genFooter({
                bgColorStart: "#d25d54",
                bgColorEnd: "#f76d63",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-sunglow": genFooter({
                bgColorStart: "#d9833a",
                bgColorEnd: "#ff9a44",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-pale-red": genFooter({
                bgColorStart: "#d94b4b",
                bgColorEnd: "#ff5858",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-golden-poppy": genFooter({
                bgColorStart: "#cc8115",
                bgColorEnd: "#f09819",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-candy-apple": genFooter({
                bgColorStart: "#8b192d",
                bgColorEnd: "#a31d35",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-scarlet": genFooter({
                bgColorStart: "#d93535",
                bgColorEnd: "#ff3e3e",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-sunset-orange": genFooter({
                bgColorStart: "#d96341",
                bgColorEnd: "#ff744d",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-footer-light-apricot": genFooter({
                bgColorStart: "#d9895b",
                bgColorEnd: "#ffa16b",
                textColorOne: "#dfe9f3",
                textColorTwo: "#000000",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
        });
    },
};
