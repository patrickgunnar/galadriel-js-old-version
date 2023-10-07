import { extractClasses } from "../../../plugins/MystiCSSor/scripts/extractClasses";

const babelNode = {
    type: "ObjectExpression",
    start: 312,
    end: 1195,
    loc: {
        start: {
            line: 9,
            column: 11,
            index: 312,
        },
        end: {
            line: 36,
            column: 5,
            index: 1195,
        },
    },
    properties: [
        {
            type: "ObjectProperty",
            start: 322,
            end: 344,
            loc: {
                start: {
                    line: 10,
                    column: 8,
                    index: 322,
                },
                end: {
                    line: 10,
                    column: 30,
                    index: 344,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 322,
                end: 329,
                loc: {
                    start: {
                        line: 10,
                        column: 8,
                        index: 322,
                    },
                    end: {
                        line: 10,
                        column: 15,
                        index: 329,
                    },
                    identifierName: "display",
                },
                name: "display",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "StringLiteral",
                start: 331,
                end: 344,
                loc: {
                    start: {
                        line: 10,
                        column: 17,
                        index: 331,
                    },
                    end: {
                        line: 10,
                        column: 30,
                        index: 344,
                    },
                },
                extra: {
                    rawValue: "$panel-flex",
                    raw: "$panel-flex",
                },
                value: "$panel-flex",
            },
        },
        {
            type: "ObjectProperty",
            start: 354,
            end: 392,
            loc: {
                start: {
                    line: 11,
                    column: 8,
                    index: 354,
                },
                end: {
                    line: 11,
                    column: 46,
                    index: 392,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 354,
                end: 367,
                loc: {
                    start: {
                        line: 11,
                        column: 8,
                        index: 354,
                    },
                    end: {
                        line: 11,
                        column: 21,
                        index: 367,
                    },
                    identifierName: "flexDirection",
                },
                name: "flexDirection",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "StringLiteral",
                start: 369,
                end: 392,
                loc: {
                    start: {
                        line: 11,
                        column: 23,
                        index: 369,
                    },
                    end: {
                        line: 11,
                        column: 46,
                        index: 392,
                    },
                },
                extra: {
                    rawValue: "$flex-orientation-row",
                    raw: "$flex-orientation-row",
                },
                value: "$flex-orientation-row",
            },
        },
        {
            type: "ObjectProperty",
            start: 402,
            end: 443,
            loc: {
                start: {
                    line: 12,
                    column: 8,
                    index: 402,
                },
                end: {
                    line: 12,
                    column: 49,
                    index: 443,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 402,
                end: 416,
                loc: {
                    start: {
                        line: 12,
                        column: 8,
                        index: 402,
                    },
                    end: {
                        line: 12,
                        column: 22,
                        index: 416,
                    },
                    identifierName: "justifyContent",
                },
                name: "justifyContent",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "StringLiteral",
                start: 418,
                end: 443,
                loc: {
                    start: {
                        line: 12,
                        column: 24,
                        index: 418,
                    },
                    end: {
                        line: 12,
                        column: 49,
                        index: 443,
                    },
                },
                extra: {
                    rawValue: "$organize-content-start",
                    raw: "$organize-content-start",
                },
                value: "$organize-content-start",
            },
        },
        {
            type: "ObjectProperty",
            start: 453,
            end: 490,
            loc: {
                start: {
                    line: 13,
                    column: 8,
                    index: 453,
                },
                end: {
                    line: 13,
                    column: 45,
                    index: 490,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 453,
                end: 465,
                loc: {
                    start: {
                        line: 13,
                        column: 8,
                        index: 453,
                    },
                    end: {
                        line: 13,
                        column: 20,
                        index: 465,
                    },
                    identifierName: "alignContent",
                },
                name: "alignContent",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "StringLiteral",
                start: 467,
                end: 490,
                loc: {
                    start: {
                        line: 13,
                        column: 22,
                        index: 467,
                    },
                    end: {
                        line: 13,
                        column: 45,
                        index: 490,
                    },
                },
                extra: {
                    rawValue: "$match-content-center",
                    raw: "$match-content-center",
                },
                value: "$match-content-center",
            },
        },
        {
            type: "ObjectProperty",
            start: 500,
            end: 530,
            loc: {
                start: {
                    line: 14,
                    column: 8,
                    index: 500,
                },
                end: {
                    line: 14,
                    column: 38,
                    index: 530,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 500,
                end: 508,
                loc: {
                    start: {
                        line: 14,
                        column: 8,
                        index: 500,
                    },
                    end: {
                        line: 14,
                        column: 16,
                        index: 508,
                    },
                    identifierName: "flexWrap",
                },
                name: "flexWrap",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "StringLiteral",
                start: 510,
                end: 530,
                loc: {
                    start: {
                        line: 14,
                        column: 18,
                        index: 510,
                    },
                    end: {
                        line: 14,
                        column: 38,
                        index: 530,
                    },
                },
                extra: {
                    rawValue: "$flex-enclose-wrap",
                    raw: "$flex-enclose-wrap",
                },
                value: "$flex-enclose-wrap",
            },
        },
        {
            type: "ObjectProperty",
            start: 540,
            end: 569,
            loc: {
                start: {
                    line: 15,
                    column: 8,
                    index: 540,
                },
                end: {
                    line: 15,
                    column: 37,
                    index: 569,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 540,
                end: 550,
                loc: {
                    start: {
                        line: 15,
                        column: 8,
                        index: 540,
                    },
                    end: {
                        line: 15,
                        column: 18,
                        index: 550,
                    },
                    identifierName: "alignItems",
                },
                name: "alignItems",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "StringLiteral",
                start: 552,
                end: 569,
                loc: {
                    start: {
                        line: 15,
                        column: 20,
                        index: 552,
                    },
                    end: {
                        line: 15,
                        column: 37,
                        index: 569,
                    },
                },
                extra: {
                    rawValue: "$adjust-stretch",
                    raw: "$adjust-stretch",
                },
                value: "$adjust-stretch",
            },
        },
        {
            type: "ObjectProperty",
            start: 579,
            end: 605,
            loc: {
                start: {
                    line: 16,
                    column: 8,
                    index: 579,
                },
                end: {
                    line: 16,
                    column: 34,
                    index: 605,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 579,
                end: 587,
                loc: {
                    start: {
                        line: 16,
                        column: 8,
                        index: 579,
                    },
                    end: {
                        line: 16,
                        column: 16,
                        index: 587,
                    },
                    identifierName: "overflow",
                },
                name: "overflow",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "StringLiteral",
                start: 589,
                end: 605,
                loc: {
                    start: {
                        line: 16,
                        column: 18,
                        index: 589,
                    },
                    end: {
                        line: 16,
                        column: 34,
                        index: 605,
                    },
                },
                extra: {
                    rawValue: "$excess-hidden",
                    raw: "$excess-hidden",
                },
                value: "$excess-hidden",
            },
        },
        {
            type: "ObjectProperty",
            start: 615,
            end: 630,
            loc: {
                start: {
                    line: 17,
                    column: 8,
                    index: 615,
                },
                end: {
                    line: 17,
                    column: 23,
                    index: 630,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 615,
                end: 621,
                loc: {
                    start: {
                        line: 17,
                        column: 8,
                        index: 615,
                    },
                    end: {
                        line: 17,
                        column: 14,
                        index: 621,
                    },
                    identifierName: "height",
                },
                name: "height",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "StringLiteral",
                start: 623,
                end: 630,
                loc: {
                    start: {
                        line: 17,
                        column: 16,
                        index: 623,
                    },
                    end: {
                        line: 17,
                        column: 23,
                        index: 630,
                    },
                },
                extra: {
                    rawValue: "100vh",
                    raw: "100vh",
                },
                value: "100vh",
            },
        },
        {
            type: "ObjectProperty",
            start: 640,
            end: 661,
            loc: {
                start: {
                    line: 18,
                    column: 8,
                    index: 640,
                },
                end: {
                    line: 18,
                    column: 29,
                    index: 661,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 640,
                end: 650,
                loc: {
                    start: {
                        line: 18,
                        column: 8,
                        index: 640,
                    },
                    end: {
                        line: 18,
                        column: 18,
                        index: 650,
                    },
                    identifierName: "background",
                },
                name: "background",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "StringLiteral",
                start: 652,
                end: 661,
                loc: {
                    start: {
                        line: 18,
                        column: 20,
                        index: 652,
                    },
                    end: {
                        line: 18,
                        column: 29,
                        index: 661,
                    },
                },
                extra: {
                    rawValue: "#00ffcc",
                    raw: "#00ffcc",
                },
                value: "#00ffcc",
            },
        },
        {
            type: "ObjectProperty",
            start: 671,
            end: 700,
            loc: {
                start: {
                    line: 19,
                    column: 8,
                    index: 671,
                },
                end: {
                    line: 19,
                    column: 37,
                    index: 700,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 671,
                end: 680,
                loc: {
                    start: {
                        line: 19,
                        column: 8,
                        index: 671,
                    },
                    end: {
                        line: 19,
                        column: 17,
                        index: 680,
                    },
                    identifierName: "overflowY",
                },
                name: "overflowY",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "StringLiteral",
                start: 682,
                end: 700,
                loc: {
                    start: {
                        line: 19,
                        column: 19,
                        index: 682,
                    },
                    end: {
                        line: 19,
                        column: 37,
                        index: 700,
                    },
                },
                extra: {
                    rawValue: "$excess-y-scroll",
                    raw: "$excess-y-scroll",
                },
                value: "$excess-y-scroll",
            },
        },
        {
            type: "ObjectProperty",
            start: 710,
            end: 812,
            loc: {
                start: {
                    line: 20,
                    column: 8,
                    index: 710,
                },
                end: {
                    line: 23,
                    column: 9,
                    index: 812,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 710,
                end: 715,
                loc: {
                    start: {
                        line: 20,
                        column: 8,
                        index: 710,
                    },
                    end: {
                        line: 20,
                        column: 13,
                        index: 715,
                    },
                    identifierName: "hover",
                },
                name: "hover",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "ObjectExpression",
                start: 717,
                end: 812,
                loc: {
                    start: {
                        line: 20,
                        column: 15,
                        index: 717,
                    },
                    end: {
                        line: 23,
                        column: 9,
                        index: 812,
                    },
                },
                properties: [
                    {
                        type: "ObjectProperty",
                        start: 731,
                        end: 752,
                        loc: {
                            start: {
                                line: 21,
                                column: 12,
                                index: 731,
                            },
                            end: {
                                line: 21,
                                column: 33,
                                index: 752,
                            },
                        },
                        method: false,
                        key: {
                            type: "Identifier",
                            start: 731,
                            end: 741,
                            loc: {
                                start: {
                                    line: 21,
                                    column: 12,
                                    index: 731,
                                },
                                end: {
                                    line: 21,
                                    column: 22,
                                    index: 741,
                                },
                                identifierName: "background",
                            },
                            name: "background",
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                            type: "StringLiteral",
                            start: 743,
                            end: 752,
                            loc: {
                                start: {
                                    line: 21,
                                    column: 24,
                                    index: 743,
                                },
                                end: {
                                    line: 21,
                                    column: 33,
                                    index: 752,
                                },
                            },
                            extra: {
                                rawValue: "#bb00aa",
                                raw: "#bb00aa",
                            },
                            value: "#bb00aa",
                        },
                    },
                    {
                        type: "ObjectProperty",
                        start: 766,
                        end: 801,
                        loc: {
                            start: {
                                line: 22,
                                column: 12,
                                index: 766,
                            },
                            end: {
                                line: 22,
                                column: 47,
                                index: 801,
                            },
                        },
                        method: false,
                        key: {
                            type: "Identifier",
                            start: 766,
                            end: 781,
                            loc: {
                                start: {
                                    line: 22,
                                    column: 12,
                                    index: 766,
                                },
                                end: {
                                    line: 22,
                                    column: 27,
                                    index: 781,
                                },
                                identifierName: "backgroundColor",
                            },
                            name: "backgroundColor",
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                            type: "StringLiteral",
                            start: 783,
                            end: 801,
                            loc: {
                                start: {
                                    line: 22,
                                    column: 29,
                                    index: 783,
                                },
                                end: {
                                    line: 22,
                                    column: 47,
                                    index: 801,
                                },
                            },
                            extra: {
                                rawValue: "$some-class-name",
                                raw: "$some-class-name",
                            },
                            value: "$some-class-name",
                        },
                    },
                ],
                extra: {
                    trailingComma: 801,
                },
            },
        },
        {
            type: "ObjectProperty",
            start: 822,
            end: 923,
            loc: {
                start: {
                    line: 24,
                    column: 8,
                    index: 822,
                },
                end: {
                    line: 27,
                    column: 9,
                    index: 923,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 822,
                end: 828,
                loc: {
                    start: {
                        line: 24,
                        column: 8,
                        index: 822,
                    },
                    end: {
                        line: 24,
                        column: 14,
                        index: 828,
                    },
                    identifierName: "active",
                },
                name: "active",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "ObjectExpression",
                start: 830,
                end: 923,
                loc: {
                    start: {
                        line: 24,
                        column: 16,
                        index: 830,
                    },
                    end: {
                        line: 27,
                        column: 9,
                        index: 923,
                    },
                },
                properties: [
                    {
                        type: "ObjectProperty",
                        start: 844,
                        end: 870,
                        loc: {
                            start: {
                                line: 25,
                                column: 12,
                                index: 844,
                            },
                            end: {
                                line: 25,
                                column: 38,
                                index: 870,
                            },
                        },
                        method: false,
                        key: {
                            type: "Identifier",
                            start: 844,
                            end: 859,
                            loc: {
                                start: {
                                    line: 25,
                                    column: 12,
                                    index: 844,
                                },
                                end: {
                                    line: 25,
                                    column: 27,
                                    index: 859,
                                },
                                identifierName: "backgroundColor",
                            },
                            name: "backgroundColor",
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                            type: "StringLiteral",
                            start: 861,
                            end: 870,
                            loc: {
                                start: {
                                    line: 25,
                                    column: 29,
                                    index: 861,
                                },
                                end: {
                                    line: 25,
                                    column: 38,
                                    index: 870,
                                },
                            },
                            extra: {
                                rawValue: "#FCFF33",
                                raw: "#FCFF33",
                            },
                            value: "#FCFF33",
                        },
                    },
                    {
                        type: "ObjectProperty",
                        start: 884,
                        end: 912,
                        loc: {
                            start: {
                                line: 26,
                                column: 12,
                                index: 884,
                            },
                            end: {
                                line: 26,
                                column: 40,
                                index: 912,
                            },
                        },
                        method: false,
                        key: {
                            type: "Identifier",
                            start: 884,
                            end: 894,
                            loc: {
                                start: {
                                    line: 26,
                                    column: 12,
                                    index: 884,
                                },
                                end: {
                                    line: 26,
                                    column: 22,
                                    index: 894,
                                },
                                identifierName: "alignItems",
                            },
                            name: "alignItems",
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                            type: "StringLiteral",
                            start: 896,
                            end: 912,
                            loc: {
                                start: {
                                    line: 26,
                                    column: 24,
                                    index: 896,
                                },
                                end: {
                                    line: 26,
                                    column: 40,
                                    index: 912,
                                },
                            },
                            extra: {
                                rawValue: "$adjust-center",
                                raw: "$adjust-center",
                            },
                            value: "$adjust-center",
                        },
                    },
                ],
                extra: {
                    trailingComma: 912,
                },
            },
        },
        {
            type: "ObjectProperty",
            start: 933,
            end: 1053,
            loc: {
                start: {
                    line: 28,
                    column: 8,
                    index: 933,
                },
                end: {
                    line: 31,
                    column: 9,
                    index: 1053,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 933,
                end: 949,
                loc: {
                    start: {
                        line: 28,
                        column: 8,
                        index: 933,
                    },
                    end: {
                        line: 28,
                        column: 24,
                        index: 949,
                    },
                    identifierName: "minLargeDesktops",
                },
                name: "minLargeDesktops",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "ObjectExpression",
                start: 951,
                end: 1053,
                loc: {
                    start: {
                        line: 28,
                        column: 26,
                        index: 951,
                    },
                    end: {
                        line: 31,
                        column: 9,
                        index: 1053,
                    },
                },
                properties: [
                    {
                        type: "ObjectProperty",
                        start: 965,
                        end: 986,
                        loc: {
                            start: {
                                line: 29,
                                column: 12,
                                index: 965,
                            },
                            end: {
                                line: 29,
                                column: 33,
                                index: 986,
                            },
                        },
                        method: false,
                        key: {
                            type: "Identifier",
                            start: 965,
                            end: 975,
                            loc: {
                                start: {
                                    line: 29,
                                    column: 12,
                                    index: 965,
                                },
                                end: {
                                    line: 29,
                                    column: 22,
                                    index: 975,
                                },
                                identifierName: "background",
                            },
                            name: "background",
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                            type: "StringLiteral",
                            start: 977,
                            end: 986,
                            loc: {
                                start: {
                                    line: 29,
                                    column: 24,
                                    index: 977,
                                },
                                end: {
                                    line: 29,
                                    column: 33,
                                    index: 986,
                                },
                            },
                            extra: {
                                rawValue: "#99FF33",
                                raw: "#99FF33",
                            },
                            value: "#99FF33",
                        },
                    },
                    {
                        type: "ObjectProperty",
                        start: 1000,
                        end: 1042,
                        loc: {
                            start: {
                                line: 30,
                                column: 12,
                                index: 1000,
                            },
                            end: {
                                line: 30,
                                column: 54,
                                index: 1042,
                            },
                        },
                        method: false,
                        key: {
                            type: "Identifier",
                            start: 1000,
                            end: 1014,
                            loc: {
                                start: {
                                    line: 30,
                                    column: 12,
                                    index: 1000,
                                },
                                end: {
                                    line: 30,
                                    column: 26,
                                    index: 1014,
                                },
                                identifierName: "justifyContent",
                            },
                            name: "justifyContent",
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                            type: "StringLiteral",
                            start: 1016,
                            end: 1042,
                            loc: {
                                start: {
                                    line: 30,
                                    column: 28,
                                    index: 1016,
                                },
                                end: {
                                    line: 30,
                                    column: 54,
                                    index: 1042,
                                },
                            },
                            extra: {
                                rawValue: "$organize-content-center",
                                raw: "$organize-content-center",
                            },
                            value: "$organize-content-center",
                        },
                    },
                ],
                extra: {
                    trailingComma: 1042,
                },
            },
        },
        {
            type: "ObjectProperty",
            start: 1063,
            end: 1188,
            loc: {
                start: {
                    line: 32,
                    column: 8,
                    index: 1063,
                },
                end: {
                    line: 35,
                    column: 9,
                    index: 1188,
                },
            },
            method: false,
            key: {
                type: "Identifier",
                start: 1063,
                end: 1085,
                loc: {
                    start: {
                        line: 32,
                        column: 8,
                        index: 1063,
                    },
                    end: {
                        line: 32,
                        column: 30,
                        index: 1085,
                    },
                    identifierName: "maxStandardSmartphones",
                },
                name: "maxStandardSmartphones",
            },
            computed: false,
            shorthand: false,
            value: {
                type: "ObjectExpression",
                start: 1087,
                end: 1188,
                loc: {
                    start: {
                        line: 32,
                        column: 32,
                        index: 1087,
                    },
                    end: {
                        line: 35,
                        column: 9,
                        index: 1188,
                    },
                },
                properties: [
                    {
                        type: "ObjectProperty",
                        start: 1101,
                        end: 1122,
                        loc: {
                            start: {
                                line: 33,
                                column: 12,
                                index: 1101,
                            },
                            end: {
                                line: 33,
                                column: 33,
                                index: 1122,
                            },
                        },
                        method: false,
                        key: {
                            type: "Identifier",
                            start: 1101,
                            end: 1111,
                            loc: {
                                start: {
                                    line: 33,
                                    column: 12,
                                    index: 1101,
                                },
                                end: {
                                    line: 33,
                                    column: 22,
                                    index: 1111,
                                },
                                identifierName: "background",
                            },
                            name: "background",
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                            type: "StringLiteral",
                            start: 1113,
                            end: 1122,
                            loc: {
                                start: {
                                    line: 33,
                                    column: 24,
                                    index: 1113,
                                },
                                end: {
                                    line: 33,
                                    column: 33,
                                    index: 1122,
                                },
                            },
                            extra: {
                                rawValue: "#998475",
                                raw: "#998475",
                            },
                            value: "#998475",
                        },
                    },
                    {
                        type: "ObjectProperty",
                        start: 1136,
                        end: 1177,
                        loc: {
                            start: {
                                line: 34,
                                column: 12,
                                index: 1136,
                            },
                            end: {
                                line: 34,
                                column: 53,
                                index: 1177,
                            },
                        },
                        method: false,
                        key: {
                            type: "Identifier",
                            start: 1136,
                            end: 1149,
                            loc: {
                                start: {
                                    line: 34,
                                    column: 12,
                                    index: 1136,
                                },
                                end: {
                                    line: 34,
                                    column: 25,
                                    index: 1149,
                                },
                                identifierName: "flexDirection",
                            },
                            name: "flexDirection",
                        },
                        computed: false,
                        shorthand: false,
                        value: {
                            type: "StringLiteral",
                            start: 1151,
                            end: 1177,
                            loc: {
                                start: {
                                    line: 34,
                                    column: 27,
                                    index: 1151,
                                },
                                end: {
                                    line: 34,
                                    column: 53,
                                    index: 1177,
                                },
                            },
                            extra: {
                                rawValue: "$flex-orientation-column",
                                raw: "$flex-orientation-column",
                            },
                            value: "$flex-orientation-column",
                        },
                    },
                ],
                extra: {
                    trailingComma: 1177,
                },
            },
        },
    ],
    extra: {
        trailingComma: 1188,
    },
};

describe("Verify the extractClasses function", () => {
    test("Check if a string with CSS classes are being returned", () => {
        const classes = extractClasses(babelNode as any);

        expect(classes).toBe(".panel-flex { display: flex; }  .flex-orientation-row { flex-direction: row; }  .organize-content-start { justify-content: start; }  .match-content-center { align-content: center; }  .flex-enclose-wrap { flex-wrap: wrap; }  .adjust-stretch { align-items: stretch; }  .excess-hidden { overflow: hidden; }  .galadriel_b29224cc { height: 100vh; } .galadriel_390df163 { background: #00ffcc; } .excess-y-scroll { overflow-y: scroll; }  .galadriel_a1caa531:hover { background:#bb00aa;background-color:#013598 } .galadriel_380656c8:active { background-color:#FCFF33;align-items:center } @media screen and (min-width: 1200px) { .galadriel_7f285399 { background:#99FF33;justify-content:center } } @media screen and (max-width: 425px) { .galadriel_549dc0e9 { background:#998475;flex-direction:column } }")
    });
});
