"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const jetpack = require("fs-jetpack");
const mappers_1 = require("../mappers");
const index_1 = require("../index");
__export(require("./gradle"));
__export(require("./supply"));
function android(lanes, projectDirectory = jetpack.cwd()) {
    const command = mappers_1.mapLanesToString(lanes);
    index_1.fastlane(projectDirectory + '/android', `context ${command}`);
}
exports.android = android;
//# sourceMappingURL=index.js.map