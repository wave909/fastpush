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
const platform_1 = require("../../model/platform");
/**
 * Assert input platforms and return array that contains at least 1 platform
 * @param platforms
 */
function assertPlatforms(platforms) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!platforms || platforms.length <= 0) {
            console.warn('platforms is empty');
            const selectedPlatforms = yield ui_1.ui.select('You should specify platform for publishing', [...platform_1.platformTypes]);
            return assertPlatforms(selectedPlatforms);
        }
        return Promise.resolve(platforms);
    });
}
exports.assertPlatforms = assertPlatforms;
//# sourceMappingURL=assertPlatforms.js.map