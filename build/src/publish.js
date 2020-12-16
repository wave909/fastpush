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
const utils_1 = require("./cli/utils");
const fastlane_1 = require("./fastlane");
const android_1 = require("./fastlane/android");
const gym_1 = require("./fastlane/ios/gym");
const match_1 = require("./fastlane/ios/match");
const pilot_1 = require("./fastlane/ios/pilot");
const incrementPackageJson_1 = require("./model/incrementPackageJson");
const platform_1 = require("./model/platform");
const AndroidPlatform_1 = require("./model/platform/AndroidPlatform");
const ui_1 = require("./ui");
const utils_2 = require("./utils");
exports.defaultHooks = {
    onFinish: null,
    onStart: (options) => __awaiter(void 0, void 0, void 0, function* () {
        if (options.env) {
            if (!options.silent) {
                ui_1.ui.message('Add environment file:' + options.env);
            }
            utils_2.env.add(options.env);
        }
        if (options.silent) {
            // don't assert clean
            // don't assert environment
        }
        else {
            yield utils_2.git.assertClean();
            yield utils_2.env.assert();
        }
    }),
    provideAndroidLanes: (options) => {
        const buildPayload = {
            build_type: 'Release',
        };
        if (options.flavor) {
            // const flavorCapitalized = options.flavor.charAt(0).toUpperCase() + options.flavor.substring(1)
            buildPayload.flavor = options.flavor;
        }
        return [
            android_1.gradle('clean'),
            // todo: validate GradleArgTask
            android_1.gradle(options.build, buildPayload),
            android_1.supply({
                track: options.track,
                skip_upload_changelogs: options.skip,
                skip_upload_images: options.skip,
                skip_upload_metadata: options.skip,
                skip_upload_screenshots: options.skip,
            }),
        ];
    },
    provideIOSLanes: (options) => {
        return [
            match_1.match('appstore'),
            gym_1.gym({ clean: true, scheme: options.scheme }),
            pilot_1.pilot({ skip_waiting_for_build_processing: true, skip_submission: true }),
        ];
    },
    onPostPublish: (platform, versions, buildNumbers) => __awaiter(void 0, void 0, void 0, function* () {
        const [oldVersion, version] = versions;
        const [oldBuild, build] = buildNumbers;
        const tag = `${platform.type}/${version}-${build}`;
        const whoami = process.env.USER || '';
        utils_2.git.commit(`Up version ${tag}`);
        utils_2.git.tag(tag, `Up version by ${whoami}`);
        utils_2.git.push();
    }),
};
function publish(options, passedHooks) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
        ui_1.ui.success('==fastpush==');
        ui_1.ui.success('Setup for project: ' + options.project);
        shelljs_1.default.cd(options.project);
        // child_process.execSync('cd ' + options.project)
        const hooks = Object.assign(Object.assign({}, exports.defaultHooks), passedHooks);
        yield ((_b = (_a = hooks).onStart) === null || _b === void 0 ? void 0 : _b.call(_a, options));
        let platforms = [];
        if (options.android) {
            platforms.push('android');
        }
        if (options.ios) {
            platforms.push('ios');
        }
        ui_1.ui.success(`Publishing for: [${platforms.join(', ')}]`);
        try {
            if (options.silent) {
                // don't apply changes to platforms
                if (!platforms || platforms.length <= 0) {
                    throw 'You should specify at least 1 platform for processing: ' + platform_1.platformTypes;
                }
            }
            else {
                platforms = yield utils_1.assertPlatforms(platforms);
            }
            const [oldVersion, newVersion] = yield incrementPackageJson_1.incrementPackageJson(options.increment, `${options.project}/package.json`);
            ui_1.ui.success(`Up package.json version from [${oldVersion}] -> [${newVersion}]`);
            if (platforms.find(it => it === 'android')) {
                const androidPlatform = new AndroidPlatform_1.AndroidPlatform(options.project);
                yield distribute(options, androidPlatform, newVersion, hooks);
            }
            if (platforms.find(it => it === 'ios')) {
                yield distribute(options, new platform_1.IOSPlatform(options.project), newVersion, hooks);
            }
            yield ((_d = (_c = hooks).onFinish) === null || _d === void 0 ? void 0 : _d.call(_c));
        }
        catch (e) {
            yield ((_f = (_e = hooks).onError) === null || _f === void 0 ? void 0 : _f.call(_e, e));
        }
    });
}
exports.publish = publish;
function distribute(options, platform, version, hooks) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const [oldBuildNumber, newBuildNumber] = yield platform.incrementBuildNumber();
        ui_1.ui.success(`Update ${platform.type} versionCode [${oldBuildNumber}] -> [${newBuildNumber}]`);
        const [oldVersion, newVersion] = yield platform.setVersionName(version);
        ui_1.ui.success(`Update ${platform.type} versionName [${oldVersion}] -> [${newVersion}]`);
        if (platform.type === 'ios') {
            fastlane_1.ios(hooks.provideIOSLanes(options), options.project);
        }
        else if (platform.type === 'android') {
            android_1.android(hooks.provideAndroidLanes(options), options.project);
        }
        else {
            throw `Unexpected platform type ${platform.type}`;
        }
        yield ((_b = (_a = hooks).onPostPublish) === null || _b === void 0 ? void 0 : _b.call(_a, platform, [oldVersion, newVersion], [oldBuildNumber, newBuildNumber]));
    });
}
//# sourceMappingURL=publish.js.map