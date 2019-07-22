"use strict";

import { SAMPLE_RAILWAY_OBJECT } from "../interfaces/railway-object.spec";
import { SAMPLE_TRIP_PLANNER } from "../interfaces/trip-planner.spec";

import { HeavyRail } from "./heavy-rail";

describe("HeavyRail", (): void => {

    describe("constructor()", (): void => {

        it("should return an new instance", (done): void => {

            expect(new HeavyRail(SAMPLE_RAILWAY_OBJECT.heavyRail.lines, SAMPLE_RAILWAY_OBJECT.heavyRail.stations))
                .toBeInstanceOf(HeavyRail);

            done();
        });
    });

    describe("parse()", (): void => {

        it("should return an new instance", (done): void => {

            expect(HeavyRail.parse(SAMPLE_RAILWAY_OBJECT.heavyRail)).toBeInstanceOf(HeavyRail);
            expect(HeavyRail.parse(SAMPLE_TRIP_PLANNER.heavyRail)).toBeInstanceOf(HeavyRail);

            done();
        });
    });

    describe("Methods", (): void => {

        const heavyRail: HeavyRail = HeavyRail.parse(SAMPLE_RAILWAY_OBJECT.heavyRail);

        describe("getLineByCode()", (): void => {

            it("should return a heavy rail line", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.heavyRail.lines).forEach((id): void => {
                    const line: HeavyRail.Line = SAMPLE_RAILWAY_OBJECT.heavyRail.lines[id];
                    expect(heavyRail.getLineByCode(line.code)).toBe(line);
                });

                done();
            });
        });

        describe("getLineById()", (): void => {

            it("should return a heavy rail line", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.heavyRail.lines).forEach((id): void => {
                    const line: HeavyRail.Line = SAMPLE_RAILWAY_OBJECT.heavyRail.lines[id];
                    expect(heavyRail.getLineById(id)).toBe(line);
                });

                done();
            });
        });

        describe("getLinesByStation()", (): void => {

            it("should return a list of heavy rail lines", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.heavyRail.stations).forEach((id): void => {
                    const station: HeavyRail.Station = SAMPLE_RAILWAY_OBJECT.heavyRail.stations[id];

                    const lines: HeavyRail.Line[] = [];
                    station.lineIDs.forEach((lineID): void => {
                        lines.push(SAMPLE_RAILWAY_OBJECT.heavyRail.lines[lineID]);
                    });

                    expect(heavyRail.getLinesByStation(station)).toMatchObject(expect.arrayContaining(lines));
                });

                done();
            });
        });

        describe("getLinesByStationCode()", (): void => {

            it("should return a list of heavy rail lines", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.heavyRail.stations).forEach((id): void => {
                    const station: HeavyRail.Station = SAMPLE_RAILWAY_OBJECT.heavyRail.stations[id];

                    const lines: HeavyRail.Line[] = [];
                    station.lineIDs.forEach((lineID): void => {
                        lines.push(SAMPLE_RAILWAY_OBJECT.heavyRail.lines[lineID]);
                    });

                    expect(heavyRail.getLinesByStationCode(station.code)).toMatchObject(expect.arrayContaining(lines));
                });

                done();
            });
        });

        describe("getLinesByStationId()", (): void => {

            it("should return a list of heavy rail lines", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.heavyRail.stations).forEach((id): void => {
                    const station: HeavyRail.Station = SAMPLE_RAILWAY_OBJECT.heavyRail.stations[id];

                    const lines: HeavyRail.Line[] = [];
                    station.lineIDs.forEach((lineID): void => {
                        lines.push(SAMPLE_RAILWAY_OBJECT.heavyRail.lines[lineID]);
                    });

                    expect(heavyRail.getLinesByStationId(id)).toMatchObject(expect.arrayContaining(lines));
                });

                done();
            });
        });

        describe("getStationByCode()", (): void => {

            it("should return a heavy rail station", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.heavyRail.stations).forEach((id): void => {
                    const station: HeavyRail.Station = SAMPLE_RAILWAY_OBJECT.heavyRail.stations[id];
                    expect(heavyRail.getStationByCode(station.code)).toBe(station);
                });

                done();
            });
        });

        describe("getStationById()", (): void => {

            it("should return a heavy rail station", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.heavyRail.stations).forEach((id): void => {
                    const station: HeavyRail.Station = SAMPLE_RAILWAY_OBJECT.heavyRail.stations[id];
                    expect(heavyRail.getStationById(id)).toBe(station);
                });

                done();
            });
        });

        describe("getStationsByLine()", (): void => {

            it("should return a list of heavy rail stations", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.heavyRail.lines).forEach((id): void => {
                    const line: HeavyRail.Line = SAMPLE_RAILWAY_OBJECT.heavyRail.lines[id];

                    const stations: HeavyRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(SAMPLE_RAILWAY_OBJECT.heavyRail.stations[stationID]);
                    });

                    expect(heavyRail.getStationsByLine(line)).toMatchObject(expect.arrayContaining(stations));
                });

                done();
            });
        });

        describe("getStationsByLineCode()", (): void => {

            it("should return a list of heavy rail stations", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.heavyRail.lines).forEach((id): void => {
                    const line: HeavyRail.Line = SAMPLE_RAILWAY_OBJECT.heavyRail.lines[id];

                    const stations: HeavyRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(SAMPLE_RAILWAY_OBJECT.heavyRail.stations[stationID]);
                    });

                    expect(heavyRail.getStationsByLineCode(line.code)).toMatchObject(expect.arrayContaining(stations));
                });

                done();
            });
        });

        describe("getStationsByLineId()", (): void => {

            it("should return a list of heavy rail stations", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.heavyRail.lines).forEach((id): void => {
                    const line: HeavyRail.Line = SAMPLE_RAILWAY_OBJECT.heavyRail.lines[id];

                    const stations: HeavyRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(SAMPLE_RAILWAY_OBJECT.heavyRail.stations[stationID]);
                    });

                    expect(heavyRail.getStationsByLineId(id)).toMatchObject(expect.arrayContaining(stations));
                });

                done();
            });
        });
    });

    describe("Overrides", (): void => {

        const heavyRail: HeavyRail = HeavyRail.parse(SAMPLE_RAILWAY_OBJECT.heavyRail);

        describe("toJSON()", (): void => {

            it("should return an object", (done): void => {

                expect(heavyRail.toJSON()).toStrictEqual(SAMPLE_RAILWAY_OBJECT.heavyRail);
                done();
            });
        });

        describe("toString()", (): void => {

            it("should return an object", (done): void => {

                expect(heavyRail.toString()).toBe(JSON.stringify(SAMPLE_RAILWAY_OBJECT.heavyRail));
                done();
            });
        });
    });
});
