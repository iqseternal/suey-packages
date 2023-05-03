import { GetFn, SetFn, RemoveFn, ClearFn } from './fnType';

if (!window) throw new Error(`not have window...`);
const storage = window.sessionStorage;

if (!storage) throw new Error(`not have window.sessionStorage...`);

export const seGet: GetFn = <T>(key: string): T | null => {
  let data = storage.getItem(key);
  if (data === null) return null;
  try { return JSON.parse(data) as T; }
  catch { return data as unknown as T; }
}

export const seSet: SetFn = <T>(key: string, value: T): void => {
  let data = JSON.stringify(value);
  storage.setItem(key, data);
}

export const seRemove: RemoveFn = (key: string): void => storage.removeItem(key);

export const seClear: ClearFn = () => storage.clear();
