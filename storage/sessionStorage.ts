
import { initStorage } from './_storage';

const { get, set, remove, clear } = initStorage('sessionStorage');
/**
 * sessionStorage 的 get 方法
 * @param {string} key 存储key
 * @returns {T | null} 返回存储的数据
 */
export const seGet = get;
/**
 * sessionStorage 的 set 方法
 * @param {string} key 存储key
 * @param {T} value 存储的数据
 * @returns {void}
 */
export const seSet = set;
/**
 * sessionStorage 的 remove 方法
 * @param {string} key 存储key
 * @returns {void}
 */
export const seRemove = remove;
/**
 * sessionStorage 的 clear 方法
 * @returns {void}
 */
export const seClear = clear;
