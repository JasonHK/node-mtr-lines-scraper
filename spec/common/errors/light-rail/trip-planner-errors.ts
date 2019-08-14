"use strict";

import { LineNotFoundError } from "../../../../src/errors/line-not-found-error";
import { StationNotFoundError } from "../../../../src/errors/station-not-found-error";
import { ZoneNotFoundError } from "../../../../src/errors/zone-not-found-error";

import { TripPlanner } from "../../../../src/interfaces/trip-planner";

import { ErrorThrowers } from "../../interfaces/error-throwers";

export const TripPlannerErrors: ErrorThrowers<TripPlanner.LightRail> = [
    {
        error: StationNotFoundError,
        object: {
            errorCode: "0",
            errorMsg: "success",
            lines: [
                {
                    ID: "1",
                    nameEN: "Test Only Line",
                    name: "測試線",
                    color: "689777",
                    stationIDs: ["1", "2", "3"],
                },
            ],
            stations: [
                {
                    ID: "1",
                    nameEN: "Test Only Station",
                    name: "測試站",
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                }, {
                    ID: "2",
                    nameEN: "Another Test Station",
                    name: "另一個測試站",
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                },
            ],
            zones: [
                {
                    ID: "1",
                    nameEN: "Zone 1",
                    name: "1區",
                    stationIDs: ["1", "2"],
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
                    ID: "1",
                    nameEN: "Test Only Line",
                    name: "測試線",
                    color: "689777",
                    stationIDs: ["1", "2"],
                },
            ],
            stations: [
                {
                    ID: "1",
                    nameEN: "Test Only Station",
                    name: "測試站",
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                }, {
                    ID: "2",
                    nameEN: "Another Test Station",
                    name: "另一個測試站",
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1", "2"],
                },
            ],
            zones: [
                {
                    ID: "1",
                    nameEN: "Zone 1",
                    name: "1區",
                    stationIDs: ["1", "2"],
                },
            ],
        },
    }, {
        error: ZoneNotFoundError,
        object: {
            errorCode: "0",
            errorMsg: "success",
            lines: [
                {
                    ID: "1",
                    nameEN: "Test Only Line",
                    name: "測試線",
                    color: "689777",
                    stationIDs: ["1", "2"],
                },
            ],
            stations: [
                {
                    ID: "1",
                    nameEN: "Test Only Station",
                    name: "測試站",
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                }, {
                    ID: "2",
                    nameEN: "Another Test Station",
                    name: "另一個測試站",
                    coordinate: "22.3,114.1",
                    zoneID: "2",
                    lineIDs: ["1"],
                },
            ],
            zones: [
                {
                    ID: "1",
                    nameEN: "Zone 1",
                    name: "1區",
                    stationIDs: ["1"],
                },
            ],
        },
    }, {
        error: StationNotFoundError,
        object: {
            errorCode: "0",
            errorMsg: "success",
            lines: [
                {
                    ID: "1",
                    nameEN: "Test Only Line",
                    name: "測試線",
                    color: "689777",
                    stationIDs: ["1", "2"],
                },
            ],
            stations: [
                {
                    ID: "1",
                    nameEN: "Test Only Station",
                    name: "測試站",
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                }, {
                    ID: "2",
                    nameEN: "Another Test Station",
                    name: "另一個測試站",
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                },
            ],
            zones: [
                {
                    ID: "1",
                    nameEN: "Zone 1",
                    name: "1區",
                    stationIDs: ["1", "2", "3"],
                },
            ],
        },
    },
];
