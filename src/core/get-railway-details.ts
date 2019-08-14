"use strict";

import { RailwayDetails } from "../interfaces/railway-details";
import { RailwayObject } from "../interfaces/railway-object";
import { TripPlanner } from "../interfaces/trip-planner";

import { isRailwayObject, isTripPlanner } from "../utilities/type-assertions";

import { getRailwayDetailsSync } from "./get-railway-details-sync";
import { getTripPlanner } from "./get-trip-planner";

/**
 * Retrieve the railway details from the provider, or parse from an existing railway object or trip planner.
 * @param object An existing object to be parsed, optional
 */
export async function getRailwayDetails(object?: RailwayObject | TripPlanner): Promise<RailwayDetails> {

    if (isRailwayObject(object) || isTripPlanner(object)) { return getRailwayDetailsSync(object); }

    const planner: TripPlanner = await getTripPlanner();
    return getRailwayDetailsSync(planner);
}

export default getRailwayDetails;
