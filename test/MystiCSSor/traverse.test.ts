import { traverse } from "../../plugins/MystiCSSor/scripts/traverse";
import { parse } from "acorn";
import fs from "fs";

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

describe("Testing the traverse function", () => {
    test("Should expect an array of objects", () => {
        const fileContent = fs.readFileSync("test/mocks/index-test.js", "utf-8");
        const ast = parse(fileContent, {
            ecmaVersion: "latest",
            sourceType: "module",
        });

        const objs = traverse(ast as babel.types.Node);

        expect(JSON.stringify(objs)).toContain(JSON.stringify(testObjs));
    });
});
