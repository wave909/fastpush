"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mappers_1 = require("../mappers");
function supply(args) {
    return {
        type: "android",
        name: "supply",
        args: mappers_1.mapObjectToArgs(args)
    };
}
exports.supply = supply;
//# sourceMappingURL=supply.js.map