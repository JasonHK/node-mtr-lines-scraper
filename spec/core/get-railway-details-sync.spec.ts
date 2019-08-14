"use strict";

import { getRailwayDetailsSync } from "../../src/core/get-railway-details-sync";

import { RailwayDetailsValidator } from "../common/validators/railway-details-validator";

import { TripPlannerSample } from "../common/samples/trip-planner-sample";

describe("getRailwayDetailsSync()", (): void => {

    it("should return railway details", (): void => {

        expect(getRailwayDetailsSync(TripPlannerSample)).toMatchObject(RailwayDetailsValidator);
    });
});
