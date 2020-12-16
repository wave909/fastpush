"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const ui_1 = require("../../ui");
function addFile(file) {
    if (!file || file.length <= 0) {
        ui_1.ui.error(`Can't read env file: ${file}`);
        return null;
    }
    return dotenv.config({ path: file });
}
exports.addFile = addFile;
//# sourceMappingURL=addFile.js.map