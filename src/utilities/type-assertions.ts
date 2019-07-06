"use strict";

export function isNull(object: unknown): object is null {

    return object === null;
}

export function isUndefined(object: unknown): object is undefined {

    return typeof object === "undefined";
}

export function isNullOrUndefined(object: unknown): object is null | undefined {

    return isNull(object) || isUndefined(object);
}

export function isObject(object: unknown): object is object {

    return !isNullOrUndefined(object) && (typeof object === "object");
}
