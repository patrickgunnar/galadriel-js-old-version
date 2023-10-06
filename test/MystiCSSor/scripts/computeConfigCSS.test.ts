import { computeConfigCSS } from "../../../plugins/MystiCSSor/scripts/computeConfigCSS";

describe("Verify if computeConfigCSS function is collecting the styles", () => {
    test("Check if the return is a class string string", () => {
        const clsName = "className";
        const expectedStyles = ".className& { background-color: galadriel_7852b855; } .className& { display: galadriel_7852b855; }";
        const result = computeConfigCSS(clsName);

        expect(result).toBe(expectedStyles);
    });

    test("Check if the return is a object string", () => {
        const clsName = "className";
        const expectedStyles = { customKey: 'background-color', customValue: 'galadriel_7852b855' };
        const result = computeConfigCSS(clsName, true);

        expect(result).toEqual(expectedStyles);
    });
});
