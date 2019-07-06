import { RailwayDetails } from "../interfaces/railway-details";
import { RailwayObject } from "../interfaces/railway-object";
import { TripPlanner } from "../interfaces/trip-planner";
export declare function getRailwayDetails(object?: RailwayObject | TripPlanner): Promise<RailwayDetails>;
export declare function getRailwayDetailsSync(object: RailwayObject | TripPlanner): RailwayDetails;
