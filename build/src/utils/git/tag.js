"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = require("shelljs");
function tag(name, description = '') {
    var _a;
    if (((_a = description) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        shelljs_1.exec(`git tag -a ${name} -m '${description}'`);
    }
    else {
        shelljs_1.exec(`git tag -a ${name}`);
    }
}
exports.tag = tag;
//# sourceMappingURL=tag.js.map