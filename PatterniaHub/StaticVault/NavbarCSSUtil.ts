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
            "&": `{ background: linear-gradient(to top, ${bgColorStart} 0%, ${bgColorEnd} 100%); box-sizing: border-box; display: flex; align-items: center; justify-content: center; position: fixed; padding: 5px; height: 70px; width: 100%; z-index: 99; }`,
            "& div":
                "{ display: flex; align-items: center; justify-content: space-between; margin: auto; padding: 0px 60px; position: relative; height: 100%; width: 100%; max-width: 1300px; }",
            "& a": `{ color: ${textColor}; font-size: 30px; font-weight: 600; text-decoration: none; }`,
            "& ul": "{ display: inline-flex; }",
            "& li": `{ list-style: none; color: ${textColor}; cursor: pointer; text-decoration: none; font-size: 18px; font-weight: 600; padding: 10px 20px; margin: 0px 5px; border-radius: 5px; transition: all 0.3s ease; height: auto; width: auto; }`,
            "& li:hover": `{ background: ${hoverColor}; }`,
            "& li ul": `{ background: linear-gradient(to top, ${bgColorStart} 0%, ${bgColorEnd} 100%); box-shadow: 0 6px 10px ${shadowColor}; display: flex; gap: 10px; flex-direction: column; align-items: center; justify-content: center; line-height: 30px; opacity: 0; visibility: hidden; top: 85px; padding: 10px; position: absolute; height: auto; width: auto; }`,
            "& li:hover ul":
                "{ transition: all 0.3s ease; top: 52px; margin: 0px -18px; opacity: 1; visibility: visible; }",
        });

        return extractGaladrielClasses({
            ".$element-navbar-light": genNavbar({
                bgColorStart: "#dfe9f3",
                bgColorEnd: "white",
                textColor: "#333333",
                hoverColor: "#b8b8b8",
                shadowColor: "rgba(0,0,0,0.15)",
            }),
            ".$element-navbar-midnight-blue": genNavbar({
                bgColorStart: "#020061",
                bgColorEnd: "#6195db",
                textColor: "#dfe9f3",
                hoverColor: "#6195ff",
                shadowColor: "rgba(0,0,0,0.15)",
            }),
        });
    },
};
