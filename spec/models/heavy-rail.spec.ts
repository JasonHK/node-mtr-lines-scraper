"use strict";

import { HeavyRail } from "../../src/models/heavy-rail";

import { RailwayObjectErrors } from "../common/errors/heavy-rail/railway-object-errors";
import { TripPlannerErrors } from "../common/errors/heavy-rail/trip-planner-errors";

import { RailwayObjectSample } from "../common/samples/railway-object-sample";
import { TripPlannerSample } from "../common/samples/trip-planner-sample";

describe("HeavyRail", (): void => {

    describe("constructor()", (): void => {

        it("should return a new instance", (): void => {

            expect(new HeavyRail(RailwayObjectSample.heavyRail.lines, RailwayObjectSample.heavyRail.stations))
                .toBeInstanceOf(HeavyRail);
        });

        it("should throw an error", (): void => {

            RailwayObjectErrors.forEach((thrower): void => {
                expect((): void => {
                    new HeavyRail(thrower.object.lines, thrower.object.stations);
                }).toThrowError(thrower.error);
            });
        });
    });

    describe("parse()", (): void => {

        it("should return a new instance", (): void => {

            expect(HeavyRail.parse(RailwayObjectSample.heavyRail)).toBeInstanceOf(HeavyRail);
            expect(HeavyRail.parse(TripPlannerSample.heavyRail)).toBeInstanceOf(HeavyRail);
        });

        it("should throw an error", (): void => {

            RailwayObjectErrors.forEach((thrower): void => {
                expect((): void => {
                    HeavyRail.parse(thrower.object);
                }).toThrowError(thrower.error);
            });

            TripPlannerErrors.forEach((thrower): void => {
                expect((): void => {
                    HeavyRail.parse(thrower.object);
                }).toThrowError(thrower.error);
            });
        });
    });

    describe("Methods", (): void => {

        const heavyRail: HeavyRail = HeavyRail.parse(RailwayObjectSample.heavyRail);

        describe("getLineByCode()", (): void => {

            it("should return a heavy rail line", (): void => {

                Object.keys(RailwayObjectSample.heavyRail.lines).forEach((id): void => {
                    const line: HeavyRail.Line = RailwayObjectSample.heavyRail.lines[id];
                    expect(heavyRail.getLineByCode(line.code)).toBe(line);
                });
            });

            it("should return null", (): void => {

                expect(heavyRail.getLineByCode("NEL")).toBeNull();
            });
        });

        describe("getLineById()", (): void => {

            it("should return a heavy rail line", (): void => {

                Object.keys(RailwayObjectSample.heavyRail.lines).forEach((id): void => {
                    const line: HeavyRail.Line = RailwayObjectSample.heavyRail.lines[id];
                    expect(heavyRail.getLineById(id)).toBe(line);
                });
            });

            it("should return null", (): void => {

                expect(heavyRail.getLineById("0")).toBeNull();
            });
        });

        describe("getLinesByStation()", (): void => {

            it("should return a list of heavy rail lines", (): void => {

                Object.keys(RailwayObjectSample.heavyRail.stations).forEach((id): void => {
                    const station: HeavyRail.Station = RailwayObjectSample.heavyRail.stations[id];

                    const lines: HeavyRail.Line[] = [];
                    station.lineIDs.forEach((lineID): void => {
                        lines.push(RailwayObjectSample.heavyRail.lines[lineID]);
                    });

                    expect(heavyRail.getLinesByStation(station)).toMatchObject(expect.arrayContaining(lines));
                });
            });

            it("should return an empty list", (): void => {

                expect(heavyRail.getLinesByStation(undefined)).toStrictEqual([]);
            });
        });

        describe("getLinesByStationCode()", (): void => {

            it("should return a list of heavy rail lines", (): void => {

                Object.keys(RailwayObjectSample.heavyRail.stations).forEach((id): void => {
                    const station: HeavyRail.Station = RailwayObjectSample.heavyRail.stations[id];

                    const lines: HeavyRail.Line[] = [];
                    station.lineIDs.forEach((lineID): void => {
                        lines.push(RailwayObjectSample.heavyRail.lines[lineID]);
                    });

                    expect(heavyRail.getLinesByStationCode(station.code)).toMatchObject(expect.arrayContaining(lines));
                });
            });

            it("should return an empty list", (): void => {

                expect(heavyRail.getLinesByStationCode("NES")).toStrictEqual([]);
            });
        });

        describe("getLinesByStationId()", (): void => {

            it("should return a list of heavy rail lines", (): void => {

                Object.keys(RailwayObjectSample.heavyRail.stations).forEach((id): void => {
                    const station: HeavyRail.Station = RailwayObjectSample.heavyRail.stations[id];

                    const lines: HeavyRail.Line[] = [];
                    station.lineIDs.forEach((lineID): void => {
                        lines.push(RailwayObjectSample.heavyRail.lines[lineID]);
                    });

                    expect(heavyRail.getLinesByStationId(id)).toMatchObject(expect.arrayContaining(lines));
                });
            });

            it("should return an empty list", (): void => {

                expect(heavyRail.getLinesByStationId("0")).toStrictEqual([]);
            });
        });

        describe("getStationByCode()", (): void => {

            it("should return a heavy rail station", (): void => {

                Object.keys(RailwayObjectSample.heavyRail.stations).forEach((id): void => {
                    const station: HeavyRail.Station = RailwayObjectSample.heavyRail.stations[id];
                    expect(heavyRail.getStationByCode(station.code)).toBe(station);
                });
            });

            it("should return null", (): void => {

                expect(heavyRail.getStationByCode("NES")).toBeNull();
            });
        });

        describe("getStationById()", (): void => {

            it("should return a heavy rail station", (): void => {

                Object.keys(RailwayObjectSample.heavyRail.stations).forEach((id): void => {
                    const station: HeavyRail.Station = RailwayObjectSample.heavyRail.stations[id];
                    expect(heavyRail.getStationById(id)).toBe(station);
                });
            });

            it("should return null", (): void => {

                expect(heavyRail.getStationById("0")).toBeNull();
            });
        });

        describe("getStationsByLine()", (): void => {

            it("should return a list of heavy rail stations", (): void => {

                Object.keys(RailwayObjectSample.heavyRail.lines).forEach((id): void => {
                    const line: HeavyRail.Line = RailwayObjectSample.heavyRail.lines[id];

                    const stations: HeavyRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(RailwayObjectSample.heavyRail.stations[stationID]);
                    });

                    expect(heavyRail.getStationsByLine(line)).toMatchObject(expect.arrayContaining(stations));
                });
            });

            it("should return an empty list", (): void => {

                expect(heavyRail.getStationsByLine(undefined)).toStrictEqual([]);
            });
        });

        describe("getStationsByLineCode()", (): void => {

            it("should return a list of heavy rail stations", (): void => {

                Object.keys(RailwayObjectSample.heavyRail.lines).forEach((id): void => {
                    const line: HeavyRail.Line = RailwayObjectSample.heavyRail.lines[id];

                    const stations: HeavyRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(RailwayObjectSample.heavyRail.stations[stationID]);
                    });

                    expect(heavyRail.getStationsByLineCode(line.code)).toMatchObject(expect.arrayContaining(stations));
                });
            });

            it("should return an empty list", (): void => {

                expect(heavyRail.getStationsByLineCode("NEL")).toStrictEqual([]);
            });
        });

        describe("getStationsByLineId()", (): void => {

            it("should return a list of heavy rail stations", (): void => {

                Object.keys(RailwayObjectSample.heavyRail.lines).forEach((id): void => {
                    const line: HeavyRail.Line = RailwayObjectSample.heavyRail.lines[id];

                    const stations: HeavyRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(RailwayObjectSample.heavyRail.stations[stationID]);
                    });

                    expect(heavyRail.getStationsByLineId(id)).toMatchObject(expect.arrayContaining(stations));
                });
            });

            it("should return an empty list", (): void => {

                expect(heavyRail.getStationsByLineId("0")).toStrictEqual([]);
            });
        });
    });

    describe("Overrides", (): void => {

        const heavyRail: HeavyRail = HeavyRail.parse(RailwayObjectSample.heavyRail);

        describe("[Symbol(Symbol.toStringTag)]()", (): void => {

            expect(heavyRail[Symbol.toStringTag]).toBe("HeavyRail");
            expect(Object.prototype.toString.call(heavyRail)).toBe("[object HeavyRail]");
        });

        describe("toJSON()", (): void => {

            it("should return an object", (): void => {

                expect(heavyRail.toJSON()).toStrictEqual(RailwayObjectSample.heavyRail);
            });
        });

        describe("toString()", (): void => {

            it("should return an object", (): void => {

                expect(heavyRail.toString()).toBe(JSON.stringify(RailwayObjectSample.heavyRail));
            });
        });
    });
});
