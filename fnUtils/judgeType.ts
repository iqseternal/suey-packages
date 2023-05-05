
/** 对象的基本类型 */
export type Type = 'Array' | 'Object' | 'Null' | 'Undefined'
| 'Function' | 'RegExp' | 'String' | 'Number' | 'Date' | 'Boolean';

/** 返回target是否是指定数据类型 */
export type IsType = (target: unknown) => boolean;

/**
* 判断对象类型的柯里化函数
* @param {Type} type 对象的类型
* @returns {IsType} 返回一个判断指定对象是否是指定类型的函数
*/
export function isType(type: Type): IsType {
  return (val: unknown): boolean => type === Object.prototype.toString.call(val).slice(8, -1);
}

/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Boolean 类型
 */
export const isBoolean: IsType = isType('Boolean');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Object 类型
 */
export const isObject: IsType = isType('Object');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Function 类型
 */
export const isFunction: IsType = isType('Function');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 String 类型
 */
export const isString: IsType = isType('String');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Null 类型
 */
export const isNull: IsType = isType('Null');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Undefined 类型
 */
export const isUndefined: IsType = isType('Undefined');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Date 类型
 */
export const isDate: IsType = isType('Date');

/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否有意义, 即不为 Undefined, 也不为 Null
 */
export const isDef = <T>(target: T): boolean => !isNull(target) && !isUndefined(target);
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否没有意义, 即为 Undefined, 或者为 Null
 */
export const isUnDef = <T>(target: T): boolean => isNull(target) || isUndefined(target);
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否是一个 Promise 对象, 是否包含 .then 和 .catch 方法
 */
export const isPromise = (target: any | never): boolean =>
!!target && isObject(target) && isFunction(target.then) && isFunction(target.catch);
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个数字字符串
 */
export const isDecimal = (str: string): boolean => isString(str) && /^\d+\.\d+$/.test(str);
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个电话号码字符串
 */
export const isPhone = (str: string): boolean => /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/.test(str + '');
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个电子邮件字符串
 */
export const isEmail = (str: string): boolean => isString(str) && /^\w+@[a-zA-Z\d]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(str);

/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否是一个类, 即可以 new 的 class 对象
 */
export const isClass = (target: any): boolean => {

  if (typeof target !== 'function') return false;

  const __str__ = target.toString();

  if (target.prototype === undefined) return false;

  if (target.prototype.constructor !== target) return false;

  if (__str__.slice(0, 5) === 'class') return true;

  if (Object.getOwnPropertyNames(target.prototype).length >= 2) return true;

  if (/^function\s+\(|^function\s+anonymous\(/.test(__str__)) return false;

  if (/^function\s+[A-Z]/.test(__str__)) return true;

  if (/\b\(this\b|\bthis[\.\[]\b/.test(__str__)) {

    if (/classCallCheck\(this/.test(__str__)) return true;

    return /^function\sdefault_\d+\s*\(/.test(__str__);
  }

  return false;
}

/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个外部链接
 */
export const isExternal = (path: string) => {
  const reg = /^(https?:|mailto:|tel:)/
  return reg.test(path)
}
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否是一个数组对象
 */
export const isArray = (arg: any) => {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]"
  }
  return Array.isArray(arg)
}

/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标字符串是否是一个 http 或者 https 链接
 */
export const isHttpUrl = (path: string): boolean =>
isString(path) && /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#\/)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(path)

/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标字符串是否是一个有效的 URL 地址
 */
export const isValidURL = (url: string) => {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

