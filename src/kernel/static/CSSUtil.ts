import { CoreStaticStylesType } from "../../types/coreTypes";

const CSSUtil: CoreStaticStylesType = {
    /*
        STATIC CLASSES
    */
    display: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
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
        }),
    position: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$set-relative": { position: "relative" },
            ".$set-absolute": { position: "absolute" },
            ".$set-static": { position: "static" },
            ".$set-fixed": { position: "fixed" },
            ".$set-sticky": { position: "sticky" },
        }),
    float: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$levitate-left": { float: "left" },
            ".$levitate-right": { float: "right" },
            ".$levitate-none": { float: "none" },
        }),
    visibility: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$exposure-visible": { visibility: "visible" },
            ".$exposure-hidden": { visibility: "hidden" },
            ".$exposure-collapse": { visibility: "collapse" },
        }),
    clear: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$plain-left": { clear: "left" },
            ".$plain-right": { clear: "right" },
            ".$plain-both": { clear: "both" },
            ".$plain-none": { clear: "none" },
        }),
    overflow: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$excess-visible": { overflow: "visible" },
            ".$excess-hidden": { overflow: "hidden" },
            ".$excess-scroll": { overflow: "scroll" },
            ".$excess-auto": { overflow: "auto" },
        }),
    overflowY: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$excess-y-visible": { "overflow-y": "visible" },
            ".$excess-y-hidden": { "overflow-y": "hidden" },
            ".$excess-y-scroll": { "overflow-y": "scroll" },
            ".$excess-y-auto": { "overflow-y": "auto" },
            ".$excess-y-clip": { "overflow-y": "clip" },
        }),
    overflowX: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$excess-x-visible": { "overflow-x": "visible" },
            ".$excess-x-hidden": { "overflow-x": "hidden" },
            ".$excess-x-scroll": { "overflow-x": "scroll" },
            ".$excess-x-auto": { "overflow-x": "auto" },
            ".$excess-x-clip": { "overflow-x": "clip" },
        }),
    overflowWrap: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$excess-wrap-normal": { "overflow-wrap": "normal" },
            ".$excess-wrap-break-word": { "overflow-wrap": "break-word" },
        }),
    whiteSpace: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$white-field-normal": { "white-space": "normal" },
            ".$white-field-nowrap": { "white-space": "nowrap" },
            ".$white-field-pre": { "white-space": "pre" },
            ".$white-field-break-spaces": { "white-space": "break-spaces" },
            ".$white-field-pre-line": { "white-space": "pre-line" },
            ".$white-field-pre-wrap": { "white-space": "pre-wrap" },
        }),
    listStyleType: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$series-style-none": { "list-style-type": "none" },
            ".$series-style-disc": { "list-style-type": "disc" },
            ".$series-style-circle": { "list-style-type": "circle" },
            ".$series-style-square": { "list-style-type": "square" },
        }),
    textAlign: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$arrange-text-left": { "text-align": "left" },
            ".$arrange-text-right": { "text-align": "right" },
            ".$arrange-text-center": { "text-align": "center" },
            ".$arrange-text-justify": { "text-align": "justify" },
        }),
    verticalAlign: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$set-vertical-baseline": { "vertical-align": "baseline" },
            ".$set-vertical-top": { "vertical-align": "top" },
            ".$set-vertical-middle": { "vertical-align": "middle" },
            ".$set-vertical-bottom": { "vertical-align": "bottom" },
        }),
    wordBreak: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$word-rupture-normal": { "word-break": "normal" },
            ".$word-rupture-break-all": { "word-break": "break-all" },
        }),
    fontWeight: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$font-density-normal": { "font-weight": "normal" },
            ".$font-density-bold": { "font-weight": "bold" },
            ".$font-density-lighter": { "font-weight": "lighter" },
            ".$font-density-bolder": { "font-weight": "bolder" },
            ".$font-density-100": { "font-weight": "100" },
            ".$font-density-200": { "font-weight": "200" },
            ".$font-density-300": { "font-weight": "300" },
            ".$font-density-400": { "font-weight": "400" },
            ".$font-density-500": { "font-weight": "500" },
            ".$font-density-600": { "font-weight": "600" },
            ".$font-density-700": { "font-weight": "700" },
            ".$font-density-800": { "font-weight": "800" },
            ".$font-density-900": { "font-weight": "900" },
        }),
    textDecoration: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$text-dressing-none": { "text-decoration": "none" },
            ".$text-dressing-underline": { "text-decoration": "underline" },
            ".$text-dressing-overline": { "text-decoration": "overline" },
            ".$text-dressing-line-through": {
                "text-decoration": "line-through",
            },
        }),
    boxSizing: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$box-scale-content-box": { "box-sizing": "content-box" },
            ".$box-scale-border-box": { "box-sizing": "border-box" },
            ".$box-scale-inherit": { "box-sizing": "inherit" },
            ".$box-scale-initial": { "box-sizing": "initial" },
            ".$box-scale-unset": { "box-sizing": "unset" },
        }),
    cursor: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
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
        }),
    pointerEvents: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$event-indicator-auto": { "pointer-events": "auto" },
            ".$event-indicator-none": { "pointer-events": "none" },
        }),
    outlineStyle: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$outline-mode-none": { "outline-style": "none" },
            ".$outline-mode-auto": { "outline-style": "auto" },
            ".$outline-mode-dotted": { "outline-style": "dotted" },
            ".$outline-mode-dashed": { "outline-style": "dashed" },
            ".$outline-mode-solid": { "outline-style": "solid" },
            ".$outline-mode-double": { "outline-style": "double" },
            ".$outline-mode-groove": { "outline-style": "groove" },
            ".$outline-mode-ridge": { "outline-style": "ridge" },
            ".$outline-mode-inset": { "outline-style": "inset" },
            ".$outline-mode-outset": { "outline-style": "outset" },
        }),
    boxShadow: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$container-shadow-none": { "box-shadow": "none" },
        }),
    textTransform: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$text-mutate-none": { "text-transform": "none" },
            ".$text-mutate-uppercase": { "text-transform": "uppercase" },
            ".$text-mutate-lowercase": { "text-transform": "lowercase" },
            ".$text-mutate-capitalize": { "text-transform": "capitalize" },
        }),
    transitionProperty: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$transition-state-all": { "transition-property": "all" },
            ".$transition-state-none": { "transition-property": "none" },
        }),
    transitionTimingFunction: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$passage-timing-ease": { "transition-timing-function": "ease" },
            ".$passage-timing-linear": {
                "transition-timing-function": "linear",
            },
            ".$passage-timing-ease-in": {
                "transition-timing-function": "ease-in",
            },
            ".$passage-timing-ease-out": {
                "transition-timing-function": "ease-out",
            },
            ".$passage-timing-ease-in-out": {
                "transition-timing-function": "ease-in-out",
            },
            ".$passage-timing-step-start": {
                "transition-timing-function": "step-start",
            },
            ".$passage-timing-step-end": {
                "transition-timing-function": "step-end",
            },
        }),
    flexDirection: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$flex-orientation-row": { "flex-direction": "row" },
            ".$flex-orientation-row-reverse": {
                "flex-direction": "row-reverse",
            },
            ".$flex-orientation-column": { "flex-direction": "column" },
            ".$flex-orientation-column-reverse": {
                "flex-direction": "column-reverse",
            },
        }),
    flexWrap: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$flex-enclose-nowrap": { "flex-wrap": "nowrap" },
            ".$flex-enclose-wrap": { "flex-wrap": "wrap" },
            ".$flex-enclose-wrap-reverse": { "flex-wrap": "wrap-reverse" },
        }),
    justifyContent: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$organize-content-center": { "justify-content": "center" },
            ".$organize-content-flex-start": { "justify-content": "flex-start" },
            ".$organize-content-flex-end": { "justify-content": "flex-end" },
            ".$organize-content-space-between": {
                "justify-content": "space-between",
            },
            ".$organize-content-space-around": {
                "justify-content": "space-around",
            },
            ".$organize-content-space-evenly": {
                "justify-content": "space-evenly",
            },
            ".$organize-content-normal": { "justify-content": "normal" },
            ".$organize-content-start": { "justify-content": "start" },
            ".$organize-content-end": { "justify-content": "end" },
            ".$organize-content-stretch": { "justify-content": "stretch" },
            ".$organize-content-left": { "justify-content": "left" },
            ".$organize-content-right": { "justify-content": "right" },
        }),
    justifySelf: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$organize-self-center": { "justify-self": "center" },
            ".$organize-self-flex-start": { "justify-self": "flex-start" },
            ".$organize-self-flex-end": { "justify-self": "flex-end" },
            ".$organize-self-self-start": { "justify-self": "self-start" },
            ".$organize-self-self-end": { "justify-self": "self-end" },
            ".$organize-self-normal": { "justify-self": "normal" },
            ".$organize-self-start": { "justify-self": "start" },
            ".$organize-self-end": { "justify-self": "end" },
            ".$organize-self-stretch": { "justify-self": "stretch" },
            ".$organize-self-left": { "justify-self": "left" },
            ".$organize-self-right": { "justify-self": "right" },
            ".$organize-self-auto": { "justify-self": "auto" },
            ".$organize-self-baseline": { "justify-self": "baseline" },
        }),
    justifyItems: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$organize-items-center": { "justify-items": "center" },
            ".$organize-items-flex-start": { "justify-items": "flex-start" },
            ".$organize-items-flex-end": { "justify-items": "flex-end" },
            ".$organize-items-self-start": { "justify-items": "self-start" },
            ".$organize-items-self-end": { "justify-items": "self-end" },
            ".$organize-items-normal": { "justify-items": "normal" },
            ".$organize-items-start": { "justify-items": "start" },
            ".$organize-items-end": { "justify-items": "end" },
            ".$organize-items-stretch": { "justify-items": "stretch" },
            ".$organize-items-left": { "justify-items": "left" },
            ".$organize-items-right": { "justify-items": "right" },
            ".$organize-items-baseline": { "justify-items": "baseline" },
        }),
    alignItems: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$adjust-center": { "align-items": "center" },
            ".$adjust-flex-start": { "align-items": "flex-start" },
            ".$adjust-flex-end": { "align-items": "flex-end" },
            ".$adjust-stretch": { "align-items": "stretch" },
            ".$adjust-baseline": { "align-items": "baseline" },
            ".$adjust-normal": { "align-items": "normal" },
            ".$adjust-start": { "align-items": "start" },
            ".$adjust-end": { "align-items": "end" },
            ".$adjust-self-start": { "align-items": "self-start" },
            ".$adjust-self-end": { "align-items": "self-end" },
        }),
    alignSelf: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$place-self-auto": { "align-self": "auto" },
            ".$place-self-flex-start": { "align-self": "flex-start" },
            ".$place-self-flex-end": { "align-self": "flex-end" },
            ".$place-self-center": { "align-self": "center" },
            ".$place-self-baseline": { "align-self": "baseline" },
            ".$place-self-stretch": { "align-self": "stretch" },
            ".$place-self-normal": { "align-self": "normal" },
            ".$place-self-start": { "align-self": "start" },
            ".$place-self-end": { "align-self": "end" },
            ".$place-self-self-start": { "align-self": "self-start" },
            ".$place-self-self-end": { "align-self": "self-end" },
        }),
    alignContent: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$match-content-stretch": { "align-content": "stretch" },
            ".$match-content-flex-start": { "align-content": "flex-start" },
            ".$match-content-flex-end": { "align-content": "flex-end" },
            ".$match-content-center": { "align-content": "center" },
            ".$match-content-space-between": {
                "align-content": "space-between",
            },
            ".$match-content-space-around": { "align-content": "space-around" },
            ".$match-content-space-evenly": { "align-content": "space-evenly" },
            ".$match-content-start": { "align-content": "start" },
            ".$match-content-end": { "align-content": "end" },
            ".$match-content-normal": { "align-content": "normal" },
            ".$match-content-baseline": { "align-content": "baseline" },
        }),
    textJustify: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$text-balance-none": { "text-justify": "none" },
            ".$text-balance-auto": { "text-justify": "auto" },
            ".$text-balance-inter-word": { "text-justify": "inter-word" },
            ".$text-balance-inter-character": {
                "text-justify": "inter-character",
            },
        }),
    textOverflow: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$text-exceed-ellipsis": { "text-overflow": "ellipsis" },
            ".$text-exceed-clip": { "text-overflow": "clip" },
        }),
    boxDecorationBreak: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$box-ornament-break-slice": { "box-decoration-break": "slice" },
            ".$box-ornament-break-clone": { "box-decoration-break": "clone" },
        }),
    tableLayout: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$table-scheme-auto": { "table-layout": "auto" },
            ".$table-scheme-fixed": { "table-layout": "fixed" },
        }),
    captionSide: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$caption-facet-top": { "caption-side": "top" },
            ".$caption-facet-bottom": { "caption-side": "bottom" },
            ".$caption-facet-block-start": { "caption-side": "block-start" },
            ".$caption-facet-block-end": { "caption-side": "block-end" },
            ".$caption-facet-inline-start": { "caption-side": "inline-start" },
            ".$caption-facet-inline-end": { "caption-side": "inline-end" },
        }),
    quote: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$quotation-auto": { quotes: "auto" },
            ".$quotation-none": { quotes: "none" },
            ".$quotation-french-marks": { quotes: "'«' '»'" },
            ".$quotation-french-marks-guillemet-marks": {
                quotes: "'«' '»' '‹' '›'",
            },
        }),
    columnCount: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$tower-count-auto": { "column-count": "auto" },
        }),
    columnGap: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$pedestal-gap-normal": { "column-gap": "normal" },
        }),
    aspectRatio: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$proportion-square": { "aspect-ratio": "1/1" },
            ".$proportion-auto": { "aspect-ratio": "auto" },
            ".$proportion-landscape": { "aspect-ratio": "16/9" },
            ".$proportion-portrait": { "aspect-ratio": "4/3" },
            ".$proportion-traditional-photo": { "aspect-ratio": "3/2" },
        }),
    objectPosition: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$object-spot-top": { "object-position": "top" },
            ".$object-spot-bottom": { "object-position": "bottom" },
            ".$object-spot-left": { "object-position": "left" },
            ".$object-spot-right": { "object-position": "right" },
            ".$object-spot-center": { "object-position": "center" },
        }),
    objectFit: ({ extractGaladrielClasses }) =>
        extractGaladrielClasses({
            ".$object-blend-contain": { "object-fit": "contain" },
            ".$object-blend-cover": { "object-fit": "cover" },
            ".$object-blend-fill": { "object-fit": "fill" },
            ".$object-blend-none": { "object-fit": "none" },
            ".$object-blend-scale-down": { "object-fit": "scale-down" },
        }),
};

export { CSSUtil };
