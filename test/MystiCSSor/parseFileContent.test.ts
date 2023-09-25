import { parseFileContent } from "../../plugins/MystiCSSor/scripts/parseFileContent";

const testObjs = [
    {
        button: "element-button-dark-gold",
        display: "panel-flex",
        flexDirection: "flex-orientation-row",
        alignItems: "adjust-center",
        justifyContent: "organize-center",
        aspectRatio: "proportion-landscape",
        cursor: "controller-pointer",
        overflow: "excess-hidden",
    },
];

const testObjsTS = [
    { value: true },
    {
        button: "element-button-dark-gold",
        display: "panel-flex",
        flexDirection: "flex-orientation-row",
        alignItems: "adjust-center",
        justifyContent: "organize-center",
        aspectRatio: "proportion-landscape",
        cursor: "controller-pointer",
        overflow: "excess-hidden",
    },
];

describe("Testing the parseFileContent function", () => {
    test("Should expect an array of objects from JS file", () => {
        const objsJS = parseFileContent("test/mocks/index-test.js");

        expect(JSON.stringify(objsJS)).toContain(JSON.stringify(testObjs));
    });

    test("Should expect an array of objects from TS file", () => {
        const objsTS = parseFileContent("test/mocks/index-test.ts");

        expect(JSON.stringify(objsTS)).toContain(JSON.stringify(testObjsTS));
    });

    test("Should expect an array of objects from HTML file", () => {
        const objsHTML = parseFileContent("test/mocks/index-test.html");

        expect(JSON.stringify(objsHTML)).toContain(JSON.stringify(testObjs));
    });
});
