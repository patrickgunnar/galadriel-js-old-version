import { coreStaticStyles } from "../../PatterniaHub/coreStaticStyles";

describe("Testing the coreStaticStyles function", () => {
    test("Expect to be return", () => {
        const styles = coreStaticStyles["display"]({
            extractGaladrielClasses: (classes: any) => classes,
        });

        expect(styles).toBeDefined();
    });
});
