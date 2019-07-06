"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const map_to_obj_1 = tslib_1.__importDefault(require("map-to-obj"));
const type_assertions_1 = require("../utilities/type-assertions");
class LightRail {
    constructor(lines, stations, zones) {
        this.lines = new Map();
        this.stations = new Map();
        this.zones = new Map();
        Object.keys(lines).forEach((id) => {
            this.lines.set(id, lines[id]);
        });
        Object.keys(stations).forEach((id) => {
            this.stations.set(id, stations[id]);
        });
        Object.keys(zones).forEach((id) => {
            this.zones.set(id, zones[id]);
        });
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
    getLinesByStationId(stationId) {
        return this.getLinesByStation(this.getStationById(stationId));
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
    getStationsByLineId(lineId) {
        return this.getStationsByLine(this.getLineById(lineId));
    }
    getStationsByZone(zone) {
        if (!zone) {
            return [];
        }
        const stations = [];
        zone.stationIDs.forEach((id) => {
            if (id && this.stations.has(id)) {
                stations.push(this.getStationById(id));
            }
        });
        return stations;
    }
    getStationsByZoneId(zoneId) {
        return this.getStationsByZone(this.getZoneById(zoneId));
    }
    getZoneById(id) {
        return this.zones.get(id);
    }
    getZoneByStation(station) {
        return this.getZoneById(station.zoneID);
    }
    getZoneByStationId(stationId) {
        return this.getZoneByStation(this.getStationById(stationId));
    }
    toJSON() {
        return {
            lines: map_to_obj_1.default(this.lines),
            stations: map_to_obj_1.default(this.stations),
            zones: map_to_obj_1.default(this.zones),
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    static isLightRailObject(object) {
        return type_assertions_1.isObject(object) && !(Array.isArray(object.lines) || Array.isArray(object.stations) || Array.isArray(object.zones));
    }
    static parse(object) {
        if (this.isLightRailObject(object)) {
            return new LightRail(object.lines, object.stations, object.zones);
        }
        const lines = {};
        const stations = {};
        const zones = {};
        object.lines.forEach((line) => {
            Object.assign(lines, {
                [line.ID]: {
                    id: line.ID,
                    name: {
                        en: line.nameEN,
                        zh: line.name,
                    },
                    theme: `#${line.color}`,
                    stationIDs: line.stationIDs,
                },
            });
        });
        object.stations.forEach((station) => {
            Object.assign(stations, {
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
        object.zones.forEach((zone) => {
            Object.assign(zones, {
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
exports.LightRail = LightRail;
