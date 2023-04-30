"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.createApiRequest = exports.REQ_METHODS = void 0;
const request_1 = __importDefault(require("./request"));
exports.request = request_1.default;
const request_2 = require("./request");
Object.defineProperty(exports, "REQ_METHODS", { enumerable: true, get: function () { return request_2.REQ_METHODS; } });
var request_3 = require("./request");
Object.defineProperty(exports, "createApiRequest", { enumerable: true, get: function () { return request_3.createApiRequest; } });
