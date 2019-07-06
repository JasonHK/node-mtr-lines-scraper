import { LocalizedObject } from "../interfaces/localized-object";
import { TripPlanner } from "../interfaces/trip-planner";
export declare class LightRail {
    private readonly lines;
    private readonly stations;
    private readonly zones;
    constructor(lines: LightRail.LinesRecord, stations: LightRail.StationsRecord, zones: LightRail.ZonesRecord);
    getLineById(id: string): LightRail.Line;
    getLinesByStation(station: LightRail.Station): LightRail.Line[];
    getLinesByStationId(stationId: string): LightRail.Line[];
    getStationById(id: string): LightRail.Station;
    getStationsByLine(line: LightRail.Line): LightRail.Station[];
    getStationsByLineId(lineId: string): LightRail.Station[];
    getStationsByZone(zone: LightRail.Zone): LightRail.Station[];
    getStationsByZoneId(zoneId: string): LightRail.Station[];
    getZoneById(id: string): LightRail.Zone;
    getZoneByStation(station: LightRail.Station): LightRail.Zone;
    getZoneByStationId(stationId: string): LightRail.Zone;
    toJSON(): LightRail.Object;
    toString(): string;
    private static isLightRailObject;
    static parse(object: LightRail.Object | TripPlanner.LightRail): LightRail;
}
export declare namespace LightRail {
    interface Object {
        lines: LinesRecord;
        stations: StationsRecord;
        zones: ZonesRecord;
    }
    interface Line {
        id: string;
        name: LocalizedObject<string>;
        theme: string;
        stationIDs: string[];
    }
    interface Station {
        id: string;
        name: LocalizedObject<string>;
        coordinate: string;
        zoneID: string;
        lineIDs: string[];
    }
    interface Zone {
        id: string;
        name: LocalizedObject<string>;
        stationIDs: string[];
    }
    type LinesMap = Map<string, Line>;
    type LinesRecord = Record<string, Line>;
    type StationsMap = Map<string, Station>;
    type StationsRecord = Record<string, Station>;
    type ZoneMap = Map<string, Zone>;
    type ZonesRecord = Record<string, Zone>;
}
