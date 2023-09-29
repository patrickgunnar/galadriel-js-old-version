import { CoreStaticStylesType } from "../../types/coreTypes";

const CSSUtil: CoreStaticStylesType = {
    /*
        STATIC CLASSES
    */
    display: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__panel-hidden": { display: "none" },
            ".__panel-block": { display: "block" },
            ".__panel-flex": { display: "flex" },
            ".__panel-inline": { display: "inline" },
            ".__panel-table": { display: "table" },
            ".__panel-grid": { display: "grid" },
            ".__panel-inline-block": { display: "inline-block" },
            ".__panel-inline-flex": { display: "inline-flex" },
            ".__panel-inline-table": { display: "inline-table" },
            ".__panel-inline-grid": { display: "inline-grid" },
            ".__panel-flow-root": { display: "flow-root" },
            ".__panel-contents": { display: "contents" },
            ".__panel-list-item": { display: "list-item" },
            ".__panel-header-group": { display: "table-header-group" },
            ".__panel-footer-group": { display: "table-footer-group" },
            ".__panel-column-group": { display: "table-column-group" },
            ".__panel-row-group": { display: "table-row-group" },
            ".__panel-table-row": { display: "table-row" },
            ".__panel-table-cell": { display: "table-cell" },
            ".__panel-table-column": { display: "table-column" },
            ".__panel-table-caption": { display: "table-caption" },
        }),
    position: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__set-relative": { position: "relative" },
            ".__set-absolute": { position: "absolute" },
            ".__set-static": { position: "static" },
            ".__set-fixed": { position: "fixed" },
            ".__set-sticky": { position: "sticky" },
        }),
    float: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__levitate-left": { float: "left" },
            ".__levitate-right": { float: "right" },
            ".__levitate-none": { float: "none" },
        }),
    visibility: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__exposure-visible": { visibility: "visible" },
            ".__exposure-hidden": { visibility: "hidden" },
            ".__exposure-collapse": { visibility: "collapse" },
        }),
    clear: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__plain-left": { clear: "left" },
            ".__plain-right": { clear: "right" },
            ".__plain-both": { clear: "both" },
            ".__plain-none": { clear: "none" },
        }),
    overflow: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__excess-visible": { overflow: "visible" },
            ".__excess-hidden": { overflow: "hidden" },
            ".__excess-scroll": { overflow: "scroll" },
            ".__excess-auto": { overflow: "auto" },
        }),
    overflowY: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__excess-y-visible": { "overflow-y": "visible" },
            ".__excess-y-hidden": { "overflow-y": "hidden" },
            ".__excess-y-scroll": { "overflow-y": "scroll" },
            ".__excess-y-auto": { "overflow-y": "auto" },
            ".__excess-y-clip": { "overflow-y": "clip" },
        }),
    overflowX: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__excess-x-visible": { "overflow-x": "visible" },
            ".__excess-x-hidden": { "overflow-x": "hidden" },
            ".__excess-x-scroll": { "overflow-x": "scroll" },
            ".__excess-x-auto": { "overflow-x": "auto" },
            ".__excess-x-clip": { "overflow-x": "clip" },
        }),
    overflowWrap: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__excess-wrap-normal": { "overflow-wrap": "normal" },
            ".__excess-wrap-break-word": { "overflow-wrap": "break-word" },
        }),
    whiteSpace: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__white-field-normal": { "white-space": "normal" },
            ".__white-field-nowrap": { "white-space": "nowrap" },
            ".__white-field-pre": { "white-space": "pre" },
            ".__white-field-break-spaces": { "white-space": "break-spaces" },
            ".__white-field-pre-line": { "white-space": "pre-line" },
            ".__white-field-pre-wrap": { "white-space": "pre-wrap" },
        }),
    listStyleType: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__series-style-none": { "list-style-type": "none" },
            ".__series-style-disc": { "list-style-type": "disc" },
            ".__series-style-circle": { "list-style-type": "circle" },
            ".__series-style-square": { "list-style-type": "square" },
        }),
    textAlign: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__arrange-text-left": { "text-align": "left" },
            ".__arrange-text-right": { "text-align": "right" },
            ".__arrange-text-center": { "text-align": "center" },
            ".__arrange-text-justify": { "text-align": "justify" },
        }),
    verticalAlign: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__set-vertical-baseline": { "vertical-align": "baseline" },
            ".__set-vertical-top": { "vertical-align": "top" },
            ".__set-vertical-middle": { "vertical-align": "middle" },
            ".__set-vertical-bottom": { "vertical-align": "bottom" },
        }),
    wordBreak: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__word-rupture-normal": { "word-break": "normal" },
            ".__word-rupture-break-all": { "word-break": "break-all" },
        }),
    fontWeight: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__font-density-normal": { "font-weight": "normal" },
            ".__font-density-bold": { "font-weight": "bold" },
            ".__font-density-lighter": { "font-weight": "lighter" },
            ".__font-density-bolder": { "font-weight": "bolder" },
            ".__font-density-100": { "font-weight": "100" },
            ".__font-density-200": { "font-weight": "200" },
            ".__font-density-300": { "font-weight": "300" },
            ".__font-density-400": { "font-weight": "400" },
            ".__font-density-500": { "font-weight": "500" },
            ".__font-density-600": { "font-weight": "600" },
            ".__font-density-700": { "font-weight": "700" },
            ".__font-density-800": { "font-weight": "800" },
            ".__font-density-900": { "font-weight": "900" },
        }),
    textDecoration: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__text-dressing-none": { "text-decoration": "none" },
            ".__text-dressing-underline": { "text-decoration": "underline" },
            ".__text-dressing-overline": { "text-decoration": "overline" },
            ".__text-dressing-line-through": {
                "text-decoration": "line-through",
            },
        }),
    boxSizing: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__box-scale-content-box": { "box-sizing": "content-box" },
            ".__box-scale-border-box": { "box-sizing": "border-box" },
            ".__box-scale-inherit": { "box-sizing": "inherit" },
            ".__box-scale-initial": { "box-sizing": "initial" },
            ".__box-scale-unset": { "box-sizing": "unset" },
        }),
    cursor: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__controller-default": { cursor: "default" },
            ".__controller-auto": { cursor: "auto" },
            ".__controller-pointer": { cursor: "pointer" },
            ".__controller-text": { cursor: "text" },
            ".__controller-move": { cursor: "move" },
            ".__controller-wait": { cursor: "wait" },
            ".__controller-not-allowed": { cursor: "not-allowed" },
            ".__controller-help": { cursor: "help" },
            ".__controller-crosshair": { cursor: "crosshair" },
            ".__controller-zoom-in": { cursor: "zoom-in" },
            ".__controller-zoom-out": { cursor: "zoom-out" },
            ".__controller-grab": { cursor: "grab" },
        }),
    pointerEvents: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__event-indicator-auto": { "pointer-events": "auto" },
            ".__event-indicator-none": { "pointer-events": "none" },
        }),
    outlineStyle: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__outline-mode-none": { "outline-style": "none" },
            ".__outline-mode-auto": { "outline-style": "auto" },
            ".__outline-mode-dotted": { "outline-style": "dotted" },
            ".__outline-mode-dashed": { "outline-style": "dashed" },
            ".__outline-mode-solid": { "outline-style": "solid" },
            ".__outline-mode-double": { "outline-style": "double" },
            ".__outline-mode-groove": { "outline-style": "groove" },
            ".__outline-mode-ridge": { "outline-style": "ridge" },
            ".__outline-mode-inset": { "outline-style": "inset" },
            ".__outline-mode-outset": { "outline-style": "outset" },
        }),
    boxShadow: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__container-shadow-none": { "box-shadow": "none" },
        }),
    textTransform: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__text-mutate-none": { "text-transform": "none" },
            ".__text-mutate-uppercase": { "text-transform": "uppercase" },
            ".__text-mutate-lowercase": { "text-transform": "lowercase" },
            ".__text-mutate-capitalize": { "text-transform": "capitalize" },
        }),
    transitionProperty: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__transition-state-all": { "transition-property": "all" },
            ".__transition-state-none": { "transition-property": "none" },
        }),
    transitionTimingFunction: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__passage-timing-ease": { "transition-timing-function": "ease" },
            ".__passage-timing-linear": {
                "transition-timing-function": "linear",
            },
            ".__passage-timing-ease-in": {
                "transition-timing-function": "ease-in",
            },
            ".__passage-timing-ease-out": {
                "transition-timing-function": "ease-out",
            },
            ".__passage-timing-ease-in-out": {
                "transition-timing-function": "ease-in-out",
            },
            ".__passage-timing-step-start": {
                "transition-timing-function": "step-start",
            },
            ".__passage-timing-step-end": {
                "transition-timing-function": "step-end",
            },
        }),
    flexDirection: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__flex-orientation-row": { "flex-direction": "row" },
            ".__flex-orientation-row-reverse": {
                "flex-direction": "row-reverse",
            },
            ".__flex-orientation-column": { "flex-direction": "column" },
            ".__flex-orientation-column-reverse": {
                "flex-direction": "column-reverse",
            },
        }),
    flexWrap: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__flex-enclose-nowrap": { "flex-wrap": "nowrap" },
            ".__flex-enclose-wrap": { "flex-wrap": "wrap" },
            ".__flex-enclose-wrap-reverse": { "flex-wrap": "wrap-reverse" },
        }),
    justifyContent: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__organize-content-center": { "justify-content": "center" },
            ".__organize-content-flex-start": { "justify-content": "flex-start" },
            ".__organize-content-flex-end": { "justify-content": "flex-end" },
            ".__organize-content-space-between": {
                "justify-content": "space-between",
            },
            ".__organize-content-space-around": {
                "justify-content": "space-around",
            },
            ".__organize-content-space-evenly": {
                "justify-content": "space-evenly",
            },
            ".__organize-content-normal": { "justify-content": "normal" },
            ".__organize-content-start": { "justify-content": "start" },
            ".__organize-content-end": { "justify-content": "end" },
            ".__organize-content-stretch": { "justify-content": "stretch" },
            ".__organize-content-left": { "justify-content": "left" },
            ".__organize-content-right": { "justify-content": "right" },
        }),
    justifySelf: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__organize-self-center": { "justify-self": "center" },
            ".__organize-self-flex-start": { "justify-self": "flex-start" },
            ".__organize-self-flex-end": { "justify-self": "flex-end" },
            ".__organize-self-self-start": { "justify-self": "self-start" },
            ".__organize-self-self-end": { "justify-self": "self-end" },
            ".__organize-self-normal": { "justify-self": "normal" },
            ".__organize-self-start": { "justify-self": "start" },
            ".__organize-self-end": { "justify-self": "end" },
            ".__organize-self-stretch": { "justify-self": "stretch" },
            ".__organize-self-left": { "justify-self": "left" },
            ".__organize-self-right": { "justify-self": "right" },
            ".__organize-self-auto": { "justify-self": "auto" },
            ".__organize-self-baseline": { "justify-self": "baseline" },
        }),
    justifyItems: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__organize-items-center": { "justify-items": "center" },
            ".__organize-items-flex-start": { "justify-items": "flex-start" },
            ".__organize-items-flex-end": { "justify-items": "flex-end" },
            ".__organize-items-self-start": { "justify-items": "self-start" },
            ".__organize-items-self-end": { "justify-items": "self-end" },
            ".__organize-items-normal": { "justify-items": "normal" },
            ".__organize-items-start": { "justify-items": "start" },
            ".__organize-items-end": { "justify-items": "end" },
            ".__organize-items-stretch": { "justify-items": "stretch" },
            ".__organize-items-left": { "justify-items": "left" },
            ".__organize-items-right": { "justify-items": "right" },
            ".__organize-items-baseline": { "justify-items": "baseline" },
        }),
    alignItems: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__adjust-center": { "align-items": "center" },
            ".__adjust-flex-start": { "align-items": "flex-start" },
            ".__adjust-flex-end": { "align-items": "flex-end" },
            ".__adjust-stretch": { "align-items": "stretch" },
            ".__adjust-baseline": { "align-items": "baseline" },
            ".__adjust-normal": { "align-items": "normal" },
            ".__adjust-start": { "align-items": "start" },
            ".__adjust-end": { "align-items": "end" },
            ".__adjust-self-start": { "align-items": "self-start" },
            ".__adjust-self-end": { "align-items": "self-end" },
        }),
    alignSelf: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__place-self-auto": { "align-self": "auto" },
            ".__place-self-flex-start": { "align-self": "flex-start" },
            ".__place-self-flex-end": { "align-self": "flex-end" },
            ".__place-self-center": { "align-self": "center" },
            ".__place-self-baseline": { "align-self": "baseline" },
            ".__place-self-stretch": { "align-self": "stretch" },
            ".__place-self-normal": { "align-self": "normal" },
            ".__place-self-start": { "align-self": "start" },
            ".__place-self-end": { "align-self": "end" },
            ".__place-self-self-start": { "align-self": "self-start" },
            ".__place-self-self-end": { "align-self": "self-end" },
        }),
    alignContent: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__match-content-stretch": { "align-content": "stretch" },
            ".__match-content-flex-start": { "align-content": "flex-start" },
            ".__match-content-flex-end": { "align-content": "flex-end" },
            ".__match-content-center": { "align-content": "center" },
            ".__match-content-space-between": {
                "align-content": "space-between",
            },
            ".__match-content-space-around": { "align-content": "space-around" },
            ".__match-content-space-evenly": { "align-content": "space-evenly" },
            ".__match-content-start": { "align-content": "start" },
            ".__match-content-end": { "align-content": "end" },
            ".__match-content-normal": { "align-content": "normal" },
            ".__match-content-baseline": { "align-content": "baseline" },
        }),
    textJustify: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__text-balance-none": { "text-justify": "none" },
            ".__text-balance-auto": { "text-justify": "auto" },
            ".__text-balance-inter-word": { "text-justify": "inter-word" },
            ".__text-balance-inter-character": {
                "text-justify": "inter-character",
            },
        }),
    textOverflow: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__text-exceed-ellipsis": { "text-overflow": "ellipsis" },
            ".__text-exceed-clip": { "text-overflow": "clip" },
        }),
    boxDecorationBreak: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__box-ornament-break-slice": { "box-decoration-break": "slice" },
            ".__box-ornament-break-clone": { "box-decoration-break": "clone" },
        }),
    tableLayout: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__table-scheme-auto": { "table-layout": "auto" },
            ".__table-scheme-fixed": { "table-layout": "fixed" },
        }),
    captionSide: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__caption-facet-top": { "caption-side": "top" },
            ".__caption-facet-bottom": { "caption-side": "bottom" },
            ".__caption-facet-block-start": { "caption-side": "block-start" },
            ".__caption-facet-block-end": { "caption-side": "block-end" },
            ".__caption-facet-inline-start": { "caption-side": "inline-start" },
            ".__caption-facet-inline-end": { "caption-side": "inline-end" },
        }),
    quote: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__quotation-auto": { quotes: "auto" },
            ".__quotation-none": { quotes: "none" },
            ".__quotation-french-marks": { quotes: "'«' '»'" },
            ".__quotation-french-marks-guillemet-marks": {
                quotes: "'«' '»' '‹' '›'",
            },
        }),
    columnCount: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__tower-count-auto": { "column-count": "auto" },
        }),
    columnGap: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__pedestal-gap-normal": { "column-gap": "normal" },
        }),
    aspectRatio: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__proportion-square": { "aspect-ratio": "1/1" },
            ".__proportion-auto": { "aspect-ratio": "auto" },
            ".__proportion-landscape": { "aspect-ratio": "16/9" },
            ".__proportion-portrait": { "aspect-ratio": "4/3" },
            ".__proportion-traditional-photo": { "aspect-ratio": "3/2" },
        }),
    objectPosition: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__object-spot-top": { "object-position": "top" },
            ".__object-spot-bottom": { "object-position": "bottom" },
            ".__object-spot-left": { "object-position": "left" },
            ".__object-spot-right": { "object-position": "right" },
            ".__object-spot-center": { "object-position": "center" },
        }),
    objectFit: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".__object-blend-contain": { "object-fit": "contain" },
            ".__object-blend-cover": { "object-fit": "cover" },
            ".__object-blend-fill": { "object-fit": "fill" },
            ".__object-blend-none": { "object-fit": "none" },
            ".__object-blend-scale-down": { "object-fit": "scale-down" },
        }),
};

export { CSSUtil };
