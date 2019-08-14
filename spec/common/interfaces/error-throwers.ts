"use strict";

import { ErrorThrower } from "./error-thrower";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ErrorThrowers<T = any> = ErrorThrower<T>[];
