"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function error(title) {
    console.error(chalk_1.default.red(title));
}
exports.error = error;
//# sourceMappingURL=error.js.map