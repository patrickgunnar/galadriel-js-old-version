import { createStyles } from "../../StyleCrafters/createStyles";

describe("Testing the createStyles function", () => {
    test("Expect to have a return", () => {
        const classes = createStyles(() => ({
            button: "element-button-dark-gold",
            display: "panel-flex",
            flexDirection: "flex-orientation-row",
            alignItems: "adjust-center",
            justifyContent: "organize-center",
            aspectRatio: "proportion-landscape",
            cursor: "controller-pointer",
            overflow: "excess-hidden",
        }));

        expect(classes).toBeDefined();
    });
});
