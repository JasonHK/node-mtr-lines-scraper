"use strict";

import { isFullString } from "is-what";
import MapToObj from "map-to-obj";

import { LocalizedObject } from "../interfaces/localized-object";
import { TripPlanner } from "../interfaces/trip-planner";

import { isHeavyRailObject } from "../utilities/type-assertions";
import { createLineNotFoundError, createStationNotFoundError } from "../utilities/create-errors";

/**
 * Details of the heavy rail system of MTR. It contains every lines and 
 * stations in the railway system.
 */
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
            line.stationCodes = [];
            line.stationIDs.forEach((id): void => {
                if (this.stations.has(id)) {
                    line.stationCodes.push(this.stations.get(id).code);
                } else { throw createStationNotFoundError(id); }
            });
        });

        this.stations.forEach((station): void => {
            station.lineCodes = [];
            station.lineIDs.forEach((id): void => {
                if (this.lines.has(id)) {
                    station.lineCodes.push(this.lines.get(id).code);
                } else { throw createLineNotFoundError(id); }
            });
        });
    }

    /**
     * Retrieve the default string description of the heavy rail object.
     * 
     * @hidden
     */
    public get [Symbol.toStringTag](): string { return "HeavyRail"; }

    /**
     * Retrieve a rail line of the railway system using the code of the line.
     * 
     * @param code The code of the rail line
     */
    public getLineByCode(code: string): HeavyRail.Line {

        return this.lineCodes.has(code) ? this.getLineById(this.lineCodes.get(code)) : null;
    }

    /**
     * Retrieve a rail line of the railway system using the ID of the line.
     * 
     * @param id The ID of the rail line
     */
    public getLineById(id: string): HeavyRail.Line {

        return this.lines.has(id) ? this.lines.get(id) : null;
    }

    /**
     * Retrieve a list of rail lines that the given station is one of theirs.
     * 
     * @param station The targeted station
     */
    public getLinesByStation(station: HeavyRail.Station): HeavyRail.Line[] {

        if (!station) { return []; }

        const lines: HeavyRail.Line[] = [];
        station.lineIDs.forEach((id): void => {
            if (isFullString(id) && this.lines.has(id)) { lines.push(this.getLineById(id)); }
        });

        return lines;
    }

    /**
     * Retrieve a list of rail lines that the station with the given code is one of 
     * theirs.
     * 
     * @param stationCode The code of the targeted station
     */
    public getLinesByStationCode(stationCode: string): HeavyRail.Line[] {

        return this.getLinesByStation(this.getStationByCode(stationCode));
    }

    /**
     * Retrieve a list of rail lines that the station with the given ID is one of 
     * theirs.
     * 
     * @param stationId The ID of the targeted station
     */
    public getLinesByStationId(stationId: string): HeavyRail.Line[] {

        return this.getLinesByStation(this.getStationById(stationId));
    }

    /**
     * Retrieve a rail station of the railway system using the code of the station.
     * 
     * @param code The code of the rail station
     */
    public getStationByCode(code: string): HeavyRail.Station {

        return this.stationCodes.has(code) ? this.getStationById(this.stationCodes.get(code)) : null;
    }

    /**
     * Retrieve a rail station of the railway system using the ID of the station.
     * 
     * @param id The ID of the rail station
     */
    public getStationById(id: string): HeavyRail.Station {

        return this.stations.has(id) ? this.stations.get(id) : null;
    }

    /**
     * Retrieve a list of rail stations of the given line.
     * 
     * @param line The targeted line
     */
    public getStationsByLine(line: HeavyRail.Line): HeavyRail.Station[] {

        if (!line) { return []; }

        const stations: HeavyRail.Station[] = [];
        line.stationIDs.forEach((id): void => {
            if (isFullString(id) && this.stations.has(id)) { stations.push(this.getStationById(id)); }
        });

        return stations;
    }

    /**
     * Retrieve a list of rail stations of the line with the given code.
     * 
     * @param lineCode The code of the targeted line
     */
    public getStationsByLineCode(lineCode: string): HeavyRail.Station[] {

        return this.getStationsByLine(this.getLineByCode(lineCode));
    }

    /**
     * Retrieve a list of rail stations of the line with the given ID.
     * 
     * @param lineId The ID of the targeted line
     */
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

    public static parse(object: HeavyRail.Object | TripPlanner.HeavyRail): HeavyRail {

        if (isHeavyRailObject(object)) { return new HeavyRail(object.lines, object.stations); }

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

export default HeavyRail;
