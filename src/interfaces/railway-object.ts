"use strict";

import { HeavyRail } from "../models/heavy-rail";
import { LightRail } from "../models/light-rail";

export interface RailwayObject {
    heavyRail: HeavyRail.Object;
    lightRail: LightRail.Object;
}
