"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicStylesObject = void 0;
var coreStaticStyles_1 = require("../coreStaticStyles");
var extractGaladrielClasses_1 = require("./extractGaladrielClasses");
var dynamicStylesObject = function () {
    return Object.keys(coreStaticStyles_1.coreStaticStyles).reduce(function (acc, key) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[key] = coreStaticStyles_1.coreStaticStyles[key]({ extractGaladrielClasses: extractGaladrielClasses_1.extractGaladrielClasses }), _a)));
    }, {});
};
exports.dynamicStylesObject = dynamicStylesObject;
