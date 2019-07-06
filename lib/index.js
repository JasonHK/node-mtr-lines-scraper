"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./core/parser");
exports.getRailwayDetails = parser_1.getRailwayDetails;
exports.getRailwayDetailsSync = parser_1.getRailwayDetailsSync;
var heavy_rail_1 = require("./models/heavy-rail");
exports.HeavyRail = heavy_rail_1.HeavyRail;
var light_rail_1 = require("./models/light-rail");
exports.LightRail = light_rail_1.LightRail;
