import { LocalizedObject } from "../interfaces/localized-object";
import { TripPlanner } from "../interfaces/trip-planner";
export declare class HeavyRail {
    private readonly lines;
    private readonly stations;
    private readonly lineCodes;
    private readonly stationCodes;
    constructor(lines: HeavyRail.LinesRecord, stations: HeavyRail.StationsRecord);
    getLineByCode(code: string): HeavyRail.Line;
    getLineById(id: string): HeavyRail.Line;
    getLinesByStation(station: HeavyRail.Station): HeavyRail.Line[];
    getLinesByStationCode(stationCode: string): HeavyRail.Line[];
    getLinesByStationId(stationId: string): HeavyRail.Line[];
    getStationByCode(code: string): HeavyRail.Station;
    getStationById(id: string): HeavyRail.Station;
    getStationsByLine(line: HeavyRail.Line): HeavyRail.Station[];
    getStationsByLineCode(lineCode: string): HeavyRail.Station[];
    getStationsByLineId(lineId: string): HeavyRail.Station[];
    toJSON(): HeavyRail.Object;
    toString(): string;
    private static isHeavyRailObject;
    static parse(object: HeavyRail.Object | TripPlanner.HeavyRail): HeavyRail;
}
export declare namespace HeavyRail {
    interface Object {
        lines: LinesRecord;
        stations: StationsRecord;
    }
    interface Line {
        id: string;
        code: string;
        name: LocalizedObject<string>;
        theme: string;
        stationIDs: string[];
        stationCodes: string[];
    }
    interface Station {
        id: string;
        code: string;
        name: LocalizedObject<string>;
        coordinate: string;
        lineIDs: string[];
        lineCodes: string[];
    }
    type LinesMap = Map<string, Line>;
    type LinesRecord = Record<string, Line>;
    type StationsMap = Map<string, Station>;
    type StationsRecord = Record<string, Station>;
}
