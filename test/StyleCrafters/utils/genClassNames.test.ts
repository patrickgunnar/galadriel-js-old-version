import { genClassNames } from "../../../StyleCrafters/utils/genClassNames";

describe("Verify if genClassNames function is the class names", () => {
    test("Check if a string containing the class names are being returned", () => {
        const clsNames = genClassNames({
            display: "$panel-flex",
            flexDirection: "$flex-orientation-row",
            justifyContent: "$organize-content-start",
            alignContent: "$match-content-center",
            flexWrap: "$flex-enclose-wrap",
            alignItems: "$adjust-stretch",
            overflow: "$excess-hidden",
            height: "100vh",
            background: "#00ffcc",
            overflowY: "$excess-y-scroll",
            hover: {
                background: "#bb00aa",
                backgroundColor: "$some-class-name",
            },
            active: {
                backgroundColor: "#FCFF33",
                alignItems: "$adjust-center",
            },
            minLargeDesktops: {
                background: "#99FF33",
                justifyContent: "$organize-content-center",
            },
            maxStandardSmartphones: {
                background: "#998475",
                flexDirection: "$flex-orientation-column",
            },
        });

        expect(clsNames).toBe("$panel-flex $flex-orientation-row $organize-content-start $match-content-center $flex-enclose-wrap $adjust-stretch $excess-hidden 100vh #00ffcc $excess-y-scroll #bb00aa #FCFF33 #99FF33 #998475");
    });
});
