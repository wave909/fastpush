"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jetpack = require("fs-jetpack");
const mappers_1 = require("../mappers");
const __1 = require("..");
function ios(lanes, projectDirectory = jetpack.cwd()) {
    const command = mappers_1.mapLanesToString(lanes);
    __1.fastlane(projectDirectory + '/ios', `context ${command}`);
}
exports.ios = ios;
//# sourceMappingURL=index.js.map