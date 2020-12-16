"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mappers_1 = require("../mappers");
/**
 * https://docs.fastlane.tools/actions/match/
 * fastlane run match - show documentation
 */
function match(type, args) {
    return {
        type: 'ios',
        name: 'match',
        args: [
            { name: 'type', value: type },
            ...mappers_1.mapObjectToArgs(args)
        ],
    };
}
exports.match = match;
//# sourceMappingURL=match.js.map