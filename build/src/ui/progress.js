"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ora_1 = __importDefault(require("ora"));
function progress(title) {
    return ora_1.default().start(title);
}
exports.progress = progress;
//# sourceMappingURL=progress.js.map