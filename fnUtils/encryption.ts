// aes 对称加密
import * as crypto from 'crypto-ts';

// md5 单向散列加密
import { Md5 } from 'ts-md5';

// rsa 非对称加密
import type { RSAKey } from 'jsrsasign';
import rsa from 'jsrsasign';

/**
 *
 * @param {T} value 需要加密的对象或者字符串
 * @param {string} key 加密的key值
 * @returns {string}
 */
export const aesEncryptAlgorithm = <T>(value: T, encryptKey: string) =>
  crypto.AES.encrypt(JSON.stringify(value), encryptKey).toString();

/**
 *
 * @param {string} text 需要解密的字符串
 * @param {string} key 解密的key值
 * @returns {T}
 */
export const aesDecryptAlgorithm = <T>(text: string, encryptKey: string): T => {
  const str = crypto.AES.decrypt(text, encryptKey).toString((crypto.enc.Utf8));
  try { return JSON.parse(str) as unknown as T;  }
  catch { return str as unknown as T; }
}

export const AES_DEFAULT_KEY = 'crypto-ts';

export type AesEncryptFn = <T>(value: T) => string;
export const aesEncrypt: AesEncryptFn = <T>(value: T): string => aesEncryptAlgorithm(value, AES_DEFAULT_KEY);

export type AesDecryptFn = <T>(text: string) => T;
export const aesDecrypt: AesDecryptFn = <T>(text: string): T => aesDecryptAlgorithm(text, AES_DEFAULT_KEY);

export type Md5EncryptFn = (...args: string[]) => string;
export const md5Encrypt: Md5EncryptFn = (...args: string[]) => {
  const md5 = new Md5();
  args.forEach(str => md5.appendStr(str));
  // @ts-ignore
  return md5.end().toString();
}

export const rsaEncryptAlgorithm = (text: string, publicKey: string): string =>
  rsa.KJUR.crypto.Cipher.encrypt(text, rsa.KEYUTIL.getKey(publicKey) as RSAKey, 'RSA') as string;

export const rsaDecryptAlgorithm = (text: string, privateKey: string): string =>
  rsa.KJUR.crypto.Cipher.decrypt(text, rsa.KEYUTIL.getKey(privateKey) as RSAKey, 'RSA') as string;





