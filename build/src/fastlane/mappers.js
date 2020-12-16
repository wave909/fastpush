"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapLanesToString(lanes) {
    const laneString = lanes.map(lane => {
        var _a;
        const args = ((_a = lane.args) === null || _a === void 0 ? void 0 : _a.map(arg => {
            return `${arg.name}: "${arg.value}"`;
        })) || '';
        if (args) {
            return `${lane.name}(${args})`;
        }
        else {
            return `${lane.name}`;
        }
    });
    return `lanes:'[${laneString}]'`;
}
exports.mapLanesToString = mapLanesToString;
function mapObjectToArgs(object) {
    if (!object)
        return [];
    if (typeof object !== 'object') {
        throw "'object' param must be object";
    }
    return Object.keys(object)
        .filter(key => {
        const value = object[key];
        return !!value;
    })
        .map(key => {
        const value = object[key];
        if (typeof value === 'object' || typeof value === 'function') {
            throw `Value of ${key} should be plain, not object or function`;
        }
        return {
            name: key,
            value: value,
        };
    });
}
exports.mapObjectToArgs = mapObjectToArgs;
//# sourceMappingURL=mappers.js.map