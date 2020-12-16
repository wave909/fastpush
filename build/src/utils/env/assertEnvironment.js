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
const read_1 = require("../../ui/read");
const ui_1 = require("../../ui");
function assertEnvironment() {
    return __awaiter(this, void 0, void 0, function* () {
        ui_1.ui.warn('\n===ENVIRONMENT===');
        ui_1.ui.message(`${JSON.stringify(process.env, null, '  ')}`);
        const isOk = yield read_1.ask('Environment is ok?', true);
        if (isOk) {
            return true;
        }
        else {
            throw 'Environment is not ok, abort';
        }
    });
}
exports.assertEnvironment = assertEnvironment;
//# sourceMappingURL=assertEnvironment.js.map