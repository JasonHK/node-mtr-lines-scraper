"use strict";

import { LineNotFoundError } from "../../../../src/errors/line-not-found-error";
import { StationNotFoundError } from "../../../../src/errors/station-not-found-error";
import { ZoneNotFoundError } from "../../../../src/errors/zone-not-found-error";

import { LightRail } from "../../../../src/models/light-rail";

import { ErrorThrowers } from "../../interfaces/error-throwers";

export const RailwayObjectErrors: ErrorThrowers<LightRail.Object> = [
    {
        error: StationNotFoundError,
        object: {
            lines: {
                "1": {
                    id: "1",
                    name: { en: "Test Only Line", zh: "測試線" },
                    theme: "#689777",
                    stationIDs: ["1", "2", "3"],
                },
            },
            stations: {
                "1": {
                    id: "1",
                    name: { en: "Test Only Station", zh: "測試站" },
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                },
                "2": {
                    id: "2",
                    name: { en: "Another Test Station", zh: "另一個測試站" },
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                },
            },
            zones: {
                "1": {
                    id: "1",
                    name: { en: "Zone 1", zh: "1區" },
                    stationIDs: ["1", "2"],
                },
            },
        },
    }, {
        error: LineNotFoundError,
        object: {
            lines: {
                "1": {
                    id: "1",
                    name: { en: "Test Only Line", zh: "測試線" },
                    theme: "#689777",
                    stationIDs: ["1", "2"],
                },
            },
            stations: {
                "1": {
                    id: "1",
                    name: { en: "Test Only Station", zh: "測試站" },
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                },
                "2": {
                    id: "2",
                    name: { en: "Another Test Station", zh: "另一個測試站" },
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1", "2"],
                },
            },
            zones: {
                "1": {
                    id: "1",
                    name: { en: "Zone 1", zh: "1區" },
                    stationIDs: ["1", "2"],
                },
            },
        },
    }, {
        error: ZoneNotFoundError,
        object: {
            lines: {
                "1": {
                    id: "1",
                    name: { en: "Test Only Line", zh: "測試線" },
                    theme: "#689777",
                    stationIDs: ["1", "2"],
                },
            },
            stations: {
                "1": {
                    id: "1",
                    name: { en: "Test Only Station", zh: "測試站" },
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                },
                "2": {
                    id: "2",
                    name: { en: "Another Test Station", zh: "另一個測試站" },
                    coordinate: "22.3,114.1",
                    zoneID: "2",
                    lineIDs: ["1"],
                },
            },
            zones: {
                "1": {
                    id: "1",
                    name: { en: "Zone 1", zh: "1區" },
                    stationIDs: ["1"],
                },
            },
        },
    }, {
        error: StationNotFoundError,
        object: {
            lines: {
                "1": {
                    id: "1",
                    name: { en: "Test Only Line", zh: "測試線" },
                    theme: "#689777",
                    stationIDs: ["1", "2"],
                },
            },
            stations: {
                "1": {
                    id: "1",
                    name: { en: "Test Only Station", zh: "測試站" },
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                },
                "2": {
                    id: "2",
                    name: { en: "Another Test Station", zh: "另一個測試站" },
                    coordinate: "22.3,114.1",
                    zoneID: "1",
                    lineIDs: ["1"],
                },
            },
            zones: {
                "1": {
                    id: "1",
                    name: { en: "Zone 1", zh: "1區" },
                    stationIDs: ["1", "2", "3"],
                },
            },
        },
    },
];
