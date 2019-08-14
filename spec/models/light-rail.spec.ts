"use strict";

import { LightRail } from "../../src/models/light-rail";

import { RailwayObjectErrors } from "../common/errors/light-rail/railway-object-errors";
import { TripPlannerErrors } from "../common/errors/light-rail/trip-planner-errors";

import { RailwayObjectSample } from "../common/samples/railway-object-sample";
import { TripPlannerSample } from "../common/samples/trip-planner-sample";

describe("LightRail", (): void => {

    describe("constructor()", (): void => {

        it("should return a new instance", (): void => {

            // eslint-disable-next-line max-len
            expect(new LightRail(RailwayObjectSample.lightRail.lines, RailwayObjectSample.lightRail.stations, RailwayObjectSample.lightRail.zones))
                .toBeInstanceOf(LightRail);
        });

        it("should throw an error", (): void => {

            RailwayObjectErrors.forEach((thrower): void => {
                expect((): void => {
                    new LightRail(thrower.object.lines, thrower.object.stations, thrower.object.zones);
                }).toThrowError(thrower.error);
            });
        });
    });

    describe("parse()", (): void => {

        it("should return a new instance", (): void => {

            expect(LightRail.parse(RailwayObjectSample.lightRail)).toBeInstanceOf(LightRail);
            expect(LightRail.parse(TripPlannerSample.lightRail)).toBeInstanceOf(LightRail);
        });

        it("should throw an error", (): void => {

            RailwayObjectErrors.forEach((thrower): void => {
                expect((): void => {
                    LightRail.parse(thrower.object);
                }).toThrowError(thrower.error);
            });

            TripPlannerErrors.forEach((thrower): void => {
                expect((): void => {
                    LightRail.parse(thrower.object);
                }).toThrowError(thrower.error);
            });
        });
    });

    describe("Methods", (): void => {

        const lightRail: LightRail = LightRail.parse(RailwayObjectSample.lightRail);

        describe("getLineById()", (): void => {

            it("should return a light rail line", (): void => {

                Object.keys(RailwayObjectSample.lightRail.lines).forEach((id): void => {
                    const line: LightRail.Line = RailwayObjectSample.lightRail.lines[id];
                    expect(lightRail.getLineById(id)).toBe(line);
                });
            });

            it("should return null", (): void => {

                expect(lightRail.getLineById("0")).toBeNull();
            });
        });

        describe("getLinesByStation()", (): void => {

            it("should return a list of light rail lines", (): void => {

                Object.keys(RailwayObjectSample.lightRail.stations).forEach((id): void => {
                    const station: LightRail.Station = RailwayObjectSample.lightRail.stations[id];

                    const lines: LightRail.Line[] = [];
                    station.lineIDs.forEach((lineID): void => {
                        lines.push(RailwayObjectSample.lightRail.lines[lineID]);
                    });

                    expect(lightRail.getLinesByStation(station)).toMatchObject(expect.arrayContaining(lines));
                });
            });

            it("should return an empty list", (): void => {

                expect(lightRail.getLinesByStation(undefined)).toStrictEqual([]);
            });
        });

        describe("getLinesByStationId()", (): void => {

            it("should return a list of light rail lines", (): void => {

                Object.keys(RailwayObjectSample.lightRail.stations).forEach((id): void => {
                    const station: LightRail.Station = RailwayObjectSample.lightRail.stations[id];

                    const lines: LightRail.Line[] = [];
                    station.lineIDs.forEach((lineID): void => {
                        lines.push(RailwayObjectSample.lightRail.lines[lineID]);
                    });

                    expect(lightRail.getLinesByStationId(id)).toMatchObject(expect.arrayContaining(lines));
                });
            });

            it("should return an empty list", (): void => {

                expect(lightRail.getLinesByStationId("0")).toStrictEqual([]);
            });
        });

        describe("getStationById()", (): void => {

            it("should return a light rail station", (): void => {

                Object.keys(RailwayObjectSample.lightRail.stations).forEach((id): void => {
                    const station: LightRail.Station = RailwayObjectSample.lightRail.stations[id];
                    expect(lightRail.getStationById(id)).toBe(station);
                });
            });

            it("should return null", (): void => {

                expect(lightRail.getStationById("0")).toBeNull();
            });
        });

        describe("getStationsByLine()", (): void => {

            it("should return a list of light rail stations", (): void => {

                Object.keys(RailwayObjectSample.lightRail.lines).forEach((id): void => {
                    const line: LightRail.Line = RailwayObjectSample.lightRail.lines[id];

                    const stations: LightRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(RailwayObjectSample.lightRail.stations[stationID]);
                    });

                    expect(lightRail.getStationsByLine(line)).toMatchObject(expect.arrayContaining(stations));
                });
            });

            it("should return an empty list", (): void => {

                expect(lightRail.getStationsByLine(undefined)).toStrictEqual([]);
            });
        });

        describe("getStationsByLineId()", (): void => {

            it("should return a list of light rail stations", (): void => {

                Object.keys(RailwayObjectSample.lightRail.lines).forEach((id): void => {
                    const line: LightRail.Line = RailwayObjectSample.lightRail.lines[id];

                    const stations: LightRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(RailwayObjectSample.lightRail.stations[stationID]);
                    });

                    expect(lightRail.getStationsByLineId(id)).toMatchObject(expect.arrayContaining(stations));
                });
            });

            it("should return an empty list", (): void => {

                expect(lightRail.getStationsByLineId("0")).toStrictEqual([]);
            });
        });

        describe("getStationsByZone()", (): void => {

            it("should return a list of light rail stations", (): void => {

                Object.keys(RailwayObjectSample.lightRail.zones).forEach((id): void => {
                    const line: LightRail.Zone = RailwayObjectSample.lightRail.zones[id];

                    const stations: LightRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(RailwayObjectSample.lightRail.stations[stationID]);
                    });

                    expect(lightRail.getStationsByZone(line)).toMatchObject(expect.arrayContaining(stations));
                });
            });

            it("should return an empty list", (): void => {

                expect(lightRail.getStationsByZone(undefined)).toStrictEqual([]);
            });
        });

        describe("getStationsByZoneId()", (): void => {

            it("should return a list of light rail stations", (): void => {

                Object.keys(RailwayObjectSample.lightRail.zones).forEach((id): void => {
                    const line: LightRail.Zone = RailwayObjectSample.lightRail.zones[id];

                    const stations: LightRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(RailwayObjectSample.lightRail.stations[stationID]);
                    });

                    expect(lightRail.getStationsByZoneId(id)).toMatchObject(expect.arrayContaining(stations));
                });
            });

            it("should return an empty list", (): void => {

                expect(lightRail.getStationsByZoneId("0")).toStrictEqual([]);
            });
        });

        describe("getZoneById()", (): void => {

            it("should return a light rail zone", (): void => {

                Object.keys(RailwayObjectSample.lightRail.zones).forEach((id): void => {
                    const zone: LightRail.Zone = RailwayObjectSample.lightRail.zones[id];
                    expect(lightRail.getZoneById(id)).toBe(zone);
                });
            });

            it("should return null", (): void => {

                expect(lightRail.getZoneById("0")).toBeNull();
            });
        });

        describe("getZoneByStation()", (): void => {

            it("should return a light rail zone", (): void => {

                Object.keys(RailwayObjectSample.lightRail.stations).forEach((id): void => {
                    const station: LightRail.Station = RailwayObjectSample.lightRail.stations[id];

                    const zone: LightRail.Zone = RailwayObjectSample.lightRail.zones[station.zoneID];
                    expect(lightRail.getZoneByStation(station)).toBe(zone);
                });
            });

            it("should return null", (): void => {

                expect(lightRail.getZoneByStation(undefined)).toBeNull();
            });
        });

        describe("getZoneByStationId()", (): void => {

            it("should return a light rail zone", (): void => {

                Object.keys(RailwayObjectSample.lightRail.stations).forEach((id): void => {
                    const station: LightRail.Station = RailwayObjectSample.lightRail.stations[id];

                    const zone: LightRail.Zone = RailwayObjectSample.lightRail.zones[station.zoneID];
                    expect(lightRail.getZoneByStationId(id)).toBe(zone);
                });
            });

            it("should return null", (): void => {

                expect(lightRail.getZoneByStationId("0")).toBeNull();
            });
        });
    });

    describe("Overrides", (): void => {

        const lightRail: LightRail = LightRail.parse(RailwayObjectSample.lightRail);

        describe("[Symbol(Symbol.toStringTag)]()", (): void => {

            expect(lightRail[Symbol.toStringTag]).toBe("LightRail");
            expect(Object.prototype.toString.call(lightRail)).toBe("[object LightRail]");
        });

        describe("toJSON()", (): void => {

            it("should return an object", (): void => {

                expect(lightRail.toJSON()).toStrictEqual(RailwayObjectSample.lightRail);
            });
        });

        describe("toString()", (): void => {

            it("should return an object", (): void => {

                expect(lightRail.toString()).toBe(JSON.stringify(RailwayObjectSample.lightRail));
            });
        });
    });
});
