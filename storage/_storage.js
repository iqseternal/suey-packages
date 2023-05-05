"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStorage = void 0;
/**
 * 创建 Storage 的基本四方法, Get, Set, Remove, Clear
 * @param {StorageType} storageType
 * @returns {StorageBase}
 */
var initStorage = function (storageType) {
    if (!window)
        throw new Error("not have window...");
    var storage = window[storageType];
    if (!storage)
        throw new Error("not have window.".concat(storageType, "..."));
    var get = function (key) {
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
    var set = function (key, value) {
        var data = JSON.stringify(value);
        storage.setItem(key, data);
    };
    var remove = function (key) { return storage.removeItem(key); };
    var clear = function () { return storage.clear(); };
    return { get: get, set: set, remove: remove, clear: clear };
};
exports.initStorage = initStorage;
