"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = require("shelljs");
/**
 * Push code and tags
 */
function push() {
    shelljs_1.exec('git push');
    shelljs_1.exec('git push --tags');
}
exports.push = push;
//# sourceMappingURL=push.js.map