export type CreateClassesType = { display?: 'panel-hidden' | 'panel-block' | 'panel-flex' | 'panel-inline' | 'panel-table' | 'panel-grid' | 'panel-inline-block' | 'panel-inline-flex' | 'panel-inline-table' | 'panel-inline-grid' | 'panel-flow-root' | 'panel-contents' | 'panel-list-item' | 'panel-header-group' | 'panel-footer-group' | 'panel-column-group' | 'panel-row-group' | 'panel-table-row' | 'panel-table-cell' | 'panel-table-column' | 'panel-table-caption'; position?: 'set-relative' | 'set-absolute' | 'set-static' | 'set-fixed' | 'set-sticky'; float?: 'levitate-left' | 'levitate-right' | 'levitate-none'; visibility?: 'exposure-visible' | 'exposure-hidden' | 'exposure-collapse'; clear?: 'plain-left' | 'plain-right' | 'plain-both' | 'plain-none'; overflow?: 'excess-visible' | 'excess-hidden' | 'excess-scroll' | 'excess-auto'; overflowY?: 'excess-y-visible' | 'excess-y-hidden' | 'excess-y-scroll' | 'excess-y-auto' | 'excess-y-clip'; overflowX?: 'excess-x-visible' | 'excess-x-hidden' | 'excess-x-scroll' | 'excess-x-auto' | 'excess-x-clip'; overflowWrap?: 'excess-wrap-normal' | 'excess-wrap-break-word'; whiteSpace?: 'white-field-normal' | 'white-field-nowrap' | 'white-field-pre' | 'white-field-break-spaces' | 'white-field-pre-line' | 'white-field-pre-wrap'; listStyleType?: 'series-style-none' | 'series-style-disc' | 'series-style-circle' | 'series-style-square'; textAlign?: 'arrange-text-left' | 'arrange-text-right' | 'arrange-text-center' | 'arrange-text-justify'; verticalAlign?: 'set-vertical-baseline' | 'set-vertical-top' | 'set-vertical-middle' | 'set-vertical-bottom'; wordBreak?: 'word-rupture-normal' | 'word-rupture-break-all'; fontWeight?: 'font-density-normal' | 'font-density-bold' | 'font-density-lighter' | 'font-density-bolder' | 'font-density-100' | 'font-density-200' | 'font-density-300' | 'font-density-400' | 'font-density-500' | 'font-density-600' | 'font-density-700' | 'font-density-800' | 'font-density-900'; textDecoration?: 'text-dressing-none' | 'text-dressing-underline' | 'text-dressing-overline' | 'text-dressing-line-through'; boxSizing?: 'box-scale-content-box' | 'box-scale-border-box' | 'box-scale-inherit' | 'box-scale-initial' | 'box-scale-unset'; cursor?: 'controller-default' | 'controller-auto' | 'controller-pointer' | 'controller-text' | 'controller-move' | 'controller-wait' | 'controller-not-allowed' | 'controller-help' | 'controller-crosshair' | 'controller-zoom-in' | 'controller-zoom-out' | 'controller-grab'; pointerEvents?: 'event-indicator-auto' | 'event-indicator-none'; outlineStyle?: 'outline-mode-none' | 'outline-mode-auto' | 'outline-mode-dotted' | 'outline-mode-dashed' | 'outline-mode-solid' | 'outline-mode-double' | 'outline-mode-groove' | 'outline-mode-ridge' | 'outline-mode-inset' | 'outline-mode-outset'; boxShadow?: 'container-shadow-none'; textTransform?: 'text-mutate-none' | 'text-mutate-uppercase' | 'text-mutate-lowercase' | 'text-mutate-capitalize'; transitionProperty?: 'transition-state-all' | 'transition-state-none'; transitionTimingFunction?: 'passage-timing-ease' | 'passage-timing-linear' | 'passage-timing-ease-in' | 'passage-timing-ease-out' | 'passage-timing-ease-in-out' | 'passage-timing-step-start' | 'passage-timing-step-end'; flexDirection?: 'flex-orientation-row' | 'flex-orientation-row-reverse' | 'flex-orientation-column' | 'flex-orientation-column-reverse'; flexWrap?: 'flex-enclose-nowrap' | 'flex-enclose-wrap' | 'flex-enclose-wrap-reverse'; justifyContent?: 'organize-content-center' | 'organize-content-flex-start' | 'organize-content-flex-end' | 'organize-content-space-between' | 'organize-content-space-around' | 'organize-content-space-evenly' | 'organize-content-normal' | 'organize-content-start' | 'organize-content-end' | 'organize-content-stretch' | 'organize-content-left' | 'organize-content-right'; justifySelf?: 'organize-self-center' | 'organize-self-flex-start' | 'organize-self-flex-end' | 'organize-self-self-start' | 'organize-self-self-end' | 'organize-self-normal' | 'organize-self-start' | 'organize-self-end' | 'organize-self-stretch' | 'organize-self-left' | 'organize-self-right' | 'organize-self-auto' | 'organize-self-baseline'; justifyItems?: 'organize-items-center' | 'organize-items-flex-start' | 'organize-items-flex-end' | 'organize-items-self-start' | 'organize-items-self-end' | 'organize-items-normal' | 'organize-items-start' | 'organize-items-end' | 'organize-items-stretch' | 'organize-items-left' | 'organize-items-right' | 'organize-items-baseline'; alignItems?: 'adjust-center' | 'adjust-flex-start' | 'adjust-flex-end' | 'adjust-stretch' | 'adjust-baseline' | 'adjust-normal' | 'adjust-start' | 'adjust-end' | 'adjust-self-start' | 'adjust-self-end'; alignSelf?: 'place-self-auto' | 'place-self-flex-start' | 'place-self-flex-end' | 'place-self-center' | 'place-self-baseline' | 'place-self-stretch' | 'place-self-normal' | 'place-self-start' | 'place-self-end' | 'place-self-self-start' | 'place-self-self-end'; alignContent?: 'match-content-stretch' | 'match-content-flex-start' | 'match-content-flex-end' | 'match-content-center' | 'match-content-space-between' | 'match-content-space-around' | 'match-content-space-evenly' | 'match-content-start' | 'match-content-end' | 'match-content-normal' | 'match-content-baseline'; textJustify?: 'text-balance-none' | 'text-balance-auto' | 'text-balance-inter-word' | 'text-balance-inter-character'; textOverflow?: 'text-exceed-ellipsis' | 'text-exceed-clip'; boxDecorationBreak?: 'box-ornament-break-slice' | 'box-ornament-break-clone'; tableLayout?: 'table-scheme-auto' | 'table-scheme-fixed'; captionSide?: 'caption-facet-top' | 'caption-facet-bottom' | 'caption-facet-block-start' | 'caption-facet-block-end' | 'caption-facet-inline-start' | 'caption-facet-inline-end'; quote?: 'quotation-auto' | 'quotation-none' | 'quotation-french-marks' | 'quotation-french-marks-guillemet-marks'; columnCount?: 'tower-count-auto'; columnGap?: 'pedestal-gap-normal'; aspectRatio?: 'proportion-square' | 'proportion-auto' | 'proportion-landscape' | 'proportion-portrait' | 'proportion-traditional-photo'; objectPosition?: 'object-spot-top' | 'object-spot-bottom' | 'object-spot-left' | 'object-spot-right' | 'object-spot-center'; objectFit?: 'object-blend-contain' | 'object-blend-cover' | 'object-blend-fill' | 'object-blend-none' | 'object-blend-scale-down'; graceController?: 'element-button-light-gray' | 'element-button-light-gold' | 'element-button-gold' | 'element-button-dark-gold' | 'element-button-old-gold' | 'element-button-light-blue' | 'element-button-sky-blue' | 'element-button-turquoise-blue' | 'element-button-pink' | 'element-button-dark-coral-pink' | 'element-button-light-olive-green' | 'element-button-olive-green' | 'element-button-dark-olive-green' | 'element-button-deep-olive-green' | 'element-button-deep-indigo' | 'element-button-indigo' | 'element-button-light-indigo' | 'element-button-silver' | 'element-button-deep-teal' | 'element-button-deep-ruby' | 'element-button-dark-ruby' | 'element-button-ruby' | 'element-button-light-ruby' | 'element-button-light-orchid' | 'element-button-orchid' | 'element-button-dark-orchid' | 'element-button-deep-orchid' | 'element-button-electric-blue' | 'element-button-emerald-green' | 'element-button-bright-green' | 'element-button-vivid-orange' | 'element-button-bold-red'; backgroundColor?: 'background-blue' | 'background-black' | 'background-turquoise-blue'; accentColor?: string; backdropFilter?: string; content?: string; gap?: string; rowGap?: string; scale?: string; order?: string; margin?: string; marginBottom?: string; marginLeft?: string; marginRight?: string; marginTop?: string; padding?: string; paddingBottom?: string; paddingLeft?: string; paddingRight?: string; paddingTop?: string; height?: string; width?: string; maxHeight?: string; maxWidth?: string; minHeight?: string; minWidth?: string; border?: string; borderBottom?: string; borderBottomColor?: string; borderBottomStyle?: string; borderBottomWidth?: string; borderColor?: string; borderLeft?: string; borderLeftColor?: string; borderLeftStyle?: string; borderLeftWidth?: string; borderRight?: string; borderRightColor?: string; borderRightStyles?: string; borderRightWidth?: string; borderStyle?: string; borderTop?: string; borderTopColor?: string; borderTopStyle?: string; borderTopWidth?: string; borderWidth?: string; outline?: string; outlineColor?: string; outlineWidth?: string; borderBottomLeftRadius?: string; borderBottomRightRadius?: string; borderImage?: string; borderImageOutset?: string; borderImageRepeat?: string; borderImageSlice?: string; borderImageSource?: string; borderImageWidth?: string; borderRadius?: string; borderTopLeftRadius?: string; borderTopRightRadius?: string; background?: string; backgroundAttachment?: string; backgroundImage?: string; backgroundPosition?: string; backgroundPositionX?: string; backgroundPositionY?: string; backgroundRepeat?: string; backgroundClip?: string; backgroundOrigin?: string; backgroundSize?: string; backgroundBlendMode?: string; colorProfile?: string; opacity?: string; renderingIntent?: string; font?: string; fontFamily?: string; fontSize?: string; fontStyle?: string; fontVariant?: string; fontSizeAdjust?: string; fontStretch?: string; Positioning?: string; bottom?: string; clipPath?: string; left?: string; right?: string; top?: string; zIndex?: string; target?: string; targetName?: string; targetNew?: string; targetPosition?: string; color?: string; direction?: string; letterSpacing?: string; lineHeight?: string; lineBreak?: string; textIndent?: string; unicodeBidi?: string; wordSpacing?: string; textOutline?: string; textShadow?: string; textWrap?: string; wordWrap?: string; listStyle?: string; listStyleImage?: string; listStylePosition?: string; borderCollapse?: string; borderSpacing?: string; emptyCells?: string; marqueeDirection?: string; marqueePlayCount?: string; marqueeSpeed?: string; marqueeStyle?: string; overflowStyle?: string; rotation?: string; boxAlign?: string; boxDirection?: string; boxFlex?: string; boxFlexGroup?: string; boxLines?: string; boxOrdinalGroup?: string; boxOrient?: string; boxPack?: string; alignmentAdjust?: string; alignmentBaseline?: string; baselineShift?: string; dominantBaseline?: string; dropInitialAfterAdjust?: string; dropInitialAfterAlign?: string; dropInitialBeforeAdjust?: string; dropInitialBeforeAlign?: string; dropInitialSize?: string; dropInitialValue?: string; inlineBoxAlign?: string; lineStacking?: string; lineStackingRuby?: string; lineStackingShift?: string; lineStackingStrategy?: string; textHeight?: string; columnFill?: string; columnRule?: string; columnRuleColor?: string; columnRuleStyle?: string; columnRuleWidth?: string; columnSpan?: string; columnWidth?: string; columns?: string; animation?: string; animationName?: string; animationDuration?: string; animationTimingFunction?: string; animationDelay?: string; animationFillMode?: string; animationIterationCount?: string; animationDirection?: string; animationPlayState?: string; transform?: string; transformOrigin?: string; transformStyle?: string; perspective?: string; perspectiveOrigin?: string; backfaceVisibility?: string; transition?: string; transitionDuration?: string; transitionDelay?: string; orphans?: string; pageBreakAfter?: string; pageBreakBefore?: string; pageBreakInside?: string; widows?: string; mark?: string; markAfter?: string; markBefore?: string; phonemes?: string; rest?: string; restAfter?: string; restBefore?: string; voiceBalance?: string; voiceDuration?: string; voicePitch?: string; voicePitchRange?: string; voiceRate?: string; voiceStress?: string; voiceVolume?: string; appearance?: string; icon?: string; navDown?: string; navIndex?: string; navLeft?: string; navRight?: string; navUp?: string; outlineOffset?: string; resize?: string; quotes?: string; rotate?: string; translate?: string; userSelect?: string; writingMode?: string; grid?: string; gridArea?: string; gridAutoColumns?: string; gridAutoFlow?: string; gridAutoRows?: string; gridColumn?: string; gridColumnEnd?: string; gridColumnStart?: string; gridRow?: string; gridRowEnd?: string; gridRowStart?: string; gridTemplate?: string; gridTemplateAreas?: string; gridTemplateColumns?: string; gridTemplateRows?: string; scrollbarColor?: string; scrollbarWidth?: string; scrollbarGutter?: string; }