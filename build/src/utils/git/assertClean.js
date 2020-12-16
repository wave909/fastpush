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
const shelljs_1 = require("shelljs");
const read_1 = require("../../ui/read");
const ui_1 = require("../../ui");
/**
 * Throw error if git directory is not clean on return *true* otherwise
 */
function assertClean() {
    return __awaiter(this, void 0, void 0, function* () {
        ui_1.ui.message('🔍 Trying find uncommitted changes...');
        const result = shelljs_1.exec('git status -s').trim();
        if (result.length === 0) {
            ui_1.ui.message('🌝 Git directory is clean');
            return true;
        }
        else {
            const isContinue = yield read_1.ask('You has uncommitted changes. Continue?', true);
            if (isContinue) {
                ui_1.ui.message('🌚 You are crazy...');
                return true;
            }
            else {
                throw '🌚 Git directory is not clean';
            }
        }
    });
}
exports.assertClean = assertClean;
//# sourceMappingURL=assertClean.js.map