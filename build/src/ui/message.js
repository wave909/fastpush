"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function message(title) {
    console.log(chalk_1.default.white(title));
}
exports.message = message;
//# sourceMappingURL=message.js.map