"use strict";

import { HeavyRail } from "../../../src/models/heavy-rail";
import { LightRail } from "../../../src/models/light-rail";

import { RailwayDetails } from "../../../src/interfaces/railway-details";

export const RailwayDetailsValidator: RailwayDetails = {
    heavyRail: expect.any(HeavyRail),
    lightRail: expect.any(LightRail),
};
