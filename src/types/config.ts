export type Config = { exclude?: string[]; include?: string[]; craftStyles?: { display?: Record<string, string>; position?: Record<string, string>; float?: Record<string, string>; visibility?: Record<string, string>; clear?: Record<string, string>; overflow?: Record<string, string>; overflowY?: Record<string, string>; overflowX?: Record<string, string>; overflowWrap?: Record<string, string>; whiteSpace?: Record<string, string>; listStyleType?: Record<string, string>; textAlign?: Record<string, string>; verticalAlign?: Record<string, string>; wordBreak?: Record<string, string>; fontWeight?: Record<string, string>; textDecoration?: Record<string, string>; boxSizing?: Record<string, string>; cursor?: Record<string, string>; pointerEvents?: Record<string, string>; outlineStyle?: Record<string, string>; boxShadow?: Record<string, string>; textTransform?: Record<string, string>; transitionProperty?: Record<string, string>; transitionTimingFunction?: Record<string, string>; flexDirection?: Record<string, string>; flexWrap?: Record<string, string>; justifyContent?: Record<string, string>; justifySelf?: Record<string, string>; justifyItems?: Record<string, string>; alignItems?: Record<string, string>; alignSelf?: Record<string, string>; alignContent?: Record<string, string>; textJustify?: Record<string, string>; textOverflow?: Record<string, string>; boxDecorationBreak?: Record<string, string>; tableLayout?: Record<string, string>; captionSide?: Record<string, string>; quote?: Record<string, string>; columnCount?: Record<string, string>; columnGap?: Record<string, string>; aspectRatio?: Record<string, string>; objectPosition?: Record<string, string>; objectFit?: Record<string, string>; graceController?: Record<string, string>; simplifiedButton?: Record<string, string>; simplifiedNavbar?: Record<string, string>; simplifiedFooter?: Record<string, string>; accentColor?: Record<string, string>; backdropFilter?: Record<string, string>; content?: Record<string, string>; gap?: Record<string, string>; rowGap?: Record<string, string>; scale?: Record<string, string>; order?: Record<string, string>; margin?: Record<string, string>; marginBottom?: Record<string, string>; marginLeft?: Record<string, string>; marginRight?: Record<string, string>; marginTop?: Record<string, string>; padding?: Record<string, string>; paddingBottom?: Record<string, string>; paddingLeft?: Record<string, string>; paddingRight?: Record<string, string>; paddingTop?: Record<string, string>; height?: Record<string, string>; width?: Record<string, string>; filter?: Record<string, string>; maxHeight?: Record<string, string>; maxWidth?: Record<string, string>; minHeight?: Record<string, string>; minWidth?: Record<string, string>; border?: Record<string, string>; borderBottom?: Record<string, string>; borderBottomColor?: Record<string, string>; borderBottomStyle?: Record<string, string>; borderBottomWidth?: Record<string, string>; borderColor?: Record<string, string>; borderLeft?: Record<string, string>; borderLeftColor?: Record<string, string>; borderLeftStyle?: Record<string, string>; borderLeftWidth?: Record<string, string>; borderRight?: Record<string, string>; borderRightColor?: Record<string, string>; borderRightStyles?: Record<string, string>; borderRightWidth?: Record<string, string>; borderStyle?: Record<string, string>; borderTop?: Record<string, string>; borderTopColor?: Record<string, string>; borderTopStyle?: Record<string, string>; borderTopWidth?: Record<string, string>; borderWidth?: Record<string, string>; outline?: Record<string, string>; outlineColor?: Record<string, string>; outlineWidth?: Record<string, string>; borderBottomLeftRadius?: Record<string, string>; borderBottomRightRadius?: Record<string, string>; borderImage?: Record<string, string>; borderImageOutset?: Record<string, string>; borderImageRepeat?: Record<string, string>; borderImageSlice?: Record<string, string>; borderImageSource?: Record<string, string>; borderImageWidth?: Record<string, string>; borderRadius?: Record<string, string>; borderTopLeftRadius?: Record<string, string>; borderTopRightRadius?: Record<string, string>; background?: Record<string, string>; backgroundAttachment?: Record<string, string>; backgroundColor?: Record<string, string>; backgroundImage?: Record<string, string>; backgroundPosition?: Record<string, string>; backgroundPositionX?: Record<string, string>; backgroundPositionY?: Record<string, string>; backgroundRepeat?: Record<string, string>; backgroundClip?: Record<string, string>; backgroundOrigin?: Record<string, string>; backgroundSize?: Record<string, string>; backgroundBlendMode?: Record<string, string>; colorProfile?: Record<string, string>; opacity?: Record<string, string>; renderingIntent?: Record<string, string>; font?: Record<string, string>; fontFamily?: Record<string, string>; fontSize?: Record<string, string>; fontStyle?: Record<string, string>; fontVariant?: Record<string, string>; fontSizeAdjust?: Record<string, string>; fontStretch?: Record<string, string>; Positioning?: Record<string, string>; bottom?: Record<string, string>; clipPath?: Record<string, string>; left?: Record<string, string>; right?: Record<string, string>; top?: Record<string, string>; zIndex?: Record<string, string>; target?: Record<string, string>; targetName?: Record<string, string>; targetNew?: Record<string, string>; targetPosition?: Record<string, string>; color?: Record<string, string>; direction?: Record<string, string>; letterSpacing?: Record<string, string>; lineHeight?: Record<string, string>; lineBreak?: Record<string, string>; textIndent?: Record<string, string>; unicodeBidi?: Record<string, string>; wordSpacing?: Record<string, string>; textOutline?: Record<string, string>; textShadow?: Record<string, string>; textWrap?: Record<string, string>; wordWrap?: Record<string, string>; listStyle?: Record<string, string>; listStyleImage?: Record<string, string>; listStylePosition?: Record<string, string>; borderCollapse?: Record<string, string>; borderSpacing?: Record<string, string>; emptyCells?: Record<string, string>; marqueeDirection?: Record<string, string>; marqueePlayCount?: Record<string, string>; marqueeSpeed?: Record<string, string>; marqueeStyle?: Record<string, string>; overflowStyle?: Record<string, string>; rotation?: Record<string, string>; boxAlign?: Record<string, string>; boxDirection?: Record<string, string>; boxFlex?: Record<string, string>; boxFlexGroup?: Record<string, string>; boxLines?: Record<string, string>; boxOrdinalGroup?: Record<string, string>; boxOrient?: Record<string, string>; boxPack?: Record<string, string>; alignmentAdjust?: Record<string, string>; alignmentBaseline?: Record<string, string>; baselineShift?: Record<string, string>; dominantBaseline?: Record<string, string>; dropInitialAfterAdjust?: Record<string, string>; dropInitialAfterAlign?: Record<string, string>; dropInitialBeforeAdjust?: Record<string, string>; dropInitialBeforeAlign?: Record<string, string>; dropInitialSize?: Record<string, string>; dropInitialValue?: Record<string, string>; inlineBoxAlign?: Record<string, string>; lineStacking?: Record<string, string>; lineStackingRuby?: Record<string, string>; lineStackingShift?: Record<string, string>; lineStackingStrategy?: Record<string, string>; textHeight?: Record<string, string>; columnFill?: Record<string, string>; columnRule?: Record<string, string>; columnRuleColor?: Record<string, string>; columnRuleStyle?: Record<string, string>; columnRuleWidth?: Record<string, string>; columnSpan?: Record<string, string>; columnWidth?: Record<string, string>; columns?: Record<string, string>; animation?: Record<string, string>; animationName?: Record<string, string>; animationDuration?: Record<string, string>; animationTimingFunction?: Record<string, string>; animationDelay?: Record<string, string>; animationFillMode?: Record<string, string>; animationIterationCount?: Record<string, string>; animationDirection?: Record<string, string>; animationPlayState?: Record<string, string>; transform?: Record<string, string>; transformOrigin?: Record<string, string>; transformStyle?: Record<string, string>; perspective?: Record<string, string>; perspectiveOrigin?: Record<string, string>; backfaceVisibility?: Record<string, string>; transition?: Record<string, string>; transitionDuration?: Record<string, string>; transitionDelay?: Record<string, string>; orphans?: Record<string, string>; pageBreakAfter?: Record<string, string>; pageBreakBefore?: Record<string, string>; pageBreakInside?: Record<string, string>; widows?: Record<string, string>; mark?: Record<string, string>; markAfter?: Record<string, string>; markBefore?: Record<string, string>; phonemes?: Record<string, string>; rest?: Record<string, string>; restAfter?: Record<string, string>; restBefore?: Record<string, string>; voiceBalance?: Record<string, string>; voiceDuration?: Record<string, string>; voicePitch?: Record<string, string>; voicePitchRange?: Record<string, string>; voiceRate?: Record<string, string>; voiceStress?: Record<string, string>; voiceVolume?: Record<string, string>; appearance?: Record<string, string>; icon?: Record<string, string>; navDown?: Record<string, string>; navIndex?: Record<string, string>; navLeft?: Record<string, string>; navRight?: Record<string, string>; navUp?: Record<string, string>; outlineOffset?: Record<string, string>; resize?: Record<string, string>; quotes?: Record<string, string>; rotate?: Record<string, string>; translate?: Record<string, string>; userSelect?: Record<string, string>; writingMode?: Record<string, string>; grid?: Record<string, string>; gridArea?: Record<string, string>; gridAutoColumns?: Record<string, string>; gridAutoFlow?: Record<string, string>; gridAutoRows?: Record<string, string>; gridColumn?: Record<string, string>; gridColumnEnd?: Record<string, string>; gridColumnStart?: Record<string, string>; gridRow?: Record<string, string>; gridRowEnd?: Record<string, string>; gridRowStart?: Record<string, string>; gridTemplate?: Record<string, string>; gridTemplateAreas?: Record<string, string>; gridTemplateColumns?: Record<string, string>; gridTemplateRows?: Record<string, string>; scrollbarColor?: Record<string, string>; scrollbarWidth?: Record<string, string>; scrollbarGutter?: Record<string, string>; hover?: Record<string, string>; active?: Record<string, string>; focus?: Record<string, string>; firstChild?: Record<string, string>; lastChild?: Record<string, string>; firstOfType?: Record<string, string>; lastOfType?: Record<string, string>; onlyChild?: Record<string, string>; onlyOfType?: Record<string, string>; targetPseudoClass?: Record<string, string>; visited?: Record<string, string>; checked?: Record<string, string>; disabled?: Record<string, string>; enabled?: Record<string, string>; readOnly?: Record<string, string>; readWrite?: Record<string, string>; placeholderShown?: Record<string, string>; valid?: Record<string, string>; invalid?: Record<string, string>; required?: Record<string, string>; optional?: Record<string, string>; fullscreen?: Record<string, string>; focusWithin?: Record<string, string>; firstLine?: Record<string, string>; firstLetter?: Record<string, string>; before?: Record<string, string>; after?: Record<string, string>; outOfRange?: Record<string, string>; root?: Record<string, string>; firstPage?: Record<string, string>; leftPage?: Record<string, string>; rightPage?: Record<string, string>; empty?: Record<string, string>; minLargeDesktops?: Record<string, string>; minStandardDesktops?: Record<string, string>; minPortraitTablets?: Record<string, string>; minLargeSmartphones?: Record<string, string>; minStandardSmartphones?: Record<string, string>; maxLargeDesktops?: Record<string, string>; maxStandardDesktops?: Record<string, string>; maxPortraitTablets?: Record<string, string>; maxLargeSmartphones?: Record<string, string>; maxStandardSmartphones?: Record<string, string>; } }