"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = require("shelljs");
function commit(message) {
    shelljs_1.exec('git commit -a -m "' + message + '"');
}
exports.commit = commit;
//# sourceMappingURL=commit.js.map