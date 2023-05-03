import { aesEncryptAlgorithm, aesDecryptAlgorithm } from '../fnUtils/encryption';

import { GetFn, SetFn, RemoveFn, GetOptions, SetOptions, AES_DEFAULT_KEY, SetTimeFn, ClearFn } from './fnType';

if (!window) throw new Error(`not have window...`);
const storage = window.localStorage;

if (!storage) throw new Error(`not have window.localStorage...`);

export const loGet: GetFn = <T>(key: string, options?: Partial<GetOptions>): T | null => {
  let data = storage.getItem(key);
  if (data === null) return data;

  if (options?.decrypt) data = aesEncryptAlgorithm(data, options.aesKey ?? AES_DEFAULT_KEY);
  try { return JSON.parse(data) as T; }
  catch { return data as unknown as T; }
}

export const loSet: SetFn = <T>(key: string, value: T, options?: Partial<SetOptions>): void => {
  let data = JSON.stringify(value);
  if (options?.encrypt) data = aesEncryptAlgorithm(data, options.aesKey ?? AES_DEFAULT_KEY);
  storage.setItem(key, data);
}

export const loRemove: RemoveFn = (key: string): void => storage.removeItem(key);

export const loClear: ClearFn = () => storage.clear();
