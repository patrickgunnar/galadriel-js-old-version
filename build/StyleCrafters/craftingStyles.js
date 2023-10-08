"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.craftingStyles = void 0;
const genClassNames_1 = require("./utils/genClassNames");
const craftingStyles = (callback) => {
    return (0, genClassNames_1.genClassNames)(callback());
};
exports.craftingStyles = craftingStyles;
