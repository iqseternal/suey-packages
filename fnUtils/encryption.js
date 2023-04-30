"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rsaDecryptAlgorithm = exports.rsaEncryptAlgorithm = exports.md5Encrypt = exports.aesDecrypt = exports.aesEncrypt = exports.AES_DEFAULT_KEY = exports.aesDecryptAlgorithm = exports.aesEncryptAlgorithm = void 0;
const crypto = __importStar(require("crypto-ts"));
const ts_md5_1 = require("ts-md5");
const jsrsasign_1 = __importDefault(require("jsrsasign"));
const aesEncryptAlgorithm = (value, encryptKey) => crypto.AES.encrypt(JSON.stringify(value), encryptKey).toString();
exports.aesEncryptAlgorithm = aesEncryptAlgorithm;
const aesDecryptAlgorithm = (text, encryptKey) => {
    const str = crypto.AES.decrypt(text, encryptKey).toString((crypto.enc.Utf8));
    try {
        return JSON.parse(str);
    }
    catch {
        return str;
    }
};
exports.aesDecryptAlgorithm = aesDecryptAlgorithm;
exports.AES_DEFAULT_KEY = 'crypto-ts';
const aesEncrypt = (value) => (0, exports.aesEncryptAlgorithm)(value, exports.AES_DEFAULT_KEY);
exports.aesEncrypt = aesEncrypt;
const aesDecrypt = (text) => (0, exports.aesDecryptAlgorithm)(text, exports.AES_DEFAULT_KEY);
exports.aesDecrypt = aesDecrypt;
const md5Encrypt = (...args) => {
    const md5 = new ts_md5_1.Md5();
    args.forEach(str => md5.appendStr(str));
    return md5.end().toString();
};
exports.md5Encrypt = md5Encrypt;
const rsaEncryptAlgorithm = (text, publicKey) => jsrsasign_1.default.KJUR.crypto.Cipher.encrypt(text, jsrsasign_1.default.KEYUTIL.getKey(publicKey), 'RSA');
exports.rsaEncryptAlgorithm = rsaEncryptAlgorithm;
const rsaDecryptAlgorithm = (text, privateKey) => jsrsasign_1.default.KJUR.crypto.Cipher.decrypt(text, jsrsasign_1.default.KEYUTIL.getKey(privateKey), 'RSA');
exports.rsaDecryptAlgorithm = rsaDecryptAlgorithm;
