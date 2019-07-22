"use strict";

import { SAMPLE_RAILWAY_OBJECT } from "../interfaces/railway-object.spec";
import { SAMPLE_TRIP_PLANNER } from "../interfaces/trip-planner.spec";

import { LightRail } from "./light-rail";

describe("LightRail", (): void => {

    describe("constructor()", (): void => {

        it("should return an new instance", (done): void => {

            // eslint-disable-next-line max-len
            expect(new LightRail(SAMPLE_RAILWAY_OBJECT.lightRail.lines, SAMPLE_RAILWAY_OBJECT.lightRail.stations, SAMPLE_RAILWAY_OBJECT.lightRail.zones))
                .toBeInstanceOf(LightRail);

            done();
        });
    });

    describe("parse()", (): void => {

        it("should return an new instance", (done): void => {

            expect(LightRail.parse(SAMPLE_RAILWAY_OBJECT.lightRail)).toBeInstanceOf(LightRail);
            expect(LightRail.parse(SAMPLE_TRIP_PLANNER.lightRail)).toBeInstanceOf(LightRail);

            done();
        });
    });

    describe("Methods", (): void => {

        const lightRail: LightRail = LightRail.parse(SAMPLE_RAILWAY_OBJECT.lightRail);

        describe("getLineById()", (): void => {

            it("should return a light rail line", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.lines).forEach((id): void => {
                    const line: LightRail.Line = SAMPLE_RAILWAY_OBJECT.lightRail.lines[id];
                    expect(lightRail.getLineById(id)).toBe(line);
                });

                done();
            });
        });

        describe("getLinesByStation()", (): void => {

            it("should return a list of light rail lines", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.stations).forEach((id): void => {
                    const station: LightRail.Station = SAMPLE_RAILWAY_OBJECT.lightRail.stations[id];

                    const lines: LightRail.Line[] = [];
                    station.lineIDs.forEach((lineID): void => {
                        lines.push(SAMPLE_RAILWAY_OBJECT.lightRail.lines[lineID]);
                    });

                    expect(lightRail.getLinesByStation(station)).toMatchObject(expect.arrayContaining(lines));
                });

                done();
            });
        });

        describe("getLinesByStationId()", (): void => {

            it("should return a list of light rail lines", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.stations).forEach((id): void => {
                    const station: LightRail.Station = SAMPLE_RAILWAY_OBJECT.lightRail.stations[id];

                    const lines: LightRail.Line[] = [];
                    station.lineIDs.forEach((lineID): void => {
                        lines.push(SAMPLE_RAILWAY_OBJECT.lightRail.lines[lineID]);
                    });

                    expect(lightRail.getLinesByStationId(id)).toMatchObject(expect.arrayContaining(lines));
                });

                done();
            });
        });

        describe("getStationById()", (): void => {

            it("should return a light rail station", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.stations).forEach((id): void => {
                    const station: LightRail.Station = SAMPLE_RAILWAY_OBJECT.lightRail.stations[id];
                    expect(lightRail.getStationById(id)).toBe(station);
                });

                done();
            });
        });

        describe("getStationsByLine()", (): void => {

            it("should return a list of light rail stations", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.lines).forEach((id): void => {
                    const line: LightRail.Line = SAMPLE_RAILWAY_OBJECT.lightRail.lines[id];

                    const stations: LightRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(SAMPLE_RAILWAY_OBJECT.lightRail.stations[stationID]);
                    });

                    expect(lightRail.getStationsByLine(line)).toMatchObject(expect.arrayContaining(stations));
                });

                done();
            });
        });

        describe("getStationsByLineId()", (): void => {

            it("should return a list of light rail stations", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.lines).forEach((id): void => {
                    const line: LightRail.Line = SAMPLE_RAILWAY_OBJECT.lightRail.lines[id];

                    const stations: LightRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(SAMPLE_RAILWAY_OBJECT.lightRail.stations[stationID]);
                    });

                    expect(lightRail.getStationsByLineId(id)).toMatchObject(expect.arrayContaining(stations));
                });

                done();
            });
        });

        describe("getStationsByZone()", (): void => {

            it("should return a list of light rail stations", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.zones).forEach((id): void => {
                    const line: LightRail.Zone = SAMPLE_RAILWAY_OBJECT.lightRail.zones[id];

                    const stations: LightRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(SAMPLE_RAILWAY_OBJECT.lightRail.stations[stationID]);
                    });

                    expect(lightRail.getStationsByZone(line)).toMatchObject(expect.arrayContaining(stations));
                });

                done();
            });
        });

        describe("getStationsByZoneId()", (): void => {

            it("should return a list of light rail stations", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.zones).forEach((id): void => {
                    const line: LightRail.Zone = SAMPLE_RAILWAY_OBJECT.lightRail.zones[id];

                    const stations: LightRail.Station[] = [];
                    line.stationIDs.forEach((stationID): void => {
                        stations.push(SAMPLE_RAILWAY_OBJECT.lightRail.stations[stationID]);
                    });

                    expect(lightRail.getStationsByZoneId(id)).toMatchObject(expect.arrayContaining(stations));
                });

                done();
            });
        });

        describe("getZoneById()", (): void => {

            it("should return a light rail zone", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.zones).forEach((id): void => {
                    const zone: LightRail.Zone = SAMPLE_RAILWAY_OBJECT.lightRail.zones[id];
                    expect(lightRail.getZoneById(id)).toBe(zone);
                });

                done();
            });
        });

        describe("getZoneByStation()", (): void => {

            it("should return a light rail zone", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.stations).forEach((id): void => {
                    const station: LightRail.Station = SAMPLE_RAILWAY_OBJECT.lightRail.stations[id];

                    const zone: LightRail.Zone = SAMPLE_RAILWAY_OBJECT.lightRail.zones[station.zoneID];
                    expect(lightRail.getZoneByStation(station)).toBe(zone);
                });

                done();
            });
        });

        describe("getZoneByStationId()", (): void => {

            it("should return a light rail zone", (done): void => {

                Object.keys(SAMPLE_RAILWAY_OBJECT.lightRail.stations).forEach((id): void => {
                    const station: LightRail.Station = SAMPLE_RAILWAY_OBJECT.lightRail.stations[id];

                    const zone: LightRail.Zone = SAMPLE_RAILWAY_OBJECT.lightRail.zones[station.zoneID];
                    expect(lightRail.getZoneByStationId(id)).toBe(zone);
                });

                done();
            });
        });
    });

    describe("Overrides", (): void => {

        const lightRail: LightRail = LightRail.parse(SAMPLE_RAILWAY_OBJECT.lightRail);

        describe("toJSON()", (): void => {

            it("should return an object", (done): void => {

                expect(lightRail.toJSON()).toStrictEqual(SAMPLE_RAILWAY_OBJECT.lightRail);
                done();
            });
        });

        describe("toString()", (): void => {

            it("should return an object", (done): void => {

                expect(lightRail.toString()).toBe(JSON.stringify(SAMPLE_RAILWAY_OBJECT.lightRail));
                done();
            });
        });
    });
});
