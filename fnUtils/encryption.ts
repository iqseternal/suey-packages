// aes 对称加密
import * as crypto from 'crypto-ts';

// md5 单向散列加密
import { Md5 } from 'ts-md5';

// rsa 非对称加密
import type { RSAKey } from 'jsrsasign';
import rsa from 'jsrsasign';

/**
 * 进行一个加密操作, 将指定的字符串进行加密, 并返回加密结果
 * @param {string} value 需要加密的对象或者字符串
 * @param {string} key 加密的key值
 * @returns {string} 返回加密之后的结果
 */
export const aesEncryptAlgorithm = (value: string, encryptKey: string) =>
  crypto.AES.encrypt(value, encryptKey).toString();

/**
 * 进行一个解密操作, 将指定的字符串进行解密, 并返回解密结果
 * @param {string} text 需要解密的字符串
 * @param {string} key 解密的key值
 * @returns {string} 返回解密之后的结果
 */
export const aesDecryptAlgorithm = (text: string, encryptKey: string) =>
  crypto.AES.decrypt(text, encryptKey).toString((crypto.enc.Utf8));

/** 定义的默认 AES 加密的key值 */
export const AES_DEFAULT_KEY = 'crypto-ts';

/**
 * 返回 AES 加密之后的字符串结果, 加密对象会被先JSON.stringify 转化为字符串进行加密
 * @param {T} value 需要加密的对象
 * @param {string} key 加密的key
 * @returns {string} 对象被加密之后的结果
 */
export const aesEncrypt = <T>(value: T, key?: string) =>
  aesEncryptAlgorithm(JSON.stringify(value), key ?? AES_DEFAULT_KEY);

/**
 * 返回 AES 解密之后的结果, 返回的结果不固定
 * @param {string} text 解密的字符串
 * @param {string} key 解密的key值
 * @returns {T} 返回解密之后的结果
 */
export const aesDecrypt = <T>(text: string, key?: string): T => {
  const str = aesDecryptAlgorithm(text, key ?? AES_DEFAULT_KEY);
  try { return JSON.parse(str) as T; }
  catch { return str as unknown as T; }
}

/**
 * 使用 MD5 加密, 该操作是不可逆的
 * @param {...string[]} args 需要加密的字符串, 调用的时候可以使用逗号分隔, 会将其加密到一起
 * @returns {string} 返回加密之后的结果
 */
export const md5Encrypt = (...args: string[]) => {
  const md5 = new Md5();
  args.forEach(str => md5.appendStr(str));
  return md5.end().toString();
}

interface RsaKeyOptions {
  /** 创建 RSA key的时候, 创建多少字节的, 默认为 512 字节 */
  bytes?: number;
}

/**
 * 初始化一个 RSA 的公钥和密钥
 * @param {RsaKeyOptions} options 创建选项
 * @returns {[string, string]} [公钥, 私钥]
 */
export const rsaGetKey = (options?: RsaKeyOptions) => {
  const rsaKeyPair = rsa.KEYUTIL.generateKeypair('RSA', options?.bytes ?? 512);
  const pubKey = rsa.KEYUTIL.getPEM(rsaKeyPair.pubKeyObj);
  const prvKey = rsa.KEYUTIL.getPEM(rsaKeyPair.prvKeyObj, 'PKCS8PRV');
  return [pubKey, prvKey];
}

/**
 * 使用 RSA 加密, 使用该加密之前需要先生成加密和解密密钥
 * @param {string} text 需要进行加密的字符串
 * @param {string} publicKey 公钥
 * @returns 返回加密之后的结果
 */
export const rsaEncryptAlgorithm = (text: string, publicKey: string): string =>
  rsa.KJUR.crypto.Cipher.encrypt(text, rsa.KEYUTIL.getKey(publicKey) as RSAKey, 'RSA') as string;

/**
 * 使用 RSA 解密, 使用该解密之前需要先生成加密和解密密钥
 * @param {string} text 需要进行解密的字符串
 * @param {string} privateKey 私钥
 * @returns 返回解密之后的结果
 */
export const rsaDecryptAlgorithm = (text: string, privateKey: string): string =>
  rsa.KJUR.crypto.Cipher.decrypt(text, rsa.KEYUTIL.getKey(privateKey) as RSAKey, 'RSA') as string;





