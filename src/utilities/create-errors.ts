"use strict";

import { LineNotFoundError } from "../errors/line-not-found-error";
import { StationNotFoundError } from "../errors/station-not-found-error";
import { ZoneNotFoundError } from "../errors/zone-not-found-error";

export function createLineNotFoundError(id: string): LineNotFoundError {

    return new LineNotFoundError(`Missing line with an ID number of ${ id }.`);
}

export function createStationNotFoundError(id: string): StationNotFoundError {

    return new StationNotFoundError(`Missing station with an ID number of ${ id }.`);
}

export function createZoneNotFoundError(id: string): ZoneNotFoundError {

    return new ZoneNotFoundError(`Missing zone with an ID number of ${ id }.`);
}
