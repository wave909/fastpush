"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const package_json_1 = __importDefault(require("../../package.json"));
const IncrementType_1 = require("./IncrementType");
const TrackType_1 = require("./TrackType");
const index_1 = require("../ui/index");
const fs_jetpack_1 = __importDefault(require("fs-jetpack"));
const program = new commander_1.default.Command();
const options = {
    android: {
        name: 'android',
        description: 'select android platform',
        placeholder: 'false|true',
        default: false,
    },
    ios: {
        name: 'ios',
        description: 'select ios platform',
        placeholder: 'false|true',
        default: false,
    },
    increment: {
        flag: 'i',
        name: 'increment',
        description: `increment app version`,
        placeholder: IncrementType_1.incrementTypes.join('|'),
        default: 'patch',
    },
    track: {
        flag: 't',
        name: 'track',
        description: 'select publish track',
        placeholder: TrackType_1.trackTypes.join('|'),
        default: TrackType_1.trackTypes[0],
    },
    silent: {
        flag: 's',
        name: 'silent',
        description: 'distribute without asking',
        placeholder: 'true|false',
        default: false,
    },
    project: {
        flag: 'p',
        name: 'project',
        description: 'path to root of project',
        placeholder: 'path',
        default: fs_jetpack_1.default.cwd(),
    },
    rollout: {
        flag: 'r',
        name: 'rollout',
        description: 'percent rollout',
        placeholder: '0..100',
        default: 100,
    },
    env: {
        flag: 'e',
        name: 'env',
        placeholder: 'path',
        description: 'path to environment file',
        default: '.env',
    },
    flavor: {
        flag: 'f',
        name: 'flavor',
        placeholder: 'flavor',
        description: 'flavor for android',
        default: null,
    },
    build: {
        flag: 'b',
        name: 'build',
        description: 'build android task: assemble (.apk) or bundle (.aab)',
        placeholder: 'assemble|bundle',
        default: 'assemble',
    },
    scheme: {
        flag: 'c',
        name: 'scheme',
        placeholder: 'app-scheme',
        description: 'Scheme/target for ios project',
        default: null,
    },
    skip: {
        flag: 'sm',
        name: 'skip-meta',
        description: 'skip all metadata when uploading (metadata, changelogs, images, screenshots)',
        placeholder: 'true|false',
        default: true,
    },
};
program
    .name('fastpush')
    .version(package_json_1.default.version)
    .description(package_json_1.default.description)
    .usage('<android ios> [options]');
/**
 * CLI parser that map your args input to JS object with options
 * @param args
 */
function fastpush(args = process.argv) {
    Object.keys(options).forEach(key => {
        const option = options[key];
        if (option.flag) {
            program.option(`-${option.flag}, --${option.name} <${option.placeholder}>`, `${option.description}`, option.default);
        }
        else {
            program.option(`${option.name}`, `${option.description} <${option.placeholder}>`, option.default);
        }
    });
    program.on('--help', function () {
        console.log('');
        console.log('Examples:');
        console.log('  Publish android apk with patch increment version:');
        index_1.ui.warn('  yarn fastpush android --increment patch --build assemble');
        console.log('');
        console.log('  Publish android bundle and ios with minor increment version, to beta track:');
        index_1.ui.warn('  yarn fastpush android ios --increment minor --track beta --build bundle');
        console.log('');
        console.log('  Publish ios without increment version and with custom environment:');
        index_1.ui.warn('  yarn fastpush ios --increment none --env path/to/.env');
        console.log('');
    });
    program.parse(args);
    if (!args.slice(2).length) {
        console.warn('Pass arguments'); // todo: add usage examples
        program.help();
        return;
    }
    const parsed = {
        increment: program.increment,
        track: program.track,
        silent: program.silent,
        project: program.project,
        rollout: program.rollout,
        env: program.env,
        flavor: program.flavor,
        build: program.build,
        android: program.android,
        ios: program.ios,
        scheme: program.scheme,
        skip: program.skip,
    };
    Object.keys(parsed).map(key => {
        const defaultValue = options[key].default;
        if (parsed[key] === undefined) {
            parsed[key] = defaultValue;
        }
    });
    return parsed;
}
exports.fastpush = fastpush;
//# sourceMappingURL=fastpush.js.map