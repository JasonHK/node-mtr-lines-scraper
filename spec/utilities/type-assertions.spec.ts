"use strict";

import {
    isHeavyRailObject, isHeavyRailTripPlanner,
    isLightRailObject, isLightRailTripPlanner,
    isRailwayObject, isTripPlanner,
} from "../../src/utilities/type-assertions";

import { RailwayObjectSample } from "../common/samples/railway-object-sample";
import { TripPlannerSample } from "../common/samples/trip-planner-sample";

describe("isHeavyRailObject()", (): void => {

    const assertion = isHeavyRailObject;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(RailwayObjectSample.heavyRail)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(RailwayObjectSample)).toBe(RETURN);
        expect(assertion(RailwayObjectSample.lightRail)).toBe(RETURN);
        expect(assertion(TripPlannerSample)).toBe(RETURN);
        expect(assertion(TripPlannerSample.heavyRail)).toBe(RETURN);
        expect(assertion(TripPlannerSample.lightRail)).toBe(RETURN);

        done();
    });
});

describe("isHeavyRailTripPlanner()", (): void => {

    const assertion = isHeavyRailTripPlanner;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(TripPlannerSample.heavyRail)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(RailwayObjectSample)).toBe(RETURN);
        expect(assertion(RailwayObjectSample.heavyRail)).toBe(RETURN);
        expect(assertion(RailwayObjectSample.lightRail)).toBe(RETURN);
        expect(assertion(TripPlannerSample)).toBe(RETURN);
        expect(assertion(TripPlannerSample.lightRail)).toBe(RETURN);

        done();
    });
});

describe("isLightRailObject()", (): void => {

    const assertion = isLightRailObject;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(RailwayObjectSample.lightRail)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(RailwayObjectSample)).toBe(RETURN);
        expect(assertion(RailwayObjectSample.heavyRail)).toBe(RETURN);
        expect(assertion(TripPlannerSample)).toBe(RETURN);
        expect(assertion(TripPlannerSample.heavyRail)).toBe(RETURN);
        expect(assertion(TripPlannerSample.lightRail)).toBe(RETURN);

        done();
    });
});

describe("isLightRailTripPlanner()", (): void => {

    const assertion = isLightRailTripPlanner;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(TripPlannerSample.lightRail)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(RailwayObjectSample)).toBe(RETURN);
        expect(assertion(RailwayObjectSample.heavyRail)).toBe(RETURN);
        expect(assertion(RailwayObjectSample.lightRail)).toBe(RETURN);
        expect(assertion(TripPlannerSample)).toBe(RETURN);
        expect(assertion(TripPlannerSample.heavyRail)).toBe(RETURN);

        done();
    });
});

describe("isRailwayObject()", (): void => {

    const assertion = isRailwayObject;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(RailwayObjectSample)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(RailwayObjectSample.heavyRail)).toBe(RETURN);
        expect(assertion(RailwayObjectSample.lightRail)).toBe(RETURN);
        expect(assertion(TripPlannerSample)).toBe(RETURN);
        expect(assertion(TripPlannerSample.heavyRail)).toBe(RETURN);
        expect(assertion(TripPlannerSample.lightRail)).toBe(RETURN);

        done();
    });
});

describe("isTripPlanner()", (): void => {

    const assertion = isTripPlanner;

    it("should be true", (done): void => {

        const RETURN = true;
        expect(assertion(TripPlannerSample)).toBe(RETURN);

        done();
    });

    it("should be false", (done): void => {

        const RETURN = false;
        expect(assertion(RailwayObjectSample)).toBe(RETURN);
        expect(assertion(RailwayObjectSample.heavyRail)).toBe(RETURN);
        expect(assertion(RailwayObjectSample.lightRail)).toBe(RETURN);
        expect(assertion(TripPlannerSample.heavyRail)).toBe(RETURN);
        expect(assertion(TripPlannerSample.lightRail)).toBe(RETURN);

        done();
    });
});
