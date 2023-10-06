import { getStaticStyles } from "../../../plugins/MystiCSSor/scripts/getStaticStyles";

describe("Verify if the getStaticStyles function is returning the CSS rules", () => {
    test("Check if static CSS classes are being returned outside nested objects", () => {
        const cls_01 = getStaticStyles("flexDirection", "$flex-orientation-row");
        const cls_02 = getStaticStyles("justifyContent", "$organize-content-start");
        const cls_03 = getStaticStyles("alignContent", "$match-content-center");
        const cls_04 = getStaticStyles("flexWrap", "$flex-enclose-wrap");
        const cls_05 = getStaticStyles("alignItems", "$adjust-stretch");
        const cls_06 = getStaticStyles("overflow", "$excess-hidden");

        expect(cls_01).toEqual(".flex-orientation-row { flex-direction: row; } ");
        expect(cls_02).toEqual(".organize-content-start { justify-content: start; } ");
        expect(cls_03).toEqual(".match-content-center { align-content: center; } ");
        expect(cls_04).toEqual(".flex-enclose-wrap { flex-wrap: wrap; } ");
        expect(cls_05).toEqual(".adjust-stretch { align-items: stretch; } ");
        expect(cls_06).toEqual(".excess-hidden { overflow: hidden; } ");
    });

    test("Check if static CSS classes are being returned inside nested objects", () => {
        const cls_01 = getStaticStyles("flexDirection", "$flex-orientation-row", true);
        const cls_02 = getStaticStyles("justifyContent", "$organize-content-start", true);
        const cls_03 = getStaticStyles("alignContent", "$match-content-center", true);
        const cls_04 = getStaticStyles("flexWrap", "$flex-enclose-wrap", true);
        const cls_05 = getStaticStyles("alignItems", "$adjust-stretch", true);
        const cls_06 = getStaticStyles("overflow", "$excess-hidden", true);

        expect(cls_01).toEqual({ 'flex-direction': 'row' });
        expect(cls_02).toEqual({ 'justify-content': 'start' });
        expect(cls_03).toEqual({ 'align-content': 'center' });
        expect(cls_04).toEqual({ 'flex-wrap': 'wrap' });
        expect(cls_05).toEqual({ 'align-items': 'stretch' });
        expect(cls_06).toEqual({ overflow: 'hidden' });
    });
});
