"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genGaladrielTypes = void 0;
var genGaladrielTypes = function (params) {
    var definitionTypes = [];
    var definitionInterfaces = ["export interface CreateClassesType {"];
    for (var key in params) {
        var currentDef = [];
        var currentOptions = params[key]
            .map(function (option) { return "'".concat(option, "'"); })
            .join(" | ");
        currentDef.push("/**\n * Options to ".concat(key, ":\n * ").concat(params[key].join(", "), "\n */\n"));
        currentDef.push("type ".concat(key, " = ").concat(currentOptions, ";\n\n"));
        definitionInterfaces.push("".concat(key, "?: ").concat(key, "; "));
        definitionTypes.push(currentDef.join(" "));
    }
    definitionInterfaces.push("}");
    definitionTypes.push(definitionInterfaces.join(" "));
    return definitionTypes.join(" ");
};
exports.genGaladrielTypes = genGaladrielTypes;
