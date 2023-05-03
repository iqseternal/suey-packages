import { GetFn, SetFn, RemoveFn, ClearFn } from './fnType';

if (!window) throw new Error(`not have window...`);
const storage = window.localStorage;

if (!storage) throw new Error(`not have window.localStorage...`);

export const loGet: GetFn = <T>(key: string): T | null => {
  let data = storage.getItem(key);
  if (data === null) return null;
  try { return JSON.parse(data) as T; }
  catch { return data as unknown as T; }
}

export const loSet: SetFn = <T>(key: string, value: T): void => {
  let data = JSON.stringify(value);
  storage.setItem(key, data);
}

export const loRemove: RemoveFn = (key: string): void => storage.removeItem(key);

export const loClear: ClearFn = () => storage.clear();
