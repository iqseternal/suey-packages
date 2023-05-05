
type StorageType = 'localStorage' | 'sessionStorage';

interface StorageBase {
  get: <T>(key: string) => T | null;
  set: <T>(key: string, value: T) => void;
  remove: (key: string) => void;
  clear: () => void;
}

/**
 * 创建 Storage 的基本四方法, Get, Set, Remove, Clear
 * @param {StorageType} storageType
 * @returns {StorageBase}
 */
export const initStorage = (storageType: StorageType): StorageBase => {
  if (!window) throw new Error(`not have window...`);

  const storage = window[storageType];
  if (!storage) throw new Error(`not have window.${storageType}...`);

  const get = <T>(key: string): T | null => {
    let data = storage.getItem(key);
    if (data === null) return null;
    try { return JSON.parse(data) as T; }
    catch { return data as unknown as T; }
  }

  const set = <T>(key: string, value: T): void => {
    let data = JSON.stringify(value);
    storage.setItem(key, data);
  }

  const remove = (key: string): void => storage.removeItem(key);

  const clear = () => storage.clear();

  return { get, set, remove, clear };
}
