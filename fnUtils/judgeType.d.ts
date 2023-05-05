/** 对象的基本类型 */
export type Type = 'Array' | 'Object' | 'Null' | 'Undefined' | 'Function' | 'RegExp' | 'String' | 'Number' | 'Date' | 'Boolean';
/** 返回target是否是指定数据类型 */
export type IsType = (target: unknown) => boolean;
/**
* 判断对象类型的柯里化函数
* @param {Type} type 对象的类型
* @returns {IsType} 返回一个判断指定对象是否是指定类型的函数
*/
export declare function isType(type: Type): IsType;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Boolean 类型
 */
export declare const isBoolean: IsType;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Object 类型
 */
export declare const isObject: IsType;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Function 类型
 */
export declare const isFunction: IsType;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 String 类型
 */
export declare const isString: IsType;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Null 类型
 */
export declare const isNull: IsType;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Undefined 类型
 */
export declare const isUndefined: IsType;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Date 类型
 */
export declare const isDate: IsType;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否有意义, 即不为 Undefined, 也不为 Null
 */
export declare const isDef: <T>(target: T) => boolean;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否没有意义, 即为 Undefined, 或者为 Null
 */
export declare const isUnDef: <T>(target: T) => boolean;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否是一个 Promise 对象, 是否包含 .then 和 .catch 方法
 */
export declare const isPromise: (target: any | never) => boolean;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个数字字符串
 */
export declare const isDecimal: (str: string) => boolean;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个电话号码字符串
 */
export declare const isPhone: (str: string) => boolean;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个电子邮件字符串
 */
export declare const isEmail: (str: string) => boolean;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否是一个类, 即可以 new 的 class 对象
 */
export declare const isClass: (target: any) => boolean;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个外部链接
 */
export declare const isExternal: (path: string) => boolean;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否是一个数组对象
 */
export declare const isArray: (arg: any) => boolean;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标字符串是否是一个 http 或者 https 链接
 */
export declare const isHttpUrl: (path: string) => boolean;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标字符串是否是一个有效的 URL 地址
 */
export declare const isValidURL: (url: string) => boolean;
