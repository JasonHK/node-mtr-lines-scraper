"use strict";

import { getRailwayDetails } from "./core/get-railway-details";
import { getRailwayDetailsSync } from "./core/get-railway-details-sync";

import { HeavyRail } from "./models/heavy-rail";
import { LightRail } from "./models/light-rail";

export { getRailwayDetails } from "./core/get-railway-details";
export { getRailwayDetailsSync } from "./core/get-railway-details-sync";

export { HeavyRail } from "./models/heavy-rail";
export { LightRail } from "./models/light-rail";

export default {
    HeavyRail,
    LightRail,
    getRailwayDetails,
    getRailwayDetailsSync,
};
