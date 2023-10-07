import { Node } from "@babel/core";
import { retrieveNestedStyleClasses } from "../../../plugins/MystiCSSor/scripts/retrieveNestedStyleClasses";

const babelNodeStatic = {
    type: "ObjectExpression",
    properties: [
        {
            type: "Property",
            key: {
                type: "Identifier",
                name: "justifyContent",
            },
            value: {
                type: "StringLiteral",
                value: "$organize-content-start",
            },
            kind: "init",
        },
        {
            type: "Property",
            key: {
                type: "Identifier",
                name: "flexDirection",
            },
            value: {
                type: "StringLiteral",
                value: "$flex-orientation-row",
            },
            kind: "init",
        },
    ],
};

const babelNodeConfig = {
    type: "ObjectExpression",
    properties: [
        {
            type: "Property",
            key: {
                type: "Identifier",
                name: "backgroundColor",
            },
            value: {
                type: "StringLiteral",
                value: "$some-class-name",
            },
            kind: "init",
        },
        {
            type: "Property",
            key: {
                type: "Identifier",
                name: "display",
            },
            value: {
                type: "StringLiteral",
                value: "$some-class-name-3",
            },
            kind: "init",
        },
    ],
};

const babelNodeDynamic = {
    type: "ObjectExpression",
    properties: [
        {
            type: "Property",
            key: {
                type: "Identifier",
                name: "height",
            },
            value: {
                type: "StringLiteral",
                value: "100vh",
            },
            kind: "init",
        },
        {
            type: "Property",
            key: {
                type: "Identifier",
                name: "aspectRatio",
            },
            value: {
                type: "1/1",
                value: "$some-class-name-3",
            },
            kind: "init",
        },
    ],
};

describe("Verify retrieveNestedStyleClasses function", () => {
    test("Check if the static CSS classes are being return ", () => {
		const cls = retrieveNestedStyleClasses("hover", babelNodeStatic as Node);

		expect(cls).toBe(".galadriel_37f33e36:hover { justify-content:start;flex-direction:row }");
	});

	test("Check if the config CSS classes are being return ", () => {
		const cls = retrieveNestedStyleClasses("hover", babelNodeConfig as Node);

		expect(cls).toBe(".galadriel_f3b0a041:hover { background-color:#013598;display:flex }");
	});

	test("Check if the dynamic CSS classes are being return ", () => {
		const cls = retrieveNestedStyleClasses("hover", babelNodeDynamic as Node);

		expect(cls).toBe(".galadriel_b29224cc:hover { height:100vh }");
	});
});
