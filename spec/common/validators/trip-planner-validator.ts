"use strict";

import { TripPlanner } from "../../../src/interfaces/trip-planner";

export const TripPlannerValidator: TripPlanner = {
    heavyRail: {
        errorCode: "0",
        errorMsg: "success",
        lines: expect.arrayContaining([
            expect.objectContaining({
                ID: expect.any(Number),
                alias: expect.stringMatching(/[A-Z]{3}/),
                nameEN: expect.any(String),
                name: expect.any(String),
                color: expect.stringMatching(/[0-9A-Fa-f]{6}/),
                stationIDs: expect.arrayContaining([
                    expect.any(Number),
                ]),
            } as TripPlanner.HeavyRail.Line),
        ]),
        stations: expect.arrayContaining([
            expect.objectContaining({
                ID: expect.any(Number),
                alias: expect.stringMatching(/[A-Z]{3}/),
                nameEN: expect.any(String),
                name: expect.any(String),
                lineIDs: expect.arrayContaining([
                    expect.any(Number),
                ]),
                coordinate: expect.any(String),
            } as TripPlanner.HeavyRail.Station),
        ]),
    },
    lightRail: {
        errorCode: "0",
        errorMsg: "success",
        lines: expect.arrayContaining([
            expect.objectContaining({
                ID: expect.any(String),
                nameEN: expect.any(String),
                name: expect.any(String),
                color: expect.stringMatching(/[0-9A-Fa-f]{6}/),
                stationIDs: expect.arrayContaining([
                    expect.any(String),
                ]),
            } as TripPlanner.LightRail.Line),
        ]),
        stations: expect.arrayContaining([
            expect.objectContaining({
                ID: expect.any(String),
                nameEN: expect.any(String),
                name: expect.any(String),
                zoneID: expect.any(String),
                lineIDs: expect.arrayContaining([
                    expect.any(String),
                ]),
                coordinate: expect.any(String),
            } as TripPlanner.LightRail.Station),
        ]),
        zones: expect.arrayContaining([
            expect.objectContaining({
                ID: expect.any(String),
                nameEN: expect.any(String),
                name: expect.any(String),
                stationIDs: expect.arrayContaining([
                    expect.any(String),
                ]),
            } as TripPlanner.LightRail.Zone),
        ]),
    },
};
