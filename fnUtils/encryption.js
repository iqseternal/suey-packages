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
exports.rsaDecryptAlgorithm = exports.rsaEncryptAlgorithm = exports.rsaGetKey = exports.md5Encrypt = exports.aesDecrypt = exports.aesEncrypt = exports.AES_DEFAULT_KEY = exports.aesDecryptAlgorithm = exports.aesEncryptAlgorithm = void 0;
// aes 对称加密
const crypto = __importStar(require("crypto-ts"));
// md5 单向散列加密
const ts_md5_1 = require("ts-md5");
const jsrsasign_1 = __importDefault(require("jsrsasign"));
/**
 * 进行一个加密操作, 将指定的字符串进行加密, 并返回加密结果
 * @param {string} value 需要加密的对象或者字符串
 * @param {string} key 加密的key值
 * @returns {string} 返回加密之后的结果
 */
const aesEncryptAlgorithm = (value, encryptKey) => crypto.AES.encrypt(value, encryptKey).toString();
exports.aesEncryptAlgorithm = aesEncryptAlgorithm;
/**
 * 进行一个解密操作, 将指定的字符串进行解密, 并返回解密结果
 * @param {string} text 需要解密的字符串
 * @param {string} key 解密的key值
 * @returns {string} 返回解密之后的结果
 */
const aesDecryptAlgorithm = (text, encryptKey) => crypto.AES.decrypt(text, encryptKey).toString((crypto.enc.Utf8));
exports.aesDecryptAlgorithm = aesDecryptAlgorithm;
/** 定义的默认 AES 加密的key值 */
exports.AES_DEFAULT_KEY = 'crypto-ts';
/**
 * 返回 AES 加密之后的字符串结果, 加密对象会被先JSON.stringify 转化为字符串进行加密
 * @param {T} value 需要加密的对象
 * @param {string} key 加密的key
 * @returns {string} 对象被加密之后的结果
 */
const aesEncrypt = (value, key) => (0, exports.aesEncryptAlgorithm)(JSON.stringify(value), key ?? exports.AES_DEFAULT_KEY);
exports.aesEncrypt = aesEncrypt;
/**
 * 返回 AES 解密之后的结果, 返回的结果不固定
 * @param {string} text 解密的字符串
 * @param {string} key 解密的key值
 * @returns {T} 返回解密之后的结果
 */
const aesDecrypt = (text, key) => {
    const str = (0, exports.aesDecryptAlgorithm)(text, key ?? exports.AES_DEFAULT_KEY);
    try {
        return JSON.parse(str);
    }
    catch {
        return str;
    }
};
exports.aesDecrypt = aesDecrypt;
/**
 * 使用 MD5 加密, 该操作是不可逆的
 * @param {...string[]} args 需要加密的字符串, 调用的时候可以使用逗号分隔, 会将其加密到一起
 * @returns {string} 返回加密之后的结果
 */
const md5Encrypt = (...args) => {
    const md5 = new ts_md5_1.Md5();
    args.forEach(str => md5.appendStr(str));
    return md5.end().toString();
};
exports.md5Encrypt = md5Encrypt;
/**
 * 初始化一个 RSA 的公钥和密钥
 * @param {RsaKeyOptions} options 创建选项
 * @returns {[string, string]} [公钥, 私钥]
 */
const rsaGetKey = (options) => {
    const rsaKeyPair = jsrsasign_1.default.KEYUTIL.generateKeypair('RSA', options?.bytes ?? 512);
    const pubKey = jsrsasign_1.default.KEYUTIL.getPEM(rsaKeyPair.pubKeyObj);
    const prvKey = jsrsasign_1.default.KEYUTIL.getPEM(rsaKeyPair.prvKeyObj, 'PKCS8PRV');
    return [pubKey, prvKey];
};
exports.rsaGetKey = rsaGetKey;
/**
 * 使用 RSA 加密, 使用该加密之前需要先生成加密和解密密钥
 * @param {string} text 需要进行加密的字符串
 * @param {string} publicKey 公钥
 * @returns 返回加密之后的结果
 */
const rsaEncryptAlgorithm = (text, publicKey) => jsrsasign_1.default.KJUR.crypto.Cipher.encrypt(text, jsrsasign_1.default.KEYUTIL.getKey(publicKey), 'RSA');
exports.rsaEncryptAlgorithm = rsaEncryptAlgorithm;
/**
 * 使用 RSA 解密, 使用该解密之前需要先生成加密和解密密钥
 * @param {string} text 需要进行解密的字符串
 * @param {string} privateKey 私钥
 * @returns 返回解密之后的结果
 */
const rsaDecryptAlgorithm = (text, privateKey) => jsrsasign_1.default.KJUR.crypto.Cipher.decrypt(text, jsrsasign_1.default.KEYUTIL.getKey(privateKey), 'RSA');
exports.rsaDecryptAlgorithm = rsaDecryptAlgorithm;
