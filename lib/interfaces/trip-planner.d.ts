export interface TripPlanner {
    heavyRail: TripPlanner.HeavyRail;
    lightRail: TripPlanner.LightRail;
}
export declare namespace TripPlanner {
    interface DetailsBase {
        errorCode: string;
        errorMsg: string;
    }
    namespace DetailsBase {
        interface Base<T = number | string> {
            ID: T;
            nameEN: string;
            name: string;
        }
        interface Line<T = number | string> extends Base<T> {
            color: string;
            stationIDs: T[];
        }
        interface Station<T = number | string> extends Base<T> {
            coordinate: string;
            lineIDs: T[];
        }
    }
    interface HeavyRail extends DetailsBase {
        lines: HeavyRail.Line[];
        stations: HeavyRail.Station[];
    }
    namespace HeavyRail {
        interface Line extends DetailsBase.Line<number> {
            alias: string;
        }
        interface Station extends DetailsBase.Station<number> {
            alias: string;
        }
    }
    interface LightRail extends DetailsBase {
        lines: LightRail.Line[];
        stations: LightRail.Station[];
        zones: LightRail.Zone[];
    }
    namespace LightRail {
        interface Line extends DetailsBase.Line<string> {
        }
        interface Station extends DetailsBase.Station<string> {
            zoneID: string;
        }
        interface Zone extends DetailsBase.Base<string> {
            stationIDs: string[];
        }
    }
}
