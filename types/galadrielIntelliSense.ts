/**
 * Options to display:
 * panel-hidden, panel-block, panel-flex, panel-inline, panel-table, panel-grid, panel-inline-block, panel-inline-flex, panel-inline-table, panel-inline-grid, panel-flow-root, panel-contents, panel-list-item, panel-header-group, panel-footer-group, panel-column-group, panel-row-group, panel-table-row, panel-table-cell, panel-table-column, panel-table-caption
 */
 type display = 'panel-hidden' | 'panel-block' | 'panel-flex' | 'panel-inline' | 'panel-table' | 'panel-grid' | 'panel-inline-block' | 'panel-inline-flex' | 'panel-inline-table' | 'panel-inline-grid' | 'panel-flow-root' | 'panel-contents' | 'panel-list-item' | 'panel-header-group' | 'panel-footer-group' | 'panel-column-group' | 'panel-row-group' | 'panel-table-row' | 'panel-table-cell' | 'panel-table-column' | 'panel-table-caption';

 /**
 * Options to position:
 * set-relative, set-absolute, set-static, set-fixed, set-sticky
 */
 type position = 'set-relative' | 'set-absolute' | 'set-static' | 'set-fixed' | 'set-sticky';

 /**
 * Options to float:
 * levitate-left, levitate-right, levitate-none
 */
 type float = 'levitate-left' | 'levitate-right' | 'levitate-none';

 /**
 * Options to visibility:
 * exposure-visible, exposure-hidden, exposure-collapse
 */
 type visibility = 'exposure-visible' | 'exposure-hidden' | 'exposure-collapse';

 /**
 * Options to clear:
 * plain-left, plain-right, plain-both, plain-none
 */
 type clear = 'plain-left' | 'plain-right' | 'plain-both' | 'plain-none';

 /**
 * Options to overflow:
 * excess-visible, excess-hidden, excess-scroll, excess-auto
 */
 type overflow = 'excess-visible' | 'excess-hidden' | 'excess-scroll' | 'excess-auto';

 /**
 * Options to overflowY:
 * excess-y-visible, excess-y-hidden, excess-y-scroll, excess-y-auto, excess-y-clip
 */
 type overflowY = 'excess-y-visible' | 'excess-y-hidden' | 'excess-y-scroll' | 'excess-y-auto' | 'excess-y-clip';

 /**
 * Options to overflowX:
 * excess-x-visible, excess-x-hidden, excess-x-scroll, excess-x-auto, excess-x-clip
 */
 type overflowX = 'excess-x-visible' | 'excess-x-hidden' | 'excess-x-scroll' | 'excess-x-auto' | 'excess-x-clip';

 /**
 * Options to overflowWrap:
 * excess-wrap-normal, excess-wrap-break-word
 */
 type overflowWrap = 'excess-wrap-normal' | 'excess-wrap-break-word';

 /**
 * Options to whiteSpace:
 * white-field-normal, white-field-nowrap, white-field-pre, white-field-break-spaces, white-field-pre-line, white-field-pre-wrap
 */
 type whiteSpace = 'white-field-normal' | 'white-field-nowrap' | 'white-field-pre' | 'white-field-break-spaces' | 'white-field-pre-line' | 'white-field-pre-wrap';

 /**
 * Options to listStyleType:
 * series-style-none, series-style-disc, series-style-circle, series-style-square
 */
 type listStyleType = 'series-style-none' | 'series-style-disc' | 'series-style-circle' | 'series-style-square';

 /**
 * Options to textAlign:
 * arrange-text-left, arrange-text-right, arrange-text-center, arrange-text-justify
 */
 type textAlign = 'arrange-text-left' | 'arrange-text-right' | 'arrange-text-center' | 'arrange-text-justify';

 /**
 * Options to verticalAlign:
 * set-vertical-baseline, set-vertical-top, set-vertical-middle, set-vertical-bottom
 */
 type verticalAlign = 'set-vertical-baseline' | 'set-vertical-top' | 'set-vertical-middle' | 'set-vertical-bottom';

 /**
 * Options to wordBreak:
 * word-rupture-normal, word-rupture-break-all
 */
 type wordBreak = 'word-rupture-normal' | 'word-rupture-break-all';

 /**
 * Options to fontWeight:
 * font-density-normal, font-density-bold, font-density-lighter, font-density-bolder, font-density-100, font-density-200, font-density-300, font-density-400, font-density-500, font-density-600, font-density-700, font-density-800, font-density-900
 */
 type fontWeight = 'font-density-normal' | 'font-density-bold' | 'font-density-lighter' | 'font-density-bolder' | 'font-density-100' | 'font-density-200' | 'font-density-300' | 'font-density-400' | 'font-density-500' | 'font-density-600' | 'font-density-700' | 'font-density-800' | 'font-density-900';

 /**
 * Options to textDecoration:
 * text-dressing-none, text-dressing-underline, text-dressing-overline, text-dressing-line-through
 */
 type textDecoration = 'text-dressing-none' | 'text-dressing-underline' | 'text-dressing-overline' | 'text-dressing-line-through';

 /**
 * Options to boxSizing:
 * box-scale-content-box, box-scale-border-box, box-scale-inherit, box-scale-initial, box-scale-unset
 */
 type boxSizing = 'box-scale-content-box' | 'box-scale-border-box' | 'box-scale-inherit' | 'box-scale-initial' | 'box-scale-unset';

 /**
 * Options to cursor:
 * controller-default, controller-auto, controller-pointer, controller-text, controller-move, controller-wait, controller-not-allowed, controller-help, controller-crosshair, controller-zoom-in, controller-zoom-out, controller-grab
 */
 type cursor = 'controller-default' | 'controller-auto' | 'controller-pointer' | 'controller-text' | 'controller-move' | 'controller-wait' | 'controller-not-allowed' | 'controller-help' | 'controller-crosshair' | 'controller-zoom-in' | 'controller-zoom-out' | 'controller-grab';

 /**
 * Options to pointerEvents:
 * event-indicator-auto, event-indicator-none
 */
 type pointerEvents = 'event-indicator-auto' | 'event-indicator-none';

 /**
 * Options to outlineStyle:
 * outline-mode-none, outline-mode-auto, outline-mode-dotted, outline-mode-dashed, outline-mode-solid, outline-mode-double, outline-mode-groove, outline-mode-ridge, outline-mode-inset, outline-mode-outset
 */
 type outlineStyle = 'outline-mode-none' | 'outline-mode-auto' | 'outline-mode-dotted' | 'outline-mode-dashed' | 'outline-mode-solid' | 'outline-mode-double' | 'outline-mode-groove' | 'outline-mode-ridge' | 'outline-mode-inset' | 'outline-mode-outset';

 /**
 * Options to boxShadow:
 * container-shadow-none
 */
 type boxShadow = 'container-shadow-none';

 /**
 * Options to textTransform:
 * text-mutate-none, text-mutate-uppercase, text-mutate-lowercase, text-mutate-capitalize
 */
 type textTransform = 'text-mutate-none' | 'text-mutate-uppercase' | 'text-mutate-lowercase' | 'text-mutate-capitalize';

 /**
 * Options to transitionProperty:
 * transition-state-all, transition-state-none
 */
 type transitionProperty = 'transition-state-all' | 'transition-state-none';

 /**
 * Options to transitionTimingFunction:
 * passage-timing-ease, passage-timing-linear, passage-timing-ease-in, passage-timing-ease-out, passage-timing-ease-in-out, passage-timing-step-start, passage-timing-step-end
 */
 type transitionTimingFunction = 'passage-timing-ease' | 'passage-timing-linear' | 'passage-timing-ease-in' | 'passage-timing-ease-out' | 'passage-timing-ease-in-out' | 'passage-timing-step-start' | 'passage-timing-step-end';

 /**
 * Options to flexDirection:
 * flex-orientation-row, flex-orientation-row-reverse, flex-orientation-column, flex-orientation-column-reverse
 */
 type flexDirection = 'flex-orientation-row' | 'flex-orientation-row-reverse' | 'flex-orientation-column' | 'flex-orientation-column-reverse';

 /**
 * Options to flexWrap:
 * flex-enclose-nowrap, flex-enclose-wrap, flex-enclose-wrap-reverse
 */
 type flexWrap = 'flex-enclose-nowrap' | 'flex-enclose-wrap' | 'flex-enclose-wrap-reverse';

 /**
 * Options to justifyContent:
 * organize-center, organize-flex-start, organize-flex-end, organize-space-between, organize-space-around, organize-space-evenly, organize-normal, organize-start, organize-end, organize-stretch, organize-left, organize-right
 */
 type justifyContent = 'organize-center' | 'organize-flex-start' | 'organize-flex-end' | 'organize-space-between' | 'organize-space-around' | 'organize-space-evenly' | 'organize-normal' | 'organize-start' | 'organize-end' | 'organize-stretch' | 'organize-left' | 'organize-right';

 /**
 * Options to alignItems:
 * adjust-center, adjust-flex-start, adjust-flex-end, adjust-stretch, adjust-baseline, adjust-normal, adjust-start, adjust-end, adjust-self-start, adjust-self-end
 */
 type alignItems = 'adjust-center' | 'adjust-flex-start' | 'adjust-flex-end' | 'adjust-stretch' | 'adjust-baseline' | 'adjust-normal' | 'adjust-start' | 'adjust-end' | 'adjust-self-start' | 'adjust-self-end';

 /**
 * Options to alignSelf:
 * place-self-auto, place-self-flex-start, place-self-flex-end, place-self-center, place-self-baseline, place-self-stretch, place-self-normal, place-self-start, place-self-end, place-self-self-start, place-self-self-end
 */
 type alignSelf = 'place-self-auto' | 'place-self-flex-start' | 'place-self-flex-end' | 'place-self-center' | 'place-self-baseline' | 'place-self-stretch' | 'place-self-normal' | 'place-self-start' | 'place-self-end' | 'place-self-self-start' | 'place-self-self-end';

 /**
 * Options to alignContent:
 * match-content-stretch, match-content-flex-start, match-content-flex-end, match-content-center, match-content-space-between, match-content-space-around, match-content-space-evenly, match-content-start, match-content-end, match-content-normal, match-content-baseline
 */
 type alignContent = 'match-content-stretch' | 'match-content-flex-start' | 'match-content-flex-end' | 'match-content-center' | 'match-content-space-between' | 'match-content-space-around' | 'match-content-space-evenly' | 'match-content-start' | 'match-content-end' | 'match-content-normal' | 'match-content-baseline';

 /**
 * Options to textJustify:
 * text-balance-none, text-balance-auto, text-balance-inter-word, text-balance-inter-character
 */
 type textJustify = 'text-balance-none' | 'text-balance-auto' | 'text-balance-inter-word' | 'text-balance-inter-character';

 /**
 * Options to textOverflow:
 * text-exceed-ellipsis, text-exceed-clip
 */
 type textOverflow = 'text-exceed-ellipsis' | 'text-exceed-clip';

 /**
 * Options to boxDecorationBreak:
 * box-ornament-break-slice, box-ornament-break-clone
 */
 type boxDecorationBreak = 'box-ornament-break-slice' | 'box-ornament-break-clone';

 /**
 * Options to tableLayout:
 * table-scheme-auto, table-scheme-fixed
 */
 type tableLayout = 'table-scheme-auto' | 'table-scheme-fixed';

 /**
 * Options to captionSide:
 * caption-facet-top, caption-facet-bottom, caption-facet-block-start, caption-facet-block-end, caption-facet-inline-start, caption-facet-inline-end
 */
 type captionSide = 'caption-facet-top' | 'caption-facet-bottom' | 'caption-facet-block-start' | 'caption-facet-block-end' | 'caption-facet-inline-start' | 'caption-facet-inline-end';

 /**
 * Options to quote:
 * quotation-auto, quotation-none, quotation-french-marks, quotation-french-marks-guillemet-marks
 */
 type quote = 'quotation-auto' | 'quotation-none' | 'quotation-french-marks' | 'quotation-french-marks-guillemet-marks';

 /**
 * Options to columnCount:
 * tower-count-auto
 */
 type columnCount = 'tower-count-auto';

 /**
 * Options to columnGap:
 * pedestal-gap-normal
 */
 type columnGap = 'pedestal-gap-normal';

 /**
 * Options to width:
 * extend-full-viewport, extend-mid-viewport, extend-full-percent, extend-mid-percent, extend-auto
 */
 type width = 'extend-full-viewport' | 'extend-mid-viewport' | 'extend-full-percent' | 'extend-mid-percent' | 'extend-auto';

 /**
 * Options to height:
 * ascend-full-viewport, ascend-mid-viewport, ascend-full-percent, ascend-mid-percent, ascend-auto
 */
 type height = 'ascend-full-viewport' | 'ascend-mid-viewport' | 'ascend-full-percent' | 'ascend-mid-percent' | 'ascend-auto';

 /**
 * Options to aspectRatio:
 * proportion-square, proportion-auto, proportion-landscape, proportion-portrait, proportion-traditional-photo
 */
 type aspectRatio = 'proportion-square' | 'proportion-auto' | 'proportion-landscape' | 'proportion-portrait' | 'proportion-traditional-photo';

 /**
 * Options to backgroundColor:
 * background-blue
 */
 type backgroundColor = 'background-blue';

 export interface CreateClassesType { display?: display;  position?: position;  float?: float;  visibility?: visibility;  clear?: clear;  overflow?: overflow;  overflowY?: overflowY;  overflowX?: overflowX;  overflowWrap?: overflowWrap;  whiteSpace?: whiteSpace;  listStyleType?: listStyleType;  textAlign?: textAlign;  verticalAlign?: verticalAlign;  wordBreak?: wordBreak;  fontWeight?: fontWeight;  textDecoration?: textDecoration;  boxSizing?: boxSizing;  cursor?: cursor;  pointerEvents?: pointerEvents;  outlineStyle?: outlineStyle;  boxShadow?: boxShadow;  textTransform?: textTransform;  transitionProperty?: transitionProperty;  transitionTimingFunction?: transitionTimingFunction;  flexDirection?: flexDirection;  flexWrap?: flexWrap;  justifyContent?: justifyContent;  alignItems?: alignItems;  alignSelf?: alignSelf;  alignContent?: alignContent;  textJustify?: textJustify;  textOverflow?: textOverflow;  boxDecorationBreak?: boxDecorationBreak;  tableLayout?: tableLayout;  captionSide?: captionSide;  quote?: quote;  columnCount?: columnCount;  columnGap?: columnGap;  width?: width;  height?: height;  aspectRatio?: aspectRatio;  backgroundColor?: backgroundColor;  }