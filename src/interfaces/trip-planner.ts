"use strict";

export interface TripPlanner {
    heavyRail: TripPlanner.HeavyRail;
    lightRail: TripPlanner.LightRail;
}

export namespace TripPlanner {

    interface DetailsBase {
        errorCode: string;
        errorMsg: string;
    }

    namespace DetailsBase {

        export interface Base<T = number | string> {
            ID: T;
            nameEN: string;
            name: string;
        }

        export interface Line<T = number | string> extends Base<T> {
            color: string;
            stationIDs: T[];
        }

        export interface Station<T = number | string> extends Base<T> {
            coordinate: string;
            lineIDs: T[];
        }
    }

    export interface HeavyRail extends DetailsBase {
        lines: HeavyRail.Line[];
        stations: HeavyRail.Station[];
    }

    export namespace HeavyRail {

        export interface Line extends DetailsBase.Line<number> {
            alias: string;
        }

        export interface Station extends DetailsBase.Station<number> {
            alias: string;
        }
    }

    export interface LightRail extends DetailsBase {
        lines: LightRail.Line[];
        stations: LightRail.Station[];
        zones: LightRail.Zone[];
    }

    export namespace LightRail {

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        export interface Line extends DetailsBase.Line<string> {}

        export interface Station extends DetailsBase.Station<string> {
            zoneID: string;
        }

        export interface Zone extends DetailsBase.Base<string> {
            stationIDs: string[];
        }
    }
}
