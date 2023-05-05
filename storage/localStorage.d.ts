/**
 * localStorage 的 get 方法
 * @param {string} key 存储key
 * @returns {T | null} 返回存储的数据
 */
export declare const loGet: <T>(key: string) => T;
/**
 * localStorage 的 set 方法
 * @param {string} key 存储key
 * @param {T} value 存储的数据
 * @returns {void}
 */
export declare const loSet: <T>(key: string, value: T) => void;
/**
 * localStorage 的 remove 方法
 * @param {string} key 存储key
 * @returns {void}
 */
export declare const loRemove: (key: string) => void;
/**
 * localStorage 的 clear 方法
 * @returns {void}
 */
export declare const loClear: () => void;
