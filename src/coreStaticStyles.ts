import { CoreStaticStylesType } from "../types/coreTypes";


export const coreStaticStyles: CoreStaticStylesType = {
    display: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".panel-hidden": { display: "none" },
            ".panel-block": { display: "block" },
            ".panel-flex": { display: "flex" },
            ".panel-inline": { display: "inline" },
            ".panel-table": { display: "table" },
            ".panel-grid": { display: "grid" },
            ".panel-inline-block": { display: "inline-block" },
            ".panel-inline-flex": { display: "inline-flex" },
            ".panel-inline-table": { display: "inline-table" },
            ".panel-inline-grid": { display: "inline-grid" },
            ".panel-flow-root": { display: "flow-root" },
            ".panel-contents": { display: "contents" },
            ".panel-list-item": { display: "list-item" },
            ".panel-group-header": { display: "table-header-group" },
            ".panel-group-footer": { display: "table-footer-group" },
            ".panel-group-column": { display: "table-column-group" },
            ".panel-group-row": { display: "table-row-group" },
            ".panel-table-row": { display: "table-row" },
            ".panel-table-cell": { display: "table-cell" },
            ".panel-table-column": { display: "table-column" },
            ".panel-table-caption": { display: "table-caption" },
        }),
    backgroundColor: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".background-blue-": { "background-color": "blue" },
        }),
};
