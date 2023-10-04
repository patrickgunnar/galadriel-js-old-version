import { CoreStaticStylesType, NavbarColorProps } from "../../types/coreTypes";

export const NavbarCSSUtil: CoreStaticStylesType = {
    /*
        CUSTOM CLASSES FOR ELEMENTS
    */
    simplifiedNavbar: ({ extractGaladrielClasses }) => {
        const genNavbar = ({
            bgColorStart, bgColorEnd, textColor, 
            hoverColor, shadowColor
        }: NavbarColorProps) => ({
            "&": `{ background: linear-gradient(to top, ${bgColorStart} 0%, ${bgColorEnd} 100%); box-sizing: border-box; box-shadow: 0 6px 10px ${shadowColor}; display: flex; align-items: center; justify-content: center; user-select: none; position: fixed; padding: 5px; height: 70px; width: 100%; z-index: 99; }`,
            "& div":
                "{ display: flex; align-items: center; justify-content: space-between; margin: auto; padding: 0px 60px; position: relative; height: 100%; width: 100%; max-width: 1300px; }",
            "& a": `{ color: ${textColor}; font-size: 30px; font-weight: 600; text-decoration: none; }`,
            "& ul": "{ display: inline-flex; }",
            "& li": `{ list-style: none; color: ${textColor}; cursor: pointer; text-decoration: none; font-size: 18px; font-weight: 600; padding: 10px 20px; margin: 0px 5px; border-radius: 5px; transition: all 0.3s ease; height: auto; width: auto; }`,
            "& li:hover": `{ background: ${hoverColor}; }`,
            "& li ul": `{ background: linear-gradient(to top, ${bgColorEnd} 0%, ${bgColorEnd} 100%); box-shadow: 0 6px 10px ${shadowColor}; border-radius: 5px; display: flex; gap: 10px; flex-direction: column; align-items: center; justify-content: center; line-height: 30px; opacity: 0; visibility: hidden; top: 85px; padding: 10px; position: absolute; height: auto; width: auto; }`,
            "& ul li ul li": `{ padding: 10px 30px; }`,
            "& ul li ul li:hover": `{ background: ${bgColorStart}; }`,
            "& li:hover ul":
                "{ transition: all 0.3s ease; top: 52px; margin: 0px -18px; opacity: 1; visibility: visible; }",
        });

        return extractGaladrielClasses({
            ".$element-navbar-light": genNavbar({
                bgColorStart: "#dfe9f3",
                bgColorEnd: "white",
                textColor: "#333333",
                hoverColor: "#b8b8b8",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-midnight-blue": genNavbar({
                bgColorStart: "#020061",
                bgColorEnd: "#6195db",
                textColor: "#dfe9f3",
                hoverColor: "#6195ff",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-dodger-blue": genNavbar({
                bgColorStart: "#2c7ec4",
                bgColorEnd: "#3494e6",
                textColor: "#dfe9f3",
                hoverColor: "#6195ff",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-pale-pink": genNavbar({
                bgColorStart: "#c95e93",
                bgColorEnd: "#ec6ead",
                textColor: "#dfe9f3",
                hoverColor: "#ff7fc7",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-turquoise-green": genNavbar({
                bgColorStart: "#00ae92",
                bgColorEnd: "#00cdac",
                textColor: "#dfe9f3",
                hoverColor: "#00ecc6",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-byzantine-purple": genNavbar({
                bgColorStart: "#5a0461",
                bgColorEnd: "#6a0572",
                textColor: "#dfe9f3",
                hoverColor: "#7a0683",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-thistle": genNavbar({
                bgColorStart: "#916f89",
                bgColorEnd: "#ab83a1",
                textColor: "#dfe9f3",
                hoverColor: "#c597b9",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-coral-red": genNavbar({
                bgColorStart: "#d25d54",
                bgColorEnd: "#f76d63",
                textColor: "#dfe9f3",
                hoverColor: "#ff7d72",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-sunglow": genNavbar({
                bgColorStart: "#d9833a",
                bgColorEnd: "#ff9a44",
                textColor: "#dfe9f3",
                hoverColor: "#ffb14e",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-pale-red": genNavbar({
                bgColorStart: "#d94b4b",
                bgColorEnd: "#ff5858",
                textColor: "#dfe9f3",
                hoverColor: "#ff6565",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-golden-poppy": genNavbar({
                bgColorStart: "#cc8115",
                bgColorEnd: "#f09819",
                textColor: "#dfe9f3",
                hoverColor: "#ffaf1d",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-candy-apple": genNavbar({
                bgColorStart: "#8b192d",
                bgColorEnd: "#a31d35",
                textColor: "#dfe9f3",
                hoverColor: "#bb213d",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-scarlet": genNavbar({
                bgColorStart: "#d93535",
                bgColorEnd: "#ff3e3e",
                textColor: "#dfe9f3",
                hoverColor: "#ff4747",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-sunset-orange": genNavbar({
                bgColorStart: "#d96341",
                bgColorEnd: "#ff744d",
                textColor: "#dfe9f3",
                hoverColor: "#ff8559",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
            ".$element-navbar-light-apricot": genNavbar({
                bgColorStart: "#d9895b",
                bgColorEnd: "#ffa16b",
                textColor: "#dfe9f3",
                hoverColor: "#ffb97b",
                shadowColor: "rgba(0,0,0,0.4)",
            }),
        });
    },
};
