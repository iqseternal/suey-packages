/**
 * sessionStorage 的 get 方法
 * @param {string} key 存储key
 * @returns {T | null} 返回存储的数据
 */
export declare const seGet: <T>(key: string) => T;
/**
 * sessionStorage 的 set 方法
 * @param {string} key 存储key
 * @param {T} value 存储的数据
 * @returns {void}
 */
export declare const seSet: <T>(key: string, value: T) => void;
/**
 * sessionStorage 的 remove 方法
 * @param {string} key 存储key
 * @returns {void}
 */
export declare const seRemove: (key: string) => void;
/**
 * sessionStorage 的 clear 方法
 * @returns {void}
 */
export declare const seClear: () => void;
