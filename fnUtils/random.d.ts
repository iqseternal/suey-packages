/** 指定颜色字符的格式 */
type ColorType = 'hex' | 'rgb' | 'rgba';
/**
 *
 * @returns {string} 返回一个随机的十六进制颜色字符串
 */
export declare const getHexColor: () => string;
/**
 *
 * @returns {string} 返回一个随机的RGB颜色字符串
 */
export declare const getRgbaColor: () => string;
/**
 *
 * @returns {string} 返回一个随机的RGBA颜色字符串
 */
export declare const getRgbColor: () => string;
/**
 * @param {ColorType} type 返回随机颜色字符串的格式
 * @returns {string} 返回一个随机的颜色字符串
 */
export declare const getColor: (type?: ColorType) => string;
export {};
