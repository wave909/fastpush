#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("../ui");
const fastpush_1 = require("./fastpush");
const publish_1 = require("../publish");
const parsedOptions = fastpush_1.fastpush(process.argv);
publish_1.publish(parsedOptions).catch(e => {
    ui_1.ui.error('Unhandler error: ' + e);
    ui_1.ui.error('Open issue: https://github.com/lamantin-group/fastpush/issues/new');
});
//# sourceMappingURL=index.js.map