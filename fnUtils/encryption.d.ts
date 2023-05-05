/**
 * 进行一个加密操作, 将指定的字符串进行加密, 并返回加密结果
 * @param {string} value 需要加密的对象或者字符串
 * @param {string} key 加密的key值
 * @returns {string} 返回加密之后的结果
 */
export declare const aesEncryptAlgorithm: (value: string, encryptKey: string) => string;
/**
 * 进行一个解密操作, 将指定的字符串进行解密, 并返回解密结果
 * @param {string} text 需要解密的字符串
 * @param {string} key 解密的key值
 * @returns {string} 返回解密之后的结果
 */
export declare const aesDecryptAlgorithm: (text: string, encryptKey: string) => string;
/** 定义的默认 AES 加密的key值 */
export declare const AES_DEFAULT_KEY = "crypto-ts";
/**
 * 返回 AES 加密之后的字符串结果, 加密对象会被先JSON.stringify 转化为字符串进行加密
 * @param {T} value 需要加密的对象
 * @param {string} key 加密的key
 * @returns {string} 对象被加密之后的结果
 */
export declare const aesEncrypt: <T>(value: T, key?: string) => string;
/**
 * 返回 AES 解密之后的结果, 返回的结果不固定
 * @param {string} text 解密的字符串
 * @param {string} key 解密的key值
 * @returns {T} 返回解密之后的结果
 */
export declare const aesDecrypt: <T>(text: string, key?: string) => T;
/**
 * 使用 MD5 加密, 该操作是不可逆的
 * @param {...string[]} args 需要加密的字符串, 调用的时候可以使用逗号分隔, 会将其加密到一起
 * @returns {string} 返回加密之后的结果
 */
export declare const md5Encrypt: (...args: string[]) => string;
interface RsaKeyOptions {
    /** 创建 RSA key的时候, 创建多少字节的, 默认为 512 字节 */
    bytes?: number;
}
/**
 * 初始化一个 RSA 的公钥和密钥
 * @param {RsaKeyOptions} options 创建选项
 * @returns {[string, string]} [公钥, 私钥]
 */
export declare const rsaGetKey: (options?: RsaKeyOptions) => string[];
/**
 * 使用 RSA 加密, 使用该加密之前需要先生成加密和解密密钥
 * @param {string} text 需要进行加密的字符串
 * @param {string} publicKey 公钥
 * @returns 返回加密之后的结果
 */
export declare const rsaEncryptAlgorithm: (text: string, publicKey: string) => string;
/**
 * 使用 RSA 解密, 使用该解密之前需要先生成加密和解密密钥
 * @param {string} text 需要进行解密的字符串
 * @param {string} privateKey 私钥
 * @returns 返回解密之后的结果
 */
export declare const rsaDecryptAlgorithm: (text: string, privateKey: string) => string;
export {};
