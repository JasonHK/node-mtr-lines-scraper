"use strict";

import { RailwayDetails } from "../interfaces/railway-details";
import { RailwayObject } from "../interfaces/railway-object";
import { TripPlanner } from "../interfaces/trip-planner";

import { HeavyRail } from "../models/heavy-rail";
import { LightRail } from "../models/light-rail";

import { isRailwayObject, isTripPlanner } from "../utilities/type-assertions";

import { getTripPlanner } from "./loader";

/**
 * Retrieve the railway details from the provider, or parse from an existing railway object or trip planner.
 * @param object An existing object to be parsed, optional
 */
export async function getRailwayDetails(object?: RailwayObject | TripPlanner): Promise<RailwayDetails> {

    if (isRailwayObject(object) || isTripPlanner(object)) { return getRailwayDetailsSync(object); }

    const planner: TripPlanner = await getTripPlanner();
    return getRailwayDetailsSync(planner);
}

/**
 * Retrieve the railway details from an existing railway object or trip planner.
 * @param object An existing object to be parsed
 */
export function getRailwayDetailsSync(object: RailwayObject | TripPlanner): RailwayDetails {

    return {
        heavyRail: HeavyRail.parse(object.heavyRail),
        lightRail: LightRail.parse(object.lightRail),
    };
}
