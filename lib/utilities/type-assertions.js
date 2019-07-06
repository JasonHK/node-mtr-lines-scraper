"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNull(object) {
    return object === null;
}
exports.isNull = isNull;
function isUndefined(object) {
    return typeof object === "undefined";
}
exports.isUndefined = isUndefined;
function isNullOrUndefined(object) {
    return isNull(object) || isUndefined(object);
}
exports.isNullOrUndefined = isNullOrUndefined;
function isObject(object) {
    return !isNullOrUndefined(object) && (typeof object === "object");
}
exports.isObject = isObject;
