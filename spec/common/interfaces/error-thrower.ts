"use strict";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ErrorThrower<T = any> {
    error: string | RegExp | jest.Constructable | Error;
    object: T;
}
