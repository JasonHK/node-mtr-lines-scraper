"use strict";

import Axios, { AxiosResponse } from "axios";
import { load as loadHTML } from "cheerio";
import { isFullString } from "is-what";
import { Context, Script } from "vm";

import { REMOTE_ENDPOINT, REQUEST_HEADERS, SCRIPT_REGEXP } from "../constants";

import { TripPlanner } from "../interfaces/trip-planner";

interface ScriptContext extends Context {
    heavyRailDetails: TripPlanner.HeavyRail;
    lightRailDetails: TripPlanner.LightRail;
}

/**
 * Retrieve the trip planner from the provider.
 */
export async function getTripPlanner(): Promise<TripPlanner> {

    const response: AxiosResponse<string> = await Axios.post(REMOTE_ENDPOINT, undefined, {
        responseType: "text",
        headers: REQUEST_HEADERS,
    });

    let source = "";

    const document: CheerioStatic = loadHTML(response.data);
    document("script").each((index, element): void => {
        element.childNodes.forEach((child): void => {
            if (isFullString(child.data) && SCRIPT_REGEXP.test(child.data)) {
                source += `${ child.data }\n`;
            }
        });
    });

    const sandbox: ScriptContext = {
        heavyRailDetails: undefined,
        lightRailDetails: undefined,
    };

    const script: Script = new Script(source);
    script.runInNewContext(sandbox);

    return {
        heavyRail: sandbox.heavyRailDetails,
        lightRail: sandbox.lightRailDetails,
    };
}
