"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seClear = exports.seRemove = exports.seSet = exports.seGet = void 0;
var _storage_1 = require("./_storage");
var _a = (0, _storage_1.initStorage)('sessionStorage'), get = _a.get, set = _a.set, remove = _a.remove, clear = _a.clear;
/**
 * sessionStorage 的 get 方法
 * @param {string} key 存储key
 * @returns {T | null} 返回存储的数据
 */
exports.seGet = get;
/**
 * sessionStorage 的 set 方法
 * @param {string} key 存储key
 * @param {T} value 存储的数据
 * @returns {void}
 */
exports.seSet = set;
/**
 * sessionStorage 的 remove 方法
 * @param {string} key 存储key
 * @returns {void}
 */
exports.seRemove = remove;
/**
 * sessionStorage 的 clear 方法
 * @returns {void}
 */
exports.seClear = clear;
