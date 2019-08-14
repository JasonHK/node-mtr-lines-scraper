"use strict";

import { LineNotFoundError } from "../../../../src/errors/line-not-found-error";
import { StationNotFoundError } from "../../../../src/errors/station-not-found-error";

import { HeavyRail } from "../../../../src/models/heavy-rail";

import { ErrorThrowers } from "../../interfaces/error-throwers";

export const RailwayObjectErrors: ErrorThrowers<HeavyRail.Object> = [
    {
        error: StationNotFoundError,
        object: {
            lines: {
                "1": {
                    id: "1",
                    code: "TOL",
                    name: { en: "Test Only Line", zh: "測試線" },
                    theme: "#689777",
                    stationIDs: ["1", "2", "3"],
                    stationCodes: ["TOS", "ATS", "NES"],
                },
            },
            stations: {
                "1": {
                    id: "1",
                    code: "TOS",
                    name: { en: "Test Only Station", zh: "測試站" },
                    coordinate: "22.3,114.1",
                    lineIDs: ["1"],
                    lineCodes: ["TOL"],
                },
                "2": {
                    id: "2",
                    code: "ATS",
                    name: { en: "Another Test Station", zh: "另一個測試站" },
                    coordinate: "22.3,114.1",
                    lineIDs: ["1"],
                    lineCodes: ["TOL"],
                },
            },
        },
    }, {
        error: LineNotFoundError,
        object: {
            lines: {
                "1": {
                    id: "1",
                    code: "TOL",
                    name: { en: "Test Only Line", zh: "測試線" },
                    theme: "#689777",
                    stationIDs: ["1", "2"],
                    stationCodes: ["TOS", "ATS"],
                },
            },
            stations: {
                "1": {
                    id: "1",
                    code: "TOS",
                    name: { en: "Test Only Station", zh: "測試站" },
                    coordinate: "22.3,114.1",
                    lineIDs: ["1"],
                    lineCodes: ["TOL"],
                },
                "2": {
                    id: "2",
                    code: "ATS",
                    name: { en: "Another Test Station", zh: "另一個測試站" },
                    coordinate: "22.3,114.1",
                    lineIDs: ["1", "2"],
                    lineCodes: ["TOL", "NEL"],
                },
            },
        },
    },
];
