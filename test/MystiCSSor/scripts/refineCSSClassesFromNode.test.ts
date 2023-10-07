import { Node } from "@babel/core";
import { refineCSSClassesFromNode } from "../../../plugins/MystiCSSor/scripts/refineCSSClassesFromNode";

const babelNodeStatic = {
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
};

const babelNodeConfig = {
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
};

const babelNodeDynamic = {
    type: "Property",
    key: {
        type: "Identifier",
        name: "aspectRatio",
    },
    value: {
        type: "StringLiteral",
        value: "1/1",
    },
    kind: "init",
};

const babelNestedNodeStatic = {
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

const babelNestedNodeConfig = {
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

const babelNestedNodeDynamic = {
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
                type: "StringLiteral",
                value: "1/1",
            },
            kind: "init",
        },
    ],
};

describe("Verify refineCSSClassesFromNode function", () => {
    // TESTING THE OBJECTS
    test("Check if the static CSS classes are being return ", () => {
        const key = babelNodeStatic.key.name;
        const cls = refineCSSClassesFromNode(key, babelNodeStatic.value as Node);

        expect(cls).toBe(".flex-orientation-row { flex-direction: row; } ");
    });

    test("Check if the config CSS classes are being return ", () => {
        const key = babelNodeConfig.key.name;
        const cls = refineCSSClassesFromNode(key, babelNodeConfig.value as Node);

        expect(cls).toBe(".some-class-name { background-color: #013598; }");
    });

    test("Check if the dynamic CSS classes are being return ", () => {
        const key = babelNodeDynamic.key.name;
        const cls = refineCSSClassesFromNode(key, babelNodeDynamic.value as Node);

        expect(cls).toBe(".galadriel_ec228ee8 { aspect-ratio: 1/1; }");
    });

    // TESTING THE NESTED NODES
    test("Check if the static CSS classes are being return ", () => {
        const cls: string[] = [];

        babelNestedNodeStatic.properties.forEach((property) => {
            const key = property.key.name;
            const str = refineCSSClassesFromNode(key, property.value as Node) as string;

            cls.push(str);
        });

        expect(cls).toEqual([
            ".organize-content-start { justify-content: start; } ",
            ".flex-orientation-row { flex-direction: row; } ",
        ]);
    });

    test("Check if the config CSS classes are being return ", () => {
        const cls: string[] = [];

        babelNestedNodeConfig.properties.forEach((property) => {
            const key = property.key.name;
            const str = refineCSSClassesFromNode(key, property.value as Node) as string;

            cls.push(str);
        });

        expect(cls).toEqual([
            '.some-class-name { background-color: #013598; }',
            '.some-class-name-3 { display: flex; }'
        ]);
    });

    test("Check if the dynamic CSS classes are being return ", () => {
        const cls: string[] = [];

        babelNestedNodeDynamic.properties.forEach((property) => {
            const key = property.key.name;
            const str = refineCSSClassesFromNode(key, property.value as Node) as string;

            cls.push(str);
        });

        expect(cls).toEqual([
            '.galadriel_b29224cc { height: 100vh; }',
            '.galadriel_ec228ee8 { aspect-ratio: 1/1; }'
        ]);
    });
});
