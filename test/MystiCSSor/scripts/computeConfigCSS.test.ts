import { computeConfigCSS } from "../../../plugins/MystiCSSor/scripts/computeConfigCSS";

describe("Verify if computeConfigCSS function is collecting the styles", () => {
    test("Check if the return is a class string string", () => {
        const clsName = "some-class-name-3";
        const expectedStyles = ".some-class-name-3& { display: flex; }";
        const result = computeConfigCSS(clsName);

        expect(result).toBe(expectedStyles);
    });

    test("Check if the return is a object string", () => {
        const clsName = "some-class-name";
        const expectedStyles = { customKey: "background-color", customValue: "#013598" };
        const result = computeConfigCSS(clsName, true);

        expect(result).toEqual(expectedStyles);
    });
});
