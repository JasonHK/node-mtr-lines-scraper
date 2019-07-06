"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const cheerio_1 = require("cheerio");
const vm_1 = require("vm");
const constants_1 = require("../constants");
function getTripPlanner() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.post(constants_1.REMOTE_ENDPOINT, undefined, {
            responseType: "text",
            headers: {
                "Referer": "http://www.mtr.com.hk/ch/customer/main/index.html",
            },
        });
        let source = "";
        const document = cheerio_1.load(response.data);
        document("script").each((index, element) => {
            element.childNodes.forEach((child) => {
                if (child.data && /(?:heavyRailDetails|lightRailDetails)/.test(child.data)) {
                    source += `${child.data}\n`;
                }
            });
        });
        const sandbox = {
            heavyRailDetails: undefined,
            lightRailDetails: undefined,
        };
        const script = new vm_1.Script(source);
        script.runInNewContext(sandbox);
        return {
            heavyRail: sandbox.heavyRailDetails,
            lightRail: sandbox.lightRailDetails,
        };
    });
}
exports.getTripPlanner = getTripPlanner;
