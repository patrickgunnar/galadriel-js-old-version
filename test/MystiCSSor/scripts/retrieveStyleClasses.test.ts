import { Node } from "@babel/core";
import { retrieveStyleClasses } from "../../../plugins/MystiCSSor/scripts/retrieveStyleClasses";

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

describe("Verify retrieveStyleClasses function", () => {
    test("Check if the static CSS classes are being return ", () => {
        const key = babelNodeStatic.key.name;
		const cls = retrieveStyleClasses(key, babelNodeStatic.value as Node);

		expect(cls).toBe(".flex-orientation-row { flex-direction: row; } ");
	});

	test("Check if the config CSS classes are being return ", () => {
        const key = babelNodeConfig.key.name;
		const cls = retrieveStyleClasses(key, babelNodeConfig.value as Node);

		expect(cls).toBe(".some-class-name { background-color: #013598; }");
	});

	test("Check if the dynamic CSS classes are being return ", () => {
        const key = babelNodeDynamic.key.name;
		const cls = retrieveStyleClasses(key, babelNodeDynamic.value as Node);

		expect(cls).toBe(".galadriel_ec228ee8 { aspect-ratio: 1/1; }");
	});
});
