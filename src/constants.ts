"use strict";

import { IncomingHttpHeaders } from "http";

export const REMOTE_ENDPOINT = "http://www.mtr.com.hk/share/customer/include/jp.php";

export const REQUEST_HEADERS: IncomingHttpHeaders = {
    "referer": "http://www.mtr.com.hk/ch/customer/main/index.html",
};

export const SCRIPT_REGEXP = /(?:heavyRailDetails|lightRailDetails)/;
