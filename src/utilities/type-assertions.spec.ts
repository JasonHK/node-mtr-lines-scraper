"use strict";

import { SAMPLE_RAILWAY_OBJECT } from "../interfaces/railway-object.spec";
import { SAMPLE_TRIP_PLANNER } from "../interfaces/trip-planner.spec";

import { 
    isHeavyRailObject, isHeavyRailTripPlanner,
    isLightRailObject, isLightRailTripPlanner,
    isRailwayObject, isTripPlanner,
} from "./type-assertions";

describe("isHeavyRailObject()", (): void => {

    const assertion = isHeavyRailObject;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(SAMPLE_RAILWAY_OBJECT.heavyRail)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(SAMPLE_RAILWAY_OBJECT)).toBe(RETURN);
        expect(assertion(SAMPLE_RAILWAY_OBJECT.lightRail)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER.heavyRail)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER.lightRail)).toBe(RETURN);

        done();
    });
});

describe("isHeavyRailTripPlanner()", (): void => {

    const assertion = isHeavyRailTripPlanner;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(SAMPLE_TRIP_PLANNER.heavyRail)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(SAMPLE_RAILWAY_OBJECT)).toBe(RETURN);
        expect(assertion(SAMPLE_RAILWAY_OBJECT.heavyRail)).toBe(RETURN);
        expect(assertion(SAMPLE_RAILWAY_OBJECT.lightRail)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER.lightRail)).toBe(RETURN);

        done();
    });
});

describe("isLightRailObject()", (): void => {

    const assertion = isLightRailObject;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(SAMPLE_RAILWAY_OBJECT.lightRail)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(SAMPLE_RAILWAY_OBJECT)).toBe(RETURN);
        expect(assertion(SAMPLE_RAILWAY_OBJECT.heavyRail)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER.heavyRail)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER.lightRail)).toBe(RETURN);

        done();
    });
});

describe("isLightRailTripPlanner()", (): void => {

    const assertion = isLightRailTripPlanner;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(SAMPLE_TRIP_PLANNER.lightRail)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(SAMPLE_RAILWAY_OBJECT)).toBe(RETURN);
        expect(assertion(SAMPLE_RAILWAY_OBJECT.heavyRail)).toBe(RETURN);
        expect(assertion(SAMPLE_RAILWAY_OBJECT.lightRail)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER.heavyRail)).toBe(RETURN);

        done();
    });
});

describe("isRailwayObject()", (): void => {

    const assertion = isRailwayObject;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(SAMPLE_RAILWAY_OBJECT)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(SAMPLE_RAILWAY_OBJECT.heavyRail)).toBe(RETURN);
        expect(assertion(SAMPLE_RAILWAY_OBJECT.lightRail)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER.heavyRail)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER.lightRail)).toBe(RETURN);

        done();
    });
});

describe("isTripPlanner()", (): void => {

    const assertion = isTripPlanner;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(SAMPLE_TRIP_PLANNER)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(SAMPLE_RAILWAY_OBJECT)).toBe(RETURN);
        expect(assertion(SAMPLE_RAILWAY_OBJECT.heavyRail)).toBe(RETURN);
        expect(assertion(SAMPLE_RAILWAY_OBJECT.lightRail)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER.heavyRail)).toBe(RETURN);
        expect(assertion(SAMPLE_TRIP_PLANNER.lightRail)).toBe(RETURN);

        done();
    });
});
