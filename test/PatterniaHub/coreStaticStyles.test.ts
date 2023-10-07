import { coreStaticStyles } from "../../PatterniaHub/coreStaticStyles";

const extractor = (cls) => cls;

describe("Verify the coreStaticStyles", () => {
    const display = coreStaticStyles["display"];
    const float = coreStaticStyles["float"];
    const cursor = coreStaticStyles["cursor"];

    // CHECK THE DISPLAY CONTENT
    test("Check if the display is a function", () => {
        expect(typeof display).toBe("function");
    });

    test("Check the display function return", () => {
        const content = display({ extractGaladrielClasses: extractor });

        expect(content).toEqual({
            ".$panel-hidden": { display: "none" },
            ".$panel-block": { display: "block" },
            ".$panel-flex": { display: "flex" },
            ".$panel-inline": { display: "inline" },
            ".$panel-table": { display: "table" },
            ".$panel-grid": { display: "grid" },
            ".$panel-inline-block": { display: "inline-block" },
            ".$panel-inline-flex": { display: "inline-flex" },
            ".$panel-inline-table": { display: "inline-table" },
            ".$panel-inline-grid": { display: "inline-grid" },
            ".$panel-flow-root": { display: "flow-root" },
            ".$panel-contents": { display: "contents" },
            ".$panel-list-item": { display: "list-item" },
            ".$panel-header-group": { display: "table-header-group" },
            ".$panel-footer-group": { display: "table-footer-group" },
            ".$panel-column-group": { display: "table-column-group" },
            ".$panel-row-group": { display: "table-row-group" },
            ".$panel-table-row": { display: "table-row" },
            ".$panel-table-cell": { display: "table-cell" },
            ".$panel-table-column": { display: "table-column" },
            ".$panel-table-caption": { display: "table-caption" },
        });
    });

    // CHECK THE FLOAT CONTENT
    test("Check if the float is a function", () => {
        expect(typeof float).toBe("function");
    });

    test("Check the float function return", () => {
        const content = float({ extractGaladrielClasses: extractor });

        expect(content).toEqual({
            ".$levitate-left": { float: "left" },
            ".$levitate-right": { float: "right" },
            ".$levitate-none": { float: "none" },
        });
    });

    // CHECK THE CURSOR CONTENT
    test("Check if the cursor is a function", () => {
        expect(typeof cursor).toBe("function");
    });

    test("Check the cursor function return", () => {
        const content = cursor({ extractGaladrielClasses: extractor });

        expect(content).toEqual({
            ".$controller-default": { cursor: "default" },
            ".$controller-auto": { cursor: "auto" },
            ".$controller-pointer": { cursor: "pointer" },
            ".$controller-text": { cursor: "text" },
            ".$controller-move": { cursor: "move" },
            ".$controller-wait": { cursor: "wait" },
            ".$controller-not-allowed": { cursor: "not-allowed" },
            ".$controller-help": { cursor: "help" },
            ".$controller-crosshair": { cursor: "crosshair" },
            ".$controller-zoom-in": { cursor: "zoom-in" },
            ".$controller-zoom-out": { cursor: "zoom-out" },
            ".$controller-grab": { cursor: "grab" },
        });
    });
});
