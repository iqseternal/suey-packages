"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ckRemove = exports.ckSet = exports.ckGet = void 0;
var js_cookie_1 = require("js-cookie");
var ckGet = function (key) {
    var data = js_cookie_1.default.get(key);
    return data;
};
exports.ckGet = ckGet;
var ckSet = function (key, value, time) {
    if (typeof time === 'number') {
        js_cookie_1.default.set(key, JSON.stringify(value), { expires: time });
        return;
    }
    js_cookie_1.default.set(key, value);
};
exports.ckSet = ckSet;
var ckRemove = function (key) { return js_cookie_1.default.remove(key); };
exports.ckRemove = ckRemove;
