"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ckRemove = exports.ckSet = exports.ckGet = void 0;
var js_cookie_1 = require("js-cookie");
/**
 * cookie 的 Get 方法
 * @param {string} key 存储时使用key值
 * @returns {T | null} 返回存储的数据
 */
var ckGet = function (key) {
    var data = js_cookie_1.default.get(key);
    if (data === null || data === undefined)
        return null;
    try {
        return JSON.parse(data);
    }
    catch (_a) {
        return data;
    }
};
exports.ckGet = ckGet;
/**
 * cookie 的 Set 方法
 * @param {string} key 存储时的key值
 * @param {T} value 存储的数据, 可以是一个任意数据类型
 * @param {number} time 存储的时间, 过期则会自动销毁
 * @returns {void}
 */
var ckSet = function (key, value, time) {
    if (typeof time === 'number') {
        js_cookie_1.default.set(key, JSON.stringify(value), { expires: time });
        return;
    }
    js_cookie_1.default.set(key, JSON.stringify(value));
};
exports.ckSet = ckSet;
/**
 * cookie 的 Remove 方法
 * @param {string} key 移除key所存储的数据
 * @returns {void}
 */
var ckRemove = function (key) { return js_cookie_1.default.remove(key); };
exports.ckRemove = ckRemove;
