import Cookies from 'js-cookie';
import { aesEncryptAlgorithm, aesDecryptAlgorithm } from '../fnUtils/encryption';
import { isDef } from '../fnUtils/judgeType';

import { RemoveFn, GetOptions, SetOptions, AES_DEFAULT_KEY, SetTimeFn } from './fnType';

export const ckGet = <T extends string>(key: string, options?: Partial<GetOptions>): T | null => {
  let data = Cookies.get(key);

  if (options?.decrypt) data = aesDecryptAlgorithm(data, options.aesKey ?? AES_DEFAULT_KEY);
  return data;
}

export function ckSet<T>(key: string, value: T, time?: number): void;
export function ckSet<T>(key: string, value: T, options?: Partial<SetOptions>): void;
export function ckSet<T>(key: string, value: T, time?: number, options?: Partial<SetOptions>): void;
export function ckSet<T>(key: string, value: T, time?: number | Partial<SetOptions>, options?: Partial<SetOptions>): void {
  if (isDef(options)) {
    if (typeof time !== 'number') throw new TypeError(``);

    let v: string;
    if (options?.encrypt) v = aesEncryptAlgorithm(JSON.stringify(value), options.aesKey ?? AES_DEFAULT_KEY);
    else v = JSON.stringify(value);

    Cookies.set(key, v, { expires: time });
    return;
  }

  if (typeof time === 'object') {
    let v: string;
    if (options?.encrypt) {
      v = aesEncryptAlgorithm(JSON.stringify(value), options.aesKey ?? AES_DEFAULT_KEY);
    }
    else v = JSON.stringify(value);

    Cookies.set(key, v);
    return;
  }

  if (typeof time === 'number') {
    Cookies.set(key, JSON.stringify(value), { expires: time });
    return;
  }

  Cookies.set(key, value);
}

export const ckRemove: RemoveFn = (key: string): void => Cookies.remove(key);



