"use strict";

import { LineNotFoundError } from "../../../../src/errors/line-not-found-error";
import { StationNotFoundError } from "../../../../src/errors/station-not-found-error";

import { TripPlanner } from "../../../../src/interfaces/trip-planner";

import { ErrorThrowers } from "../../interfaces/error-throwers";

export const TripPlannerErrors: ErrorThrowers<TripPlanner.HeavyRail> = [
    {
        error: StationNotFoundError,
        object: {
            errorCode: "0",
            errorMsg: "success",
            lines: [
                {
                    ID: 1,
                    alias: "TOL",
                    nameEN: "Test Only Line",
                    name: "測試線",
                    color: "689777",
                    stationIDs: [1, 2, 3],
                },
            ],
            stations: [
                {
                    ID: 1,
                    alias: "TOS",
                    nameEN: "Test Only Station",
                    name: "測試站",
                    coordinate: "22.3,114.1",
                    lineIDs: [1],
                }, {
                    ID: 2,
                    alias: "ATS",
                    nameEN: "Another Test Station",
                    name: "另一個測試站",
                    coordinate: "22.3,114.1",
                    lineIDs: [1],
                },
            ],
        },
    }, {
        error: LineNotFoundError,
        object: {
            errorCode: "0",
            errorMsg: "success",
            lines: [
                {
                    ID: 1,
                    alias: "TOL",
                    nameEN: "Test Only Line",
                    name: "測試線",
                    color: "689777",
                    stationIDs: [1, 2],
                },
            ],
            stations: [
                {
                    ID: 1,
                    alias: "TOS",
                    nameEN: "Test Only Station",
                    name: "測試站",
                    coordinate: "22.3,114.1",
                    lineIDs: [1],
                }, {
                    ID: 2,
                    alias: "ATS",
                    nameEN: "Another Test Station",
                    name: "另一個測試站",
                    coordinate: "22.3,114.1",
                    lineIDs: [1, 2],
                },
            ],
        },
    },
];
