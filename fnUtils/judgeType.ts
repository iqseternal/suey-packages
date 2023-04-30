
export type Type = 'Array' | 'Object' | 'Null' | 'Undefined'
| 'Function' | 'RegExp' | 'String' | 'Number' | 'Date' | 'Boolean';

export type IsType = (target: unknown) => boolean;

/**
* 判断对象类型的柯里化函数
* @param type
*/
export function isType(type: Type) {
  return function(val: unknown): boolean {
    return type === Object.prototype.toString.call(val).slice(8, -1)
  }
}

export const isBoolean = isType('Boolean')
export const isObject = isType('Object')
export const isFunction = isType('Function')
export const isString = isType('String')
export const isNull = isType('Null')
export const isUndefined = isType('Undefined')

export const isDef = <T>(target: T): boolean => !isNull(target) && !isUndefined(target)
export const isUnDef = <T>(target: T): boolean => isNull(target) || isUndefined(target)

export const isPromise = (target: any | never): boolean =>
!!target && isObject(target) && isFunction(target.then) && isFunction(target.catch)

export const isDecimal = (str: string): boolean => isString(str) && /^\d+\.\d+$/.test(str)

export const isPhone = (str: string): boolean => /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/.test(str + '')

export const isEmail = (str: string): boolean => isString(str) && /^\w+@[a-zA-Z\d]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(str)

export const isDate = (val: unknown): val is Date => isType('Date')(val);

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

export const isExternal = (path: string) => {
  const reg = /^(https?:|mailto:|tel:)/
  return reg.test(path)
}

export const isArray = (arg: any) => {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]"
  }
  return Array.isArray(arg)
}

export const isHttpUrl = (path: string): boolean =>
isString(path) && /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#\/)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(path)


export const isValidURL = (url: string) => {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

