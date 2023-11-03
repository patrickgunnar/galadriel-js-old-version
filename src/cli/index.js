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
        handler: (_) => {
            console.log("Next feature to be implemented!")
        },
    })
    .command({
        command: "dev",
        describe: "Galadriel.js development process",
        handler: (_) => {
            spectraScribe();
        },
    });

yargs.parse();
