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
const jetpack = require("fs-jetpack");
/**
 * Read version from file
 * @param file input
 */
function readVersionFrom(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const raw = yield jetpack.readAsync(file);
        const fileJson = JSON.parse(raw);
        const version = fileJson['version'];
        return version.trim();
    });
}
exports.readVersionFrom = readVersionFrom;
/**
 * Save version to file
 * @param file input
 * @param version
 * @return [oldVersion, newVersion]
 */
function saveVersionTo(file, version) {
    return __awaiter(this, void 0, void 0, function* () {
        const oldVersion = yield readVersionFrom(file);
        const raw = yield jetpack.readAsync(file);
        const fileJson = JSON.parse(raw);
        fileJson.version = version;
        yield jetpack.writeAsync(file, fileJson);
        const savedVersion = yield readVersionFrom(file);
        return [oldVersion, savedVersion];
    });
}
exports.saveVersionTo = saveVersionTo;
//# sourceMappingURL=readVersion.js.map