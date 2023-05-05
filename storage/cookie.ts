import Cookies from 'js-cookie';

/**
 * cookie 的 Get 方法
 * @param {string} key 存储时使用key值
 * @returns {T | null} 返回存储的数据
 */
export const ckGet = <T>(key: string): T | null => {
  const data = Cookies.get(key);
  if (data === null || data === undefined) return null;

  try { return JSON.parse(data); }
  catch { return data; }
}

/**
 * cookie 的 Set 方法
 * @param {string} key 存储时的key值
 * @param {T} value 存储的数据, 可以是一个任意数据类型
 * @param {number} time 存储的时间, 过期则会自动销毁
 * @returns {void}
 */
export const ckSet = <T>(key: string, value: T, time?: number): void => {
  if (typeof time === 'number') {
    Cookies.set(key, JSON.stringify(value), { expires: time });
    return;
  }

  Cookies.set(key, JSON.stringify(value));
}

/**
 * cookie 的 Remove 方法
 * @param {string} key 移除key所存储的数据
 * @returns {void}
 */
export const ckRemove = (key: string): void => Cookies.remove(key);



