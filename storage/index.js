"use strict";
/**
 * **********************
 * 请注意, 此模块应在浏览器环境下运行
 * **********************
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.seClear = exports.seRemove = exports.seSet = exports.seGet = exports.loClear = exports.loRemove = exports.loSet = exports.loGet = exports.ckRemove = exports.ckSet = exports.ckGet = void 0;
var cookie_1 = require("./cookie");
Object.defineProperty(exports, "ckGet", { enumerable: true, get: function () { return cookie_1.ckGet; } });
Object.defineProperty(exports, "ckSet", { enumerable: true, get: function () { return cookie_1.ckSet; } });
Object.defineProperty(exports, "ckRemove", { enumerable: true, get: function () { return cookie_1.ckRemove; } });
var localStorage_1 = require("./localStorage");
Object.defineProperty(exports, "loGet", { enumerable: true, get: function () { return localStorage_1.loGet; } });
Object.defineProperty(exports, "loSet", { enumerable: true, get: function () { return localStorage_1.loSet; } });
Object.defineProperty(exports, "loRemove", { enumerable: true, get: function () { return localStorage_1.loRemove; } });
Object.defineProperty(exports, "loClear", { enumerable: true, get: function () { return localStorage_1.loClear; } });
var sessionStorage_1 = require("./sessionStorage");
Object.defineProperty(exports, "seGet", { enumerable: true, get: function () { return sessionStorage_1.seGet; } });
Object.defineProperty(exports, "seSet", { enumerable: true, get: function () { return sessionStorage_1.seSet; } });
Object.defineProperty(exports, "seRemove", { enumerable: true, get: function () { return sessionStorage_1.seRemove; } });
Object.defineProperty(exports, "seClear", { enumerable: true, get: function () { return sessionStorage_1.seClear; } });
