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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
const jetpack = require("fs-jetpack");
const ui_1 = require("../../ui");
class IOSPlatform {
    constructor(projectDirectory = jetpack.cwd(), iosDirectory = jetpack
        .cwd(projectDirectory)
        .cwd('ios')
        .cwd()) {
        this.type = 'ios';
        this.projectDirectory = projectDirectory;
        this.iosDirectory = iosDirectory;
        ui_1.ui.message(`Setup ios project at: ${iosDirectory}`);
        // move back
        jetpack.cwd(projectDirectory);
    }
    /**
     * Execute `xcrun agvtool new-marketing-version ${newVersion}`
     * @param newVersion your version in format `number.number.number` (ex: 1.2.3)
     */
    setVersionName(newVersion) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldVersion = yield this.getVersionName();
            this.exec(`xcrun agvtool new-marketing-version ${newVersion}`);
            const updatedVersion = yield this.getVersionName();
            return [oldVersion, updatedVersion];
        });
    }
    /**
     * Execute `xcrun agvtool next-version -all` for increment build number
     * @returns [oldBuildNumber, newBuildNumber]
     */
    incrementBuildNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            const oldBuildNumber = yield this.getBuildNumber();
            this.exec('xcrun agvtool next-version -all');
            const newBuildNumber = yield this.getBuildNumber();
            return [oldBuildNumber, newBuildNumber];
        });
    }
    /**
     * Execute `xcrun agvtool what-version` inside ios directory and get parsed result.
     * Be sure, that you enable `agvtool` for your project https://dzone.com/articles/agvtool-automating-ios-build-and-version-numbers
     */
    getBuildNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.exec('xcrun agvtool what-version');
            const buildNumber = Number.parseInt(result.stdout.match(/\d+/g).join());
            return buildNumber;
        });
    }
    /**
     * Execute `xcrun agvtool what-marketing-version` and parse returned value
     * @returns version name like "1.2.3"
     */
    getVersionName() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.exec('xcrun agvtool what-marketing-version');
            const phrase = 'Found CFBundleShortVersionString of "';
            const startIndex = result.indexOf(phrase);
            const endIndex = result.indexOf('"', startIndex + phrase.length + 1);
            const version = result.substring(startIndex + phrase.length, endIndex);
            return version;
        });
    }
    exec(command) {
        const result = shelljs_1.default.cd(this.iosDirectory).exec(command, { silent: true, fatal: true });
        if (result.code != 0) {
            throw result.stdout;
        }
        return result;
    }
}
exports.IOSPlatform = IOSPlatform;
//# sourceMappingURL=IOSPlatform.js.map