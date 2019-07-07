"use strict";

import Axios, { AxiosResponse } from "axios";
import { load as loadHTML } from "cheerio";
import { Context, Script } from "vm";

import { REMOTE_ENDPOINT } from "../constants";

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
        headers: {
            "Referer": "http://www.mtr.com.hk/ch/customer/main/index.html",
        },
    });

    let source = "";

    const document: CheerioStatic = loadHTML(response.data);
    document("script").each((index, element): void => {
        element.childNodes.forEach((child): void => {
            if (child.data && /(?:heavyRailDetails|lightRailDetails)/.test(child.data)) {
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
