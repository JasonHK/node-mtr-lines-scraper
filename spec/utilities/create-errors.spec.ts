"use strict";

import { LineNotFoundError } from "../../src/errors/line-not-found-error";
import { StationNotFoundError } from "../../src/errors/station-not-found-error";
import { ZoneNotFoundError } from "../../src/errors/zone-not-found-error";

import {
    createLineNotFoundError, createStationNotFoundError, createZoneNotFoundError,
} from "../../src/utilities/create-errors";

describe("createLineNotFoundError()", (): void => {

    it("should return a new LineNotFoundError instance", (): void => {

        expect(createLineNotFoundError("0")).toBeInstanceOf(LineNotFoundError);
    });
});

describe("createStationNotFoundError()", (): void => {

    it("should return a new StationNotFoundError instance", (): void => {

        expect(createStationNotFoundError("0")).toBeInstanceOf(StationNotFoundError);
    });
});

describe("createZoneNotFoundError()", (): void => {

    it("should return a new ZoneNotFoundError instance", (): void => {

        expect(createZoneNotFoundError("0")).toBeInstanceOf(ZoneNotFoundError);
    });
});
