"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mappers_1 = require("../mappers");
/**
 * The best way to manage your TestFlight testers and builds from your terminal
 * Pilot makes it easier to manage your app on Apple’s TestFlight.
 *
 * Pilot uses spaceship.airforce to interact with App Store Connect 🚀
 * @param args
 */
function pilot(args) {
    return {
        type: "ios",
        name: "pilot",
        args: mappers_1.mapObjectToArgs(args)
    };
}
exports.pilot = pilot;
//# sourceMappingURL=pilot.js.map