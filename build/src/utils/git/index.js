"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commit_1 = require("./commit");
const tag_1 = require("./tag");
const assertClean_1 = require("./assertClean");
const push_1 = require("./push");
exports.git = {
    commit: commit_1.commit,
    tag: tag_1.tag,
    assertClean: assertClean_1.assertClean,
    push: push_1.push,
};
//# sourceMappingURL=index.js.map