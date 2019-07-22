"use strict";

import { mocked } from "ts-jest/utils";

import { VALID_RAILWAY_DETAILS } from "../interfaces/railway-details.spec";
import { SAMPLE_TRIP_PLANNER } from "../interfaces/trip-planner.spec";

import { getTripPlanner } from "./loader";
import { getRailwayDetails, getRailwayDetailsSync } from "./parser";

jest.mock("./loader");

describe("Parser", (): void => {

    mocked(getTripPlanner).mockResolvedValue(SAMPLE_TRIP_PLANNER);

    describe("getRailwayDetails()", (): void => {

        it("should return railway details", (done): void => {

            expect(getRailwayDetails()).resolves.toMatchObject(VALID_RAILWAY_DETAILS);
            expect(getRailwayDetails(SAMPLE_TRIP_PLANNER)).resolves.toMatchObject(VALID_RAILWAY_DETAILS);

            done();
        });
    });

    describe("getRailwayDetailsSync()", (): void => {

        it("should return railway details", (done): void => {

            expect(getRailwayDetailsSync(SAMPLE_TRIP_PLANNER)).toMatchObject(VALID_RAILWAY_DETAILS);

            done();
        });
    });
});
