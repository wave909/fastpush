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
const ui_1 = require("../../ui");
const Incrementer_1 = require("../../utils/increment/Incrementer");
/**
 * Check that version argument has formatting like 'number.number.number' and trying migrate to this format if it's not.
 * @param version
 */
function assertVersion(version) {
    return __awaiter(this, void 0, void 0, function* () {
        if (version) {
            const parts = version.split('.');
            if (parts.length === 3) {
                return Promise.resolve(version);
            }
        }
        const migration = Incrementer_1.Incrementer.tryMigrateVersion(version);
        if (migration) {
            const shouldApplyMigration = yield ui_1.ui.question(`Your version is [${version}], but expected semver 3 digits value, like [1.0.0]. Should we change it to [${migration}]?`);
            if (shouldApplyMigration) {
                return Promise.resolve(migration);
            }
        }
        ui_1.ui.error(`Your version is ${version}, but supported only 3 digits value like 1.0.0`);
        const newVersion = yield ui_1.ui.read(`Enter version manualy and change from (${version}) ->`);
        return yield assertVersion(newVersion);
    });
}
exports.assertVersion = assertVersion;
//# sourceMappingURL=assertVersion.js.map