"use strict";

import { RailwayDetails } from "../interfaces/railway-details";
import { RailwayObject } from "../interfaces/railway-object";
import { TripPlanner } from "../interfaces/trip-planner";

import { HeavyRail } from "../models/heavy-rail";
import { LightRail } from "../models/light-rail";

import { isObject } from "../utilities/type-assertions";

import { getTripPlanner } from "./loader";

export async function getRailwayDetails(object?: RailwayObject | TripPlanner): Promise<RailwayDetails> {

    if (isObject(object)) { return getRailwayDetailsSync(object); }

    const planner: TripPlanner = await getTripPlanner();
    return getRailwayDetailsSync(planner);
}

export function getRailwayDetailsSync(object: RailwayObject | TripPlanner): RailwayDetails {

    return {
        heavyRail: HeavyRail.parse(object.heavyRail),
        lightRail: LightRail.parse(object.lightRail),
    };
}
