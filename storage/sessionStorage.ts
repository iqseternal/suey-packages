import { aesEncryptAlgorithm, aesDecryptAlgorithm } from '../fnUtils/encryption';

import { GetFn, SetFn, RemoveFn, GetOptions, SetOptions, AES_DEFAULT_KEY, SetTimeFn, ClearFn } from './fnType';

if (!window) {
  throw new Error(`not have window...`);
}

const storage = window.sessionStorage;

if (!storage) {
  throw new Error(`not have window.sessionStorage...`);
}

export const seGet: GetFn = <T>(key: string, options?: Partial<GetOptions>): T | null => {
  const data = storage.getItem(key);

  if (data === null) return data;

  if (options?.decrypt) {
    const str = aesEncryptAlgorithm(data, options.aesKey ?? AES_DEFAULT_KEY);

    try {
      return JSON.parse(str) as T;
    } catch {
      return null;
    }
  }

  try {
    return JSON.parse(data) as T;
  } catch {
    return null;
  }
}

export const seSet: SetFn = <T>(key: string, value: T, options?: Partial<SetOptions>): void => {
  let data = JSON.stringify(value);

  if (options?.encrypt) {
    data = aesEncryptAlgorithm(data, options.aesKey ?? AES_DEFAULT_KEY);
  }

  storage.setItem(key, data);
}

export const seRemove: RemoveFn = (key: string): void => storage.removeItem(key);

export const seClear: ClearFn = () => storage.clear();
