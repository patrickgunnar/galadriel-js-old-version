"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genClassNames_1 = require("./utils/genClassNames");
const craftingStyledElement = (element, callback) => {
    const createdElement = document.createElement(element);
    const classNames = (0, genClassNames_1.genClassNames)(callback());
    if (classNames) {
        createdElement.className = classNames;
    }
    return createdElement;
};
//export { craftingStyledElement };
