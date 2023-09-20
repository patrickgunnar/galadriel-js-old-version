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
    alignItems: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".adjust-center": { "align-items": "center" },
        }),
    justifyContent: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".organize-center": { "justify-content": "center" },
        }),
    position: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".set-relative": { position: "relative" },
            ".set-absolute": { position: "absolute" },
            ".set-static": { position: "static" },
            ".set-fixed": { position: "fixed" },
            ".set-sticky": { position: "sticky" },
        }),
    bottom: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".base-full-bottom": { bottom: "0" },
        }),
    width: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".extend-full-viewport": { width: "100vw" },
            ".extend-mid-viewport": { width: "50vw" },
            ".extend-full-percent": { width: "100%" },
            ".extend-mid-percent": { width: "50%" },
            ".extend-auto": { width: "auto" },
        }),
    height: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".ascend-full-viewport": { height: "100vh" },
            ".ascend-mid-viewport": { height: "50vh" },
            ".ascend-full-percent": { height: "100%" },
            ".ascend-mid-percent": { height: "50%" },
            ".ascend-auto": { height: "auto" },
        }),
    aspectRatio: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".proportion-square": { "aspect-ratio": "1/1" },
            ".proportion-auto": { "aspect-ratio": "auto" },
            ".proportion-landscape": { "aspect-ratio": "16/9" },
            ".proportion-portrait": { "aspect-ratio": "4/3" },
            ".proportion-traditional-photo": { "aspect-ratio": "3/2" },
        }),
    backgroundColor: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".background-blue": { "background-color": "blue" },
        }),
};
