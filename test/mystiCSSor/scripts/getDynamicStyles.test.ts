import { getDynamicStyles } from "../../../plugins/MystiCSSor/scripts/getDynamicStyles";

describe("Verify if the getDynamicStyles function is returning CSS properties", () => {
    test("Check if dynamic properties are being returned outside nested objects", () => {
        const property_01 = getDynamicStyles("height", false, "100vh");
        const property_02 = getDynamicStyles("background", false, "#ffffff");
        const property_03 = getDynamicStyles("width", false, "100vw");
        const property_04 = getDynamicStyles("pointerEvents", false, "none");
        const property_05 = getDynamicStyles("gap", false, "15px");
        const property_06 = getDynamicStyles("aspectRatio", false, "1/1");

        expect(property_01).toEqual({"className": 'galadriel_b29224cc', "classValue": '.galadriel_b29224cc { height: 100vh; }'});
        expect(property_02).toEqual({"className": "galadriel_5ae4d5d1", "classValue": ".galadriel_5ae4d5d1 { background: #ffffff; }"});
        expect(property_03).toEqual({"className": "galadriel_2ceee5ec", "classValue": ".galadriel_2ceee5ec { width: 100vw; }"});
        expect(property_04).toEqual({"className": "galadriel_d73408d5", "classValue": ".galadriel_d73408d5 { pointer-events: none; }"});
        expect(property_05).toEqual({"className": "galadriel_2c473afa", "classValue": ".galadriel_2c473afa { gap: 15px; }"});
        expect(property_06).toEqual({"className": "galadriel_ec228ee8", "classValue": ".galadriel_ec228ee8 { aspect-ratio: 1/1; }"});
    });

    test("Check if dynamic properties are being returned inside nested objects", () => {
        const property_01 = getDynamicStyles("height", true, "100vh");
        const property_02 = getDynamicStyles("background", true, "#ffffff");
        const property_03 = getDynamicStyles("width", true, "100vw");
        const property_04 = getDynamicStyles("pointerEvents", true, "none");
        const property_05 = getDynamicStyles("gap", true, "15px");
        const property_06 = getDynamicStyles("aspectRatio", true, "1/1");

        expect(property_01).toBe("height");
        expect(property_02).toBe("background");
        expect(property_03).toBe("width");
        expect(property_04).toBe("pointer-events");
        expect(property_05).toBe("gap");
        expect(property_06).toBe("aspect-ratio");
    });
});
