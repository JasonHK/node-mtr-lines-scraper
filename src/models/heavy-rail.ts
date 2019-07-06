"use strict";

import MapToObj from "map-to-obj";

import { LocalizedObject } from "../interfaces/localized-object";
import { TripPlanner } from "../interfaces/trip-planner";

import { isObject } from "../utilities/type-assertions";

export class HeavyRail {

    private readonly lines: HeavyRail.LinesMap = new Map();
    private readonly stations: HeavyRail.StationsMap = new Map();

    private readonly lineCodes: Map<string, string> = new Map();
    private readonly stationCodes: Map<string, string> = new Map();

    constructor(lines: HeavyRail.LinesRecord, stations: HeavyRail.StationsRecord) {

        Object.keys(lines).forEach((id): void => {
            this.lineCodes.set(lines[id].code, id);
            this.lines.set(id, lines[id]);
        });

        Object.keys(stations).forEach((id): void => {
            this.stationCodes.set(stations[id].code, id);
            this.stations.set(id, stations[id]);
        });

        this.lines.forEach((line): void => {
            if (line.stationCodes.length !== line.stationIDs.length) {
                line.stationCodes = [];
                line.stationIDs.forEach((id): void => {
                    if (this.stations.has(id)) {
                        line.stationCodes.push(this.stations.get(id).code);
                    } else { throw new Error(`Missing station with an ID number of ${ id }.`); }
                });
            }
        });

        this.stations.forEach((station): void => {
            if (station.lineCodes.length !== station.lineIDs.length) {
                station.lineCodes = [];
                station.lineIDs.forEach((id): void => {
                    if (this.lines.has(id)) {
                        station.lineCodes.push(this.lines.get(id).code);
                    } else { throw new Error(`Missing line with an ID number of ${ id }.`); }
                });
            }
        });
    }

    public getLineByCode(code: string): HeavyRail.Line {

        return this.lineCodes.has(code) ? this.getLineById(this.lineCodes.get(code)) : undefined;
    }

    public getLineById(id: string): HeavyRail.Line {

        return this.lines.get(id);
    }

    public getLinesByStation(station: HeavyRail.Station): HeavyRail.Line[] {

        if (!station) { return []; }

        const lines: HeavyRail.Line[] = [];
        station.lineIDs.forEach((id): void => {
            if (id && this.lines.has(id)) { lines.push(this.getLineById(id)); }
        });

        return lines;
    }

    public getLinesByStationCode(stationCode: string): HeavyRail.Line[] {

        return this.getLinesByStation(this.getStationByCode(stationCode));
    }

    public getLinesByStationId(stationId: string): HeavyRail.Line[] {

        return this.getLinesByStation(this.getStationById(stationId));
    }

    public getStationByCode(code: string): HeavyRail.Station {

        return this.stationCodes.has(code) ? this.getStationById(this.stationCodes.get(code)) : undefined;
    }

    public getStationById(id: string): HeavyRail.Station {

        return this.stations.get(id);
    }

    public getStationsByLine(line: HeavyRail.Line): HeavyRail.Station[] {

        if (!line) { return []; }

        const stations: HeavyRail.Station[] = [];
        line.stationIDs.forEach((id): void => {
            if (id && this.stations.has(id)) { stations.push(this.getStationById(id)); }
        });

        return stations;
    }

    public getStationsByLineCode(lineCode: string): HeavyRail.Station[] {

        return this.getStationsByLine(this.getLineByCode(lineCode));
    }

    public getStationsByLineId(lineId: string): HeavyRail.Station[] {

        return this.getStationsByLine(this.getLineById(lineId));
    }

    public toJSON(): HeavyRail.Object {

        return {
            lines: MapToObj(this.lines),
            stations: MapToObj(this.stations),
        };
    }

    public toString(): string {

        return JSON.stringify(this);
    }

    private static isHeavyRailObject(object: HeavyRail.Object | TripPlanner.HeavyRail): object is HeavyRail.Object {

        return isObject(object) && !(Array.isArray(object.lines) || Array.isArray(object.stations));
    }

    public static parse(object: HeavyRail.Object | TripPlanner.HeavyRail): HeavyRail {

        if (this.isHeavyRailObject(object)) { return new HeavyRail(object.lines, object.stations); }

        const lines: HeavyRail.LinesRecord = {};
        const stations: HeavyRail.StationsRecord = {};

        object.lines.forEach((line): void => {
            Object.assign<HeavyRail.LinesRecord, HeavyRail.LinesRecord>(lines, {
                [line.ID.toString()]: {
                    id: line.ID.toString(),
                    code: line.alias,
                    name: {
                        en: line.nameEN,
                        zh: line.name,
                    },
                    theme: `#${ line.color }`,
                    stationIDs: line.stationIDs.map((id): string => { return id.toString(); }),
                    stationCodes: [],
                },
            });
        });

        object.stations.forEach((station): void => {
            Object.assign<HeavyRail.StationsRecord, HeavyRail.StationsRecord>(stations, {
                [station.ID.toString()]: {
                    id: station.ID.toString(),
                    code: station.alias,
                    name: {
                        en: station.nameEN,
                        zh: station.name,
                    },
                    coordinate: station.coordinate,
                    lineIDs: station.lineIDs.map((id): string => { return id.toString(); }),
                    lineCodes: [],
                },
            });
        });

        return new HeavyRail(lines, stations);
    }
}

export namespace HeavyRail {

    export interface Object {
        lines: LinesRecord;
        stations: StationsRecord;
    }

    export interface Line {
        id: string;
        code: string;
        name: LocalizedObject<string>;
        theme: string;
        stationIDs: string[];
        stationCodes: string[];
    }

    export interface Station {
        id: string;
        code: string;
        name: LocalizedObject<string>;
        coordinate: string;
        lineIDs: string[];
        lineCodes: string[];
    }

    export type LinesMap = Map<string, Line>;
    export type LinesRecord = Record<string, Line>;

    export type StationsMap = Map<string, Station>;
    export type StationsRecord = Record<string, Station>;
}
