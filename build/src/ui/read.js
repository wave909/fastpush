"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
function ask(question, fallback = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield inquirer.prompt({
            type: 'confirm',
            name: 'answer',
            message: question,
            default: fallback,
        });
        return result.answer;
    });
}
exports.ask = ask;
function read(title, fallback = '') {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield inquirer.prompt({
            type: 'input',
            name: 'answer',
            message: title,
            default: fallback,
        });
        inquirer.prompt({});
        return result.answer;
    });
}
exports.read = read;
//# sourceMappingURL=read.js.map