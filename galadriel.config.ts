//import { Config } from "./types/config";

const config = {
    // content to exclude
    exclude: [
        "node_modules",
        "PatterniaHub",
        "plugins",
        "StyleCrafters",
        "test",
        "types",
        "init-scripts",
        "Watchmanor",
        "build"
    ],
    // content to include
    include: ["./index.ts"],
    // new css rules
    craftStyles: {
        backgroundColor: {
            "some-class-name": "#013598",
            "some-class-name-2": "#964585",
            "another-class-name:hover": "#62aa01"
        },
        display: {
            "some-class-name-3": "flex",
        },
    },
};

module.exports = config;