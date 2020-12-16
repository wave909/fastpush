"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const select_1 = require("./select");
const progress_1 = require("./progress");
const delay_1 = require("./delay");
const question_1 = require("./question");
const read_1 = require("./read");
const error_1 = require("./error");
const success_1 = require("./success");
const message_1 = require("./message");
const warn_1 = require("./warn");
exports.ui = {
    select: select_1.select,
    delay: delay_1.delay,
    warn: warn_1.warn,
    progress: progress_1.progress,
    question: question_1.question,
    read: read_1.read,
    error: error_1.error,
    success: success_1.success,
    message: message_1.message,
};
//# sourceMappingURL=index.js.map