#!/usr/bin/env node

const yargs = require("yargs");
const { galadrielInit } = require("./init");
const { spectraScribe } = require("../../watchmanor/spectraScribe");

yargs
    .command({
        command: "init",
        describe: "Configure the Galadriel.js environment",
        handler: (_) => {
            galadrielInit();
        },
    })
    .command({
        command: "build",
        describe: "Galadriel.js build process",
        handler: (argv) => {
            const { watch } = argv;

            if (watch) {
                spectraScribe();
            }
        },
        builder: (yargs) => {
            return yargs.option("watch", {
                describe: "Watch Galadriel.js build process",
                type: "boolean",
                default: false,
            });
        },
    });

yargs.parse();
