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
const parser_1 = __importDefault(require("gradle-to-js/lib/parser"));
const ui_1 = require("../../ui");
const jetpack = require("fs-jetpack");
/**
 * @param android - android project directory path
 */
class AndroidPlatform {
    /**
     * Android platform specific actions, that can help you with build process
     * @param projectDirectory - path to react-native root project directory ["current-working-directory"]
     * @param androidDirectory - path to android platform directory ["current-working-directory/android"]
     * @param buildGradlePath - path to app/build.gradle file ["current-working-directory/android/app/build.gradle"]
     */
    constructor(projectDirectory = jetpack.cwd(), androidDirectory = projectDirectory + '/android', buildGradlePath = androidDirectory + '/app/build.gradle') {
        this.type = 'android';
        this.projectDirectory = projectDirectory;
        this.androidDirectory = androidDirectory;
        this.buildGradlePath = buildGradlePath;
        const type = jetpack.exists(this.buildGradlePath);
        if (type === 'dir') {
            throw Error(`Expected path to build.gradle file, but ${this.buildGradlePath} is directory`);
        }
        else if (type === 'other') {
            throw Error(`Expected path to build.gradle file, but ${this.buildGradlePath} is not file`);
        }
        else if (type === null || type === undefined) {
            throw Error(`Expected path to build.gradle file, but ${this.buildGradlePath} is ${type}`);
        }
        else if (type === 'file') {
            // TODO: handle case when passed only buildGradlePath, but not projectDirectory and androidDirectory
            ui_1.ui.message('Found buildGradlePath: ' + buildGradlePath);
        }
        else {
            throw Error(`Unexpected behavior. Found type = ${type} for buildGradlePath = ${buildGradlePath}`);
        }
    }
    getBuildNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            const json = yield parser_1.default.parseFile(this.buildGradlePath);
            const versionCode = parseInt(json.android.defaultConfig.versionCode);
            return versionCode;
        });
    }
    getVersionName() {
        return __awaiter(this, void 0, void 0, function* () {
            const json = yield parser_1.default.parseFile(this.buildGradlePath);
            const versionName = json.android.defaultConfig.versionName;
            return versionName;
        });
    }
    incrementBuildNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            const buildNumber = yield this.getBuildNumber();
            this.changeField('versionCode', `${buildNumber + 1}`);
            const newBuildNumber = yield this.getBuildNumber();
            return [buildNumber, newBuildNumber];
        });
    }
    setVersionName(version) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldVersion = yield this.getVersionName();
            this.changeField('versionName', `"${version}"`);
            const newVersion = yield this.getVersionName();
            return [oldVersion, newVersion];
        });
    }
    changeField(field, value) {
        const file = jetpack.read(this.buildGradlePath);
        const regexp = new RegExp(`${field}.*`);
        const newContent = file.replace(regexp, `${field} ` + value);
        jetpack.write(this.buildGradlePath, newContent);
    }
}
exports.AndroidPlatform = AndroidPlatform;
//# sourceMappingURL=AndroidPlatform.js.map