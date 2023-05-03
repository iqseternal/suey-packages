"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seClear = exports.seRemove = exports.seSet = exports.seGet = void 0;
if (!window)
    throw new Error("not have window...");
var storage = window.sessionStorage;
if (!storage)
    throw new Error("not have window.sessionStorage...");
var seGet = function (key) {
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
exports.seGet = seGet;
var seSet = function (key, value) {
    var data = JSON.stringify(value);
    storage.setItem(key, data);
};
exports.seSet = seSet;
var seRemove = function (key) { return storage.removeItem(key); };
exports.seRemove = seRemove;
var seClear = function () { return storage.clear(); };
exports.seClear = seClear;
