"use strict";

import { isFullString } from "is-what";
import MapToObj from "map-to-obj";

import { LocalizedObject } from "../interfaces/localized-object";
import { TripPlanner } from "../interfaces/trip-planner";

import { isLightRailObject } from "../utilities/type-assertions";
import {
    createLineNotFoundError, createStationNotFoundError, createZoneNotFoundError,
} from "../utilities/create-errors";

/**
 * Details of the light rail system of MTR. It contains every lines and 
 * stations in the railway system.
 */
export class LightRail {

    private readonly lines: LightRail.LinesMap = new Map();
    private readonly stations: LightRail.StationsMap = new Map();
    private readonly zones: LightRail.ZonesMap = new Map();

    constructor(lines: LightRail.LinesRecord, stations: LightRail.StationsRecord, zones: LightRail.ZonesRecord) {

        Object.keys(lines).forEach((id): void => {
            this.lines.set(id, lines[id]);
        });

        Object.keys(stations).forEach((id): void => {
            this.stations.set(id, stations[id]);
        });

        Object.keys(zones).forEach((id): void => {
            this.zones.set(id, zones[id]);
        });

        this.lines.forEach((line): void => {
            line.stationIDs.forEach((id): void => {
                if (!this.stations.has(id)) { throw createStationNotFoundError(id); }
            });
        });

        this.stations.forEach((station): void => {
            if (!this.zones.has(station.zoneID)) { throw createZoneNotFoundError(station.zoneID); }
            station.lineIDs.forEach((id): void => {
                if (!this.lines.has(id)) { throw createLineNotFoundError(id); }
            });
        });

        this.zones.forEach((zone): void => {
            zone.stationIDs.forEach((id): void => {
                if (!this.stations.has(id)) { throw createStationNotFoundError(id); }
            });
        });
    }

    /**
     * Retrieve the default string description of the light rail object.
     * 
     * @hidden
     */
    public get [Symbol.toStringTag](): string { return "LightRail"; }

    /**
     * Retrieve a rail line of the railway system using the ID of the line.
     * 
     * @param id The ID of the rail line
     */
    public getLineById(id: string): LightRail.Line {

        return this.lines.has(id) ? this.lines.get(id) : null;
    }

    /**
     * Retrieve a list of rail lines that the given station is one of theirs.
     * 
     * @param station The targeted station
     */
    public getLinesByStation(station: LightRail.Station): LightRail.Line[] {

        if (!station) { return []; }

        const lines: LightRail.Line[] = [];
        station.lineIDs.forEach((id): void => {
            if (isFullString(id) && this.lines.has(id)) { lines.push(this.getLineById(id)); }
        });

        return lines;
    }

    /**
     * Retrieve a list of rail lines that the station with the given ID is one of 
     * theirs.
     * 
     * @param stationId The ID of the targeted station
     */
    public getLinesByStationId(stationId: string): LightRail.Line[] {

        return this.getLinesByStation(this.getStationById(stationId));
    }

    /**
     * Retrieve a rail station of the railway system using the ID of the station.
     * 
     * @param id The ID of the rail station
     */
    public getStationById(id: string): LightRail.Station {

        return this.stations.has(id) ? this.stations.get(id) : null;
    }

    /**
     * Retrieve a list of rail stations of the given line.
     * 
     * @param line The targeted line
     */
    public getStationsByLine(line: LightRail.Line): LightRail.Station[] {

        if (!line) { return []; }

        const stations: LightRail.Station[] = [];
        line.stationIDs.forEach((id): void => {
            if (isFullString(id) && this.stations.has(id)) { stations.push(this.getStationById(id)); }
        });

        return stations;
    }

    /**
     * Retrieve a list of rail stations of the line with the given ID.
     * 
     * @param lineId The ID of the targeted line
     */
    public getStationsByLineId(lineId: string): LightRail.Station[] {

        return this.getStationsByLine(this.getLineById(lineId));
    }

    /**
     * Retrieve a list of rail stations of the given zone.
     * 
     * @param zone The targeted zone
     */
    public getStationsByZone(zone: LightRail.Zone): LightRail.Station[] {

        if (!zone) { return []; }

        const stations: LightRail.Station[] = [];
        zone.stationIDs.forEach((id): void => {
            if (isFullString(id) && this.stations.has(id)) { stations.push(this.getStationById(id)); }
        });

        return stations;
    }

    /**
     * Retrieve a list of rail stations of the zone with the given ID.
     * 
     * @param zoneId The ID of the targeted zone
     */
    public getStationsByZoneId(zoneId: string): LightRail.Station[] {

        return this.getStationsByZone(this.getZoneById(zoneId));
    }

    /**
     * Retrieve a rail zone of the railway system using the ID of the zone.
     * 
     * @param id The ID of the rail zone
     */
    public getZoneById(id: string): LightRail.Zone {

        return this.zones.has(id) ? this.zones.get(id) : null;
    }

    /**
     * Retrieve the rail zone of the given station.
     * 
     * @param station The targeted station
     */
    public getZoneByStation(station: LightRail.Station): LightRail.Zone {

        if (!station) { return null; }
        return this.getZoneById(station.zoneID);
    }

    /**
     * Retrieve the rail zone of the given station with the given ID.
     * 
     * @param stationId The ID of the targeted line
     */
    public getZoneByStationId(stationId: string): LightRail.Zone {

        return this.getZoneByStation(this.getStationById(stationId));
    }

    public toJSON(): LightRail.Object {

        return {
            lines: MapToObj(this.lines),
            stations: MapToObj(this.stations),
            zones: MapToObj(this.zones),
        };
    }

    public toString(): string {

        return JSON.stringify(this);
    }

    public static parse(object: LightRail.Object | TripPlanner.LightRail): LightRail {

        if (isLightRailObject(object)) { return new LightRail(object.lines, object.stations, object.zones); }

        const lines: LightRail.LinesRecord = {};
        const stations: LightRail.StationsRecord = {};
        const zones: LightRail.ZonesRecord = {};

        object.lines.forEach((line): void => {
            Object.assign<LightRail.LinesRecord, LightRail.LinesRecord>(lines, {
                [line.ID]: {
                    id: line.ID,
                    name: {
                        en: line.nameEN,
                        zh: line.name,
                    },
                    theme: `#${ line.color }`,
                    stationIDs: line.stationIDs,
                },
            });
        });

        object.stations.forEach((station): void => {
            Object.assign<LightRail.StationsRecord, LightRail.StationsRecord>(stations, {
                [station.ID]: {
                    id: station.ID,
                    name: {
                        en: station.nameEN,
                        zh: station.name,
                    },
                    coordinate: station.coordinate,
                    zoneID: station.zoneID,
                    lineIDs: station.lineIDs,
                },
            });
        });

        object.zones.forEach((zone): void => {
            Object.assign<LightRail.ZonesRecord, LightRail.ZonesRecord>(zones, {
                [zone.ID]: {
                    id: zone.ID,
                    name: {
                        en: zone.nameEN,
                        zh: zone.name,
                    },
                    stationIDs: zone.stationIDs,
                },
            });
        });

        return new LightRail(lines, stations, zones);
    }
}

export namespace LightRail {

    export interface Object {
        lines: LinesRecord;
        stations: StationsRecord;
        zones: ZonesRecord;
    }

    export interface Line {
        id: string;
        name: LocalizedObject<string>;
        theme: string;
        stationIDs: string[];
    }

    export interface Station {
        id: string;
        name: LocalizedObject<string>;
        coordinate: string;
        zoneID: string;
        lineIDs: string[];
    }

    export interface Zone {
        id: string;
        name: LocalizedObject<string>;
        stationIDs: string[];
    }

    export type LinesMap = Map<string, Line>;
    export type LinesRecord = Record<string, Line>;

    export type StationsMap = Map<string, Station>;
    export type StationsRecord = Record<string, Station>;

    export type ZonesMap = Map<string, Zone>;
    export type ZonesRecord = Record<string, Zone>;
}

export default LightRail;
