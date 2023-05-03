"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loClear = exports.loRemove = exports.loSet = exports.loGet = void 0;
if (!window)
    throw new Error("not have window...");
var storage = window.localStorage;
if (!storage)
    throw new Error("not have window.localStorage...");
var loGet = function (key) {
    var data = storage.getItem(key);
    if (data === null)
        return null;
    try {
        return JSON.parse(data);
    }
    catch (_a) {
        return data;
    }
};
exports.loGet = loGet;
var loSet = function (key, value) {
    var data = JSON.stringify(value);
    storage.setItem(key, data);
};
exports.loSet = loSet;
var loRemove = function (key) { return storage.removeItem(key); };
exports.loRemove = loRemove;
var loClear = function () { return storage.clear(); };
exports.loClear = loClear;
