"use strict";

import { isArray, isObjectLike, isPlainObject } from "is-what";

import { RailwayObject } from "../interfaces/railway-object";
import { TripPlanner } from "../interfaces/trip-planner";

import { HeavyRail } from "../models/heavy-rail";
import { LightRail } from "../models/light-rail";

function isHeavyRailObjectCore(object: unknown): object is HeavyRail.Object {

    // eslint-disable-next-line max-len
    return isObjectLike<HeavyRail.Object>(object) && (isPlainObject(object.lines) && isPlainObject(object.stations)) && !isPlainObject((object as unknown as LightRail.Object).zones);
}

function isHeavyRailTripPlannerCore(object: unknown): object is TripPlanner.HeavyRail {

    // eslint-disable-next-line max-len
    return isObjectLike<TripPlanner.HeavyRail>(object) && (isArray(object.lines) && isArray(object.stations)) && !isArray((object as unknown as TripPlanner.LightRail).zones);
}

function isLightRailObjectCore(object: unknown): object is LightRail.Object {

    // eslint-disable-next-line max-len
    return isObjectLike<LightRail.Object>(object) && (isPlainObject(object.lines) && isPlainObject(object.stations) && isPlainObject(object.zones));
}

function isLightRailTripPlannerCore(object: unknown): object is TripPlanner.LightRail {

    // eslint-disable-next-line max-len
    return isObjectLike<TripPlanner.LightRail>(object) && (isArray(object.lines) && isArray(object.stations) && isArray(object.zones));
}

export function isHeavyRailObject(object: unknown): object is HeavyRail.Object {

    // eslint-disable-next-line max-len
    return isHeavyRailObjectCore(object) && !(isHeavyRailTripPlannerCore(object) || isLightRailObjectCore(object) || isLightRailTripPlannerCore(object));
}

export function isHeavyRailTripPlanner(object: unknown): object is TripPlanner.HeavyRail {

    // eslint-disable-next-line max-len
    return isHeavyRailTripPlannerCore(object) && !(isHeavyRailObjectCore(object) || isLightRailObjectCore(object) || isLightRailTripPlannerCore(object));
}

export function isLightRailObject(object: unknown): object is LightRail.Object {

    // eslint-disable-next-line max-len
    return isLightRailObjectCore(object) && !(isHeavyRailObjectCore(object) || isHeavyRailTripPlannerCore(object) || isLightRailTripPlannerCore(object));
}

export function isLightRailTripPlanner(object: unknown): object is TripPlanner.LightRail {

    // eslint-disable-next-line max-len
    return isLightRailTripPlannerCore(object) && !(isHeavyRailObjectCore(object) || isHeavyRailTripPlannerCore(object) || isLightRailObjectCore(object));
}

export function isRailwayObject(object: unknown): object is RailwayObject {

    // eslint-disable-next-line max-len
    return isObjectLike<RailwayObject>(object) && (isHeavyRailObject(object.heavyRail) && isLightRailObject(object.lightRail));
}

export function isTripPlanner(object: unknown): object is TripPlanner {

    // eslint-disable-next-line max-len
    return isObjectLike<TripPlanner>(object) && (isHeavyRailTripPlanner(object.heavyRail) && isLightRailTripPlanner(object.lightRail));
}
