import { hashHex } from "../../../plugins/MystiCSSor/scripts/hashHex";

describe("Verify if hashHex function is generating correctly values", () => {
    const hashed_01 = hashHex("background-color:#FFFFFF");
    const hashed_02 = hashHex("height:100vh");
    const hashed_03 = hashHex("display:flex");
    const hashed_04 = hashHex("border-top:1px solid #000000");
    const hashed_05 = hashHex("background:#708090; color:#b8b8b8; cursor:default; box-shadow:inset -4px 4px 9px #5f6d7a, inset 4px -4px 9px #8193a6;");
    const hashed_06 = hashHex("background:linear-gradient(to top, #ccc 0%, #fff 100%); box-shadow:0 6px 10px #000; border-radius:5px; display:flex; gap:10px; flex-direction:column; align-items:center; justify-content:center; line-height:30px; opacity:0; visibility:hidden; top:85px; padding:10px; position:absolute; height:auto; width:auto;");
    const hashed_07 = hashHex("");

    test("Check if the generated hashed_01 has the same return value as the hashHex function", () => {
        expect(hashHex("background-color:#FFFFFF")).toEqual(hashed_01);
    });

    test("Check if the generated hashed_02 has the same return value as the hashHex function", () => {
        expect(hashHex("height:100vh")).toEqual(hashed_02);
    });

    test("Check if the generated hashed_03 has the same return value as the hashHex function", () => {
        expect(hashHex("display:flex")).toEqual(hashed_03);
    });

    test("Check if the generated hashed_04 has the same return value as the hashHex function", () => {
        expect(hashHex("border-top:1px solid #000000")).toEqual(hashed_04);
    });

    test("Check if the generated hashed_05 has the same return value as the hashHex function", () => {
        expect(hashHex("background:#708090; color:#b8b8b8; cursor:default; box-shadow:inset -4px 4px 9px #5f6d7a, inset 4px -4px 9px #8193a6;")).toEqual(hashed_05);
    });

    test("Check if the generated hashed_06 has the same return value as the hashHex function", () => {
        expect(hashHex("background:linear-gradient(to top, #ccc 0%, #fff 100%); box-shadow:0 6px 10px #000; border-radius:5px; display:flex; gap:10px; flex-direction:column; align-items:center; justify-content:center; line-height:30px; opacity:0; visibility:hidden; top:85px; padding:10px; position:absolute; height:auto; width:auto;")).toEqual(hashed_06);
    });

    test("Check if the generated hashed_07 has the same return value as the hashHex function", () => {
        expect(hashHex("")).toEqual(hashed_07);
    });
});
