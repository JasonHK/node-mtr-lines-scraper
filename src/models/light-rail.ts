"use strict";

import MapToObj from "map-to-obj";

import { LocalizedObject } from "../interfaces/localized-object";
import { TripPlanner } from "../interfaces/trip-planner";

import { isObject } from "../utilities/type-assertions";

export class LightRail {

    private readonly lines: LightRail.LinesMap = new Map();
    private readonly stations: LightRail.StationsMap = new Map();
    private readonly zones: LightRail.ZoneMap = new Map();

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
    }

    public getLineById(id: string): LightRail.Line {

        return this.lines.get(id);
    }

    public getLinesByStation(station: LightRail.Station): LightRail.Line[] {

        if (!station) { return []; }

        const lines: LightRail.Line[] = [];
        station.lineIDs.forEach((id): void => {
            if (id && this.lines.has(id)) { lines.push(this.getLineById(id)); }
        });

        return lines;
    }

    public getLinesByStationId(stationId: string): LightRail.Line[] {

        return this.getLinesByStation(this.getStationById(stationId));
    }

    public getStationById(id: string): LightRail.Station {

        return this.stations.get(id);
    }

    public getStationsByLine(line: LightRail.Line): LightRail.Station[] {

        if (!line) { return []; }

        const stations: LightRail.Station[] = [];
        line.stationIDs.forEach((id): void => {
            if (id && this.stations.has(id)) { stations.push(this.getStationById(id)); }
        });

        return stations;
    }

    public getStationsByLineId(lineId: string): LightRail.Station[] {

        return this.getStationsByLine(this.getLineById(lineId));
    }

    public getStationsByZone(zone: LightRail.Zone): LightRail.Station[] {

        if (!zone) { return []; }

        const stations: LightRail.Station[] = [];
        zone.stationIDs.forEach((id): void => {
            if (id && this.stations.has(id)) { stations.push(this.getStationById(id)); }
        });

        return stations;
    }

    public getStationsByZoneId(zoneId: string): LightRail.Station[] {

        return this.getStationsByZone(this.getZoneById(zoneId));
    }

    public getZoneById(id: string): LightRail.Zone {

        return this.zones.get(id);
    }

    public getZoneByStation(station: LightRail.Station): LightRail.Zone {

        return this.getZoneById(station.zoneID);
    }

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

    private static isLightRailObject(object: LightRail.Object | TripPlanner.LightRail): object is LightRail.Object {

        // eslint-disable-next-line max-len
        return isObject(object) && !(Array.isArray(object.lines) || Array.isArray(object.stations) || Array.isArray(object.zones));
    }

    public static parse(object: LightRail.Object | TripPlanner.LightRail): LightRail {

        if (this.isLightRailObject(object)) { return new LightRail(object.lines, object.stations, object.zones); }

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

    export type ZoneMap = Map<string, Zone>;
    export type ZonesRecord = Record<string, Zone>;
}
