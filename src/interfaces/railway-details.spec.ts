"use strict";

import { HeavyRail } from "../models/heavy-rail";
import { LightRail } from "../models/light-rail";

import { RailwayDetails } from "./railway-details";

export const VALID_RAILWAY_DETAILS: RailwayDetails = {
    heavyRail: expect.any(HeavyRail),
    lightRail: expect.any(LightRail),
};
