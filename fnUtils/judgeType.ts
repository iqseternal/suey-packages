
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

export const isArray = <T = any>(target: T): boolean => target && Array.isArray(target)

export const isUrl = (path: string): boolean =>
isString(path) && /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#\/)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(path)

export const isDate = (val: unknown): val is Date => isType('Date')(val)
