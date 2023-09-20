"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractGaladrielClasses = void 0;
var extractGaladrielClasses = function (classes) {
    return Object.keys(classes).map(function (key) { return key.replace(".", ""); });
};
exports.extractGaladrielClasses = extractGaladrielClasses;
