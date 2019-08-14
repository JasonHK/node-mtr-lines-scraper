"use strict";

import { TripPlanner } from "../../src/interfaces/trip-planner";

import { getTripPlanner } from "../../src/core/get-trip-planner";

import { TripPlannerValidator } from "../common/validators/trip-planner-validator";

describe("Loader", (): void => {

    describe("getTripPlanner()", (): void => {

        it("should return trip planner", async (): Promise<void> => {

            const planner: TripPlanner = await getTripPlanner();
            expect(planner).toMatchObject(TripPlannerValidator);
        });
    });
});
