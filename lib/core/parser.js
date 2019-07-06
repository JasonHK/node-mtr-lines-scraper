"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const heavy_rail_1 = require("../models/heavy-rail");
const light_rail_1 = require("../models/light-rail");
const type_assertions_1 = require("../utilities/type-assertions");
const loader_1 = require("./loader");
function getRailwayDetails(object) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (type_assertions_1.isObject(object)) {
            return getRailwayDetailsSync(object);
        }
        const planner = yield loader_1.getTripPlanner();
        return getRailwayDetailsSync(planner);
    });
}
exports.getRailwayDetails = getRailwayDetails;
function getRailwayDetailsSync(object) {
    return {
        heavyRail: heavy_rail_1.HeavyRail.parse(object.heavyRail),
        lightRail: light_rail_1.LightRail.parse(object.lightRail),
    };
}
exports.getRailwayDetailsSync = getRailwayDetailsSync;
