"use strict";

import { TripPlanner } from "../interfaces/trip-planner";
import { VALID_TRIP_PLANNER } from "../interfaces/trip-planner.spec";

import { getTripPlanner } from "./loader";

describe("Loader", (): void => {

    describe("getTripPlanner", (): void => {

        it("should return trip planner", (done): void => {

            const loader: Promise<TripPlanner> = getTripPlanner();
            expect(loader).resolves.toMatchObject(VALID_TRIP_PLANNER);

            done();
        });
    });
});
