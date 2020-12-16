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
const utils_1 = require("../cli/utils");
const Incrementer_1 = require("../utils/increment/Incrementer");
const readVersion_1 = require("../utils/increment/readVersion");
const jetpack = require("fs-jetpack");
/**
 * Increment version in packageJson and return array with [oldVersion, newVersion]
 */
function incrementPackageJson(type, packageJsonPath = jetpack.cwd() + '/package.json') {
    return __awaiter(this, void 0, void 0, function* () {
        const version = yield readVersion_1.readVersionFrom(packageJsonPath);
        const currentVersion = yield utils_1.assertVersion(version);
        const newVersion = Incrementer_1.Incrementer.increment(currentVersion, type);
        return readVersion_1.saveVersionTo(packageJsonPath, newVersion);
    });
}
exports.incrementPackageJson = incrementPackageJson;
//# sourceMappingURL=incrementPackageJson.js.map