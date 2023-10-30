import { Node } from "@babel/core";
import { composeCSSClassName } from "../../../plugins/MystiCSSor/scripts/composeCSSClassName";

const babelNode = {
    type: "ObjectExpression",
    properties: [
        {
            type: "Property",
            key: {
                type: "Identifier",
                name: "name",
            },
            value: {
                type: "StringLiteral",
                value: "Your Name",
            },
            kind: "init",
        },
        {
            type: "Property",
            key: {
                type: "Identifier",
                name: "title",
            },
            value: {
                type: "StringLiteral",
                value: "Seasoned Web Developer",
            },
            kind: "init",
        },
    ],
};

describe("Verify the composeCSSClassName function", () => {
    test("Check if CSS class name with pseudo-class is being generated", () => {
        const rules = [
            "background:#fff",
            "border:1px solid #00",
            "border-radius:5px",
            "display:inline-block",
            "text-align:center",
            "text-transform:uppercase",
        ];
        const className = composeCSSClassName("hover", rules, babelNode as Node);

        expect(className).toEqual(".galadriel_b041ca33:hover { background:#fff;border:1px solid #00;border-radius:5px;display:inline-block;text-align:center;text-transform:uppercase }");
    });

    test("Check if CSS class name with @media is being generated", () => {
        const rules = [
            "background:#fff",
            "border:1px solid #00",
            "border-radius:5px",
            "display:inline-block",
            "text-align:center",
            "text-transform:uppercase",
        ];
        const className = composeCSSClassName("minLargeDesktops", rules, babelNode as Node);

        expect(className).toEqual("@media screen and (min-width: 1200px) { .galadriel_b041ca33 { background:#fff;border:1px solid #00;border-radius:5px;display:inline-block;text-align:center;text-transform:uppercase } }");
    });

    test("Check if CSS the function is returning an empty string in case of no nestedClasses was passed", () => {
        const className = composeCSSClassName("active", [], babelNode as Node);

        expect(className).toEqual("");
    });
});
