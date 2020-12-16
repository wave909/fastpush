"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mappers_1 = require("../mappers");
/**
 * Alias for the build_app action
 * gym builds and packages iOS apps for you. It takes care of all the heavy lifting and makes it super easy to generate a signed ipa or app file 💪
 *
 * https://docs.fastlane.tools/actions/gym/
 */
function gym(args) {
    return {
        type: "ios",
        name: "gym",
        args: mappers_1.mapObjectToArgs(args)
    };
}
exports.gym = gym;
//# sourceMappingURL=gym.js.map