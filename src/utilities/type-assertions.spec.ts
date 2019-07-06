"use strict";

import { isNull, isNullOrUndefined, isObject, isUndefined } from "./type-assertions";

describe("TypeAssertions", (): void => {

    const ARRAY: unknown[] = [];
    const NULL = null;
    const OBJECT = {};
    const UNDEFINED = undefined;

    describe("isNull", (): void => {

        const assertion = isNull;

        it("should be true", (done): void => {

            const RETURN = true;
            expect(assertion(NULL)).toBe(RETURN);

            done();
        });

        it("should be false", (done): void => {

            const RETURN = false;
            expect(assertion(ARRAY)).toBe(RETURN);
            expect(assertion(OBJECT)).toBe(RETURN);
            expect(assertion(UNDEFINED)).toBe(RETURN);

            done();
        });
    });

    describe("isNullOrUndefined", (): void => {

        const assertion = isNullOrUndefined;

        it("should be true", (done): void => {

            const RETURN = true;
            expect(assertion(NULL)).toBe(RETURN);
            expect(assertion(undefined)).toBe(RETURN);

            done();
        });

        it("should be false", (done): void => {

            const RETURN = false;
            expect(assertion(ARRAY)).toBe(RETURN);
            expect(assertion(OBJECT)).toBe(RETURN);

            done();
        });
    });

    describe("isObject", (): void => {

        const assertion = isObject;

        it("should be true", (done): void => {

            const RETURN = true;
            expect(assertion(ARRAY)).toBe(RETURN);
            expect(assertion(OBJECT)).toBe(RETURN);

            done();
        });

        it("should be false", (done): void => {

            const RETURN = false;
            expect(assertion(NULL)).toBe(RETURN);
            expect(assertion(UNDEFINED)).toBe(RETURN);

            done();
        });
    });

    describe("isUndefined", (): void => {

        const assertion = isUndefined;

        it("should be true", (done): void => {

            const RETURN = true;
            expect(assertion(UNDEFINED)).toBe(RETURN);

            done();
        });

        it("should be false", (done): void => {

            const RETURN = false;
            expect(assertion(ARRAY)).toBe(RETURN);
            expect(assertion(NULL)).toBe(RETURN);
            expect(assertion(OBJECT)).toBe(RETURN);

            done();
        });
    });
});
