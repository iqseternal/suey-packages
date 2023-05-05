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
export declare const initStorage: (storageType: StorageType) => StorageBase;
export {};
