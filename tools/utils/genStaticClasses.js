"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genStaticClasses = void 0;
var coreStaticStyles_1 = require("../coreStaticStyles");
var extractGaladrielClasses = function (classes) {
    return classes;
};
var genStaticClasses = function () {
    return Object.keys(coreStaticStyles_1.coreStaticStyles)
        .map(function (key) {
        return Object.entries(coreStaticStyles_1.coreStaticStyles[key]({ extractGaladrielClasses: extractGaladrielClasses }));
    })
        .map(function (entries) {
        return entries
            .map(function (_a) {
            var selector = _a[0], properties = _a[1];
            return "".concat(selector, " { ").concat(Object.entries(properties)
                .map(function (_a) {
                var prop = _a[0], value = _a[1];
                return "".concat(prop, ": ").concat(value, ";");
            })
                .join(" "), " }");
        })
            .join(" ");
    })
        .join(" ");
};
exports.genStaticClasses = genStaticClasses;
