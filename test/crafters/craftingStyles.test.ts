import { craftingStyles } from "../../StyleCrafters/craftingStyles";

describe("Verify the craftingStyles function", () => {
    test("Check if the return is a string containing the class names", () => {
        const classNames = craftingStyles(() => ({
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
        }));

        expect(classNames).toBe("$panel-flex $flex-orientation-row $organize-content-start $match-content-center $flex-enclose-wrap $adjust-stretch $excess-hidden 100vh #00ffcc $excess-y-scroll #bb00aa #FCFF33 #99FF33 #998475");
    });

    test("Check if the return is a empty string", () => {
        const classNames = craftingStyles(() => ({}));

        expect(classNames).toBe("");
    });
});
