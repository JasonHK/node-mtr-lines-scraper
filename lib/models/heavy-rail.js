"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const map_to_obj_1 = tslib_1.__importDefault(require("map-to-obj"));
const type_assertions_1 = require("../utilities/type-assertions");
class HeavyRail {
    constructor(lines, stations) {
        this.lines = new Map();
        this.stations = new Map();
        this.lineCodes = new Map();
        this.stationCodes = new Map();
        Object.keys(lines).forEach((id) => {
            this.lineCodes.set(lines[id].code, id);
            this.lines.set(id, lines[id]);
        });
        Object.keys(stations).forEach((id) => {
            this.stationCodes.set(stations[id].code, id);
            this.stations.set(id, stations[id]);
        });
        this.lines.forEach((line) => {
            if (line.stationCodes.length !== line.stationIDs.length) {
                line.stationCodes = [];
                line.stationIDs.forEach((id) => {
                    if (this.stations.has(id)) {
                        line.stationCodes.push(this.stations.get(id).code);
                    }
                    else {
                        throw new Error(`Missing station with an ID number of ${id}.`);
                    }
                });
            }
        });
        this.stations.forEach((station) => {
            if (station.lineCodes.length !== station.lineIDs.length) {
                station.lineCodes = [];
                station.lineIDs.forEach((id) => {
                    if (this.lines.has(id)) {
                        station.lineCodes.push(this.lines.get(id).code);
                    }
                    else {
                        throw new Error(`Missing line with an ID number of ${id}.`);
                    }
                });
            }
        });
    }
    getLineByCode(code) {
        return this.lineCodes.has(code) ? this.getLineById(this.lineCodes.get(code)) : undefined;
    }
    getLineById(id) {
        return this.lines.get(id);
    }
    getLinesByStation(station) {
        if (!station) {
            return [];
        }
        const lines = [];
        station.lineIDs.forEach((id) => {
            if (id && this.lines.has(id)) {
                lines.push(this.getLineById(id));
            }
        });
        return lines;
    }
    getLinesByStationCode(stationCode) {
        return this.getLinesByStation(this.getStationByCode(stationCode));
    }
    getLinesByStationId(stationId) {
        return this.getLinesByStation(this.getStationById(stationId));
    }
    getStationByCode(code) {
        return this.stationCodes.has(code) ? this.getStationById(this.stationCodes.get(code)) : undefined;
    }
    getStationById(id) {
        return this.stations.get(id);
    }
    getStationsByLine(line) {
        if (!line) {
            return [];
        }
        const stations = [];
        line.stationIDs.forEach((id) => {
            if (id && this.stations.has(id)) {
                stations.push(this.getStationById(id));
            }
        });
        return stations;
    }
    getStationsByLineCode(lineCode) {
        return this.getStationsByLine(this.getLineByCode(lineCode));
    }
    getStationsByLineId(lineId) {
        return this.getStationsByLine(this.getLineById(lineId));
    }
    toJSON() {
        return {
            lines: map_to_obj_1.default(this.lines),
            stations: map_to_obj_1.default(this.stations),
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    static isHeavyRailObject(object) {
        return type_assertions_1.isObject(object) && !(Array.isArray(object.lines) || Array.isArray(object.stations));
    }
    static parse(object) {
        if (this.isHeavyRailObject(object)) {
            return new HeavyRail(object.lines, object.stations);
        }
        const lines = {};
        const stations = {};
        object.lines.forEach((line) => {
            Object.assign(lines, {
                [line.ID.toString()]: {
                    id: line.ID.toString(),
                    code: line.alias,
                    name: {
                        en: line.nameEN,
                        zh: line.name,
                    },
                    theme: `#${line.color}`,
                    stationIDs: line.stationIDs.map((id) => { return id.toString(); }),
                    stationCodes: [],
                },
            });
        });
        object.stations.forEach((station) => {
            Object.assign(stations, {
                [station.ID.toString()]: {
                    id: station.ID.toString(),
                    code: station.alias,
                    name: {
                        en: station.nameEN,
                        zh: station.name,
                    },
                    coordinate: station.coordinate,
                    lineIDs: station.lineIDs.map((id) => { return id.toString(); }),
                    lineCodes: [],
                },
            });
        });
        return new HeavyRail(lines, stations);
    }
}
exports.HeavyRail = HeavyRail;
