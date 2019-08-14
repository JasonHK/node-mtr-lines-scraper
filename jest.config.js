"use strict";

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    rootDir: ".",
    testPathIgnorePatterns: [
        "/node_modules/",
    ],
    coverageDirectory: "coverage",
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/index.ts",
        "!src/types/**/*",
    ],
    coverageReporters: ["html", "json", "lcov", "text"],
};
