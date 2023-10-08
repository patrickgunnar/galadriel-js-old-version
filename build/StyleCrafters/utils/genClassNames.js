"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genClassNames = void 0;
const genClassNames = (classes) => {
    const classNames = Object.values(classes).map((cls) => {
        if (typeof cls === "string")
            return cls;
        else if (typeof cls === "object") {
            return Object.values(cls)[0];
        }
    });
    return classNames.join(" ");
};
exports.genClassNames = genClassNames;
