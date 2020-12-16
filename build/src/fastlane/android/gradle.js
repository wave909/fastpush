"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mappers_1 = require("../mappers");
function gradle(task, args) {
    return {
        type: 'android',
        name: 'gradle',
        args: [
            { name: 'task', value: task },
            ...mappers_1.mapObjectToArgs(args)
        ],
    };
}
exports.gradle = gradle;
//# sourceMappingURL=gradle.js.map