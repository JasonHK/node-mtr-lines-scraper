"use strict";

import { mocked } from "ts-jest/utils";

import { getTripPlanner } from "../../src/core/get-trip-planner";
import { getRailwayDetails } from "../../src/core/get-railway-details";

import { RailwayDetailsValidator } from "../common/validators/railway-details-validator";

import { TripPlannerSample } from "../common/samples/trip-planner-sample";

jest.mock("../../src/core/get-trip-planner");

describe("getRailwayDetails()", (): void => {

    mocked(getTripPlanner).mockResolvedValue(TripPlannerSample);

    it("should return railway details", async (): Promise<void> => {

        expect(await getRailwayDetails()).toMatchObject(RailwayDetailsValidator);
        expect(await getRailwayDetails(TripPlannerSample)).toMatchObject(RailwayDetailsValidator);
    });
});
