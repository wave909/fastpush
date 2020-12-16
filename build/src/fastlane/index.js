"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const shelljs_1 = __importDefault(require("shelljs"));
const jetpack = require("fs-jetpack");
const ui_1 = require("../ui");
const path = __importStar(require("path"));
__export(require("./android"));
__export(require("./ios"));
function fastlane(platformDirectory, task) {
    var _a;
    const fastfilePath = platformDirectory + '/fastlane/Fastfile';
    const contextFilePath = jetpack
        .cwd(__dirname)
        .cwd('../../assets')
        .path('Context.rb');
    // const ruby = jetpack.read(rubyPath)
    const fastfileOriginal = jetpack.read(fastfilePath);
    const importLine = `import '${contextFilePath}'`;
    const hadFolder = jetpack.exists(path.dirname(fastfilePath));
    if (!fastfileOriginal) {
        jetpack.file(fastfilePath);
    }
    if ((_a = fastfileOriginal) === null || _a === void 0 ? void 0 : _a.includes('Context.rb')) {
        ui_1.ui.message(`Fastfile ${contextFilePath} already contains Context.rb`);
    }
    else {
        const fastfileModifyed = `${importLine}\n${fastfileOriginal || ''}`;
        jetpack.write(fastfilePath, fastfileModifyed);
    }
    function revertChanges() {
        if (fastfileOriginal) {
            jetpack.write(fastfilePath, fastfileOriginal);
        }
        else {
            const removePath = hadFolder ? fastfilePath : path.dirname(fastfilePath);
            jetpack.remove(removePath);
        }
    }
    process.on('exit', revertChanges);
    process.on('disconnect', revertChanges);
    process.on('uncaughtException', revertChanges);
    process.on('unhandledRejection', revertChanges);
    try {
        // shell.exec(`bundle install`)
        // TODO: validate user input for security policy
        // shelljs not supported interactive input/output so we should use child_process
        // child_process.execSync('cd ' + jetpack.cwd())
        const cwd = shelljs_1.default.pwd().stdout;
        try {
            console.log('Execute fastlane in directory:', cwd);
            child_process_1.default.execSync(`cd ${platformDirectory} && bundle exec fastlane ${task}`.trim(), { stdio: 'inherit' });
        }
        catch (e) {
            throw e;
        }
        finally {
            child_process_1.default.execSync(`cd ${cwd}`);
        }
    }
    catch (e) {
        throw e;
    }
    finally {
        revertChanges();
    }
}
exports.fastlane = fastlane;
//# sourceMappingURL=index.js.map