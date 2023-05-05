"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidURL = exports.isHttpUrl = exports.isArray = exports.isExternal = exports.isClass = exports.isEmail = exports.isPhone = exports.isDecimal = exports.isPromise = exports.isUnDef = exports.isDef = exports.isDate = exports.isUndefined = exports.isNull = exports.isString = exports.isFunction = exports.isObject = exports.isBoolean = exports.isType = void 0;
/**
* 判断对象类型的柯里化函数
* @param {Type} type 对象的类型
* @returns {IsType} 返回一个判断指定对象是否是指定类型的函数
*/
function isType(type) {
    return (val) => type === Object.prototype.toString.call(val).slice(8, -1);
}
exports.isType = isType;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Boolean 类型
 */
exports.isBoolean = isType('Boolean');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Object 类型
 */
exports.isObject = isType('Object');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Function 类型
 */
exports.isFunction = isType('Function');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 String 类型
 */
exports.isString = isType('String');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Null 类型
 */
exports.isNull = isType('Null');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Undefined 类型
 */
exports.isUndefined = isType('Undefined');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是不是一个 Date 类型
 */
exports.isDate = isType('Date');
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否有意义, 即不为 Undefined, 也不为 Null
 */
const isDef = (target) => !(0, exports.isNull)(target) && !(0, exports.isUndefined)(target);
exports.isDef = isDef;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否没有意义, 即为 Undefined, 或者为 Null
 */
const isUnDef = (target) => (0, exports.isNull)(target) || (0, exports.isUndefined)(target);
exports.isUnDef = isUnDef;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否是一个 Promise 对象, 是否包含 .then 和 .catch 方法
 */
const isPromise = (target) => !!target && (0, exports.isObject)(target) && (0, exports.isFunction)(target.then) && (0, exports.isFunction)(target.catch);
exports.isPromise = isPromise;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个数字字符串
 */
const isDecimal = (str) => (0, exports.isString)(str) && /^\d+\.\d+$/.test(str);
exports.isDecimal = isDecimal;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个电话号码字符串
 */
const isPhone = (str) => /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/.test(str + '');
exports.isPhone = isPhone;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个电子邮件字符串
 */
const isEmail = (str) => (0, exports.isString)(str) && /^\w+@[a-zA-Z\d]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(str);
exports.isEmail = isEmail;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否是一个类, 即可以 new 的 class 对象
 */
const isClass = (target) => {
    if (typeof target !== 'function')
        return false;
    const __str__ = target.toString();
    if (target.prototype === undefined)
        return false;
    if (target.prototype.constructor !== target)
        return false;
    if (__str__.slice(0, 5) === 'class')
        return true;
    if (Object.getOwnPropertyNames(target.prototype).length >= 2)
        return true;
    if (/^function\s+\(|^function\s+anonymous\(/.test(__str__))
        return false;
    if (/^function\s+[A-Z]/.test(__str__))
        return true;
    if (/\b\(this\b|\bthis[\.\[]\b/.test(__str__)) {
        if (/classCallCheck\(this/.test(__str__))
            return true;
        return /^function\sdefault_\d+\s*\(/.test(__str__);
    }
    return false;
};
exports.isClass = isClass;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标是否是一个外部链接
 */
const isExternal = (path) => {
    const reg = /^(https?:|mailto:|tel:)/;
    return reg.test(path);
};
exports.isExternal = isExternal;
/**
 * @param {any} target 目标对象
 * @returns {boolean} 返回目标是否是一个数组对象
 */
const isArray = (arg) => {
    if (typeof Array.isArray === "undefined") {
        return Object.prototype.toString.call(arg) === "[object Array]";
    }
    return Array.isArray(arg);
};
exports.isArray = isArray;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标字符串是否是一个 http 或者 https 链接
 */
const isHttpUrl = (path) => (0, exports.isString)(path) && /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#\/)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(path);
exports.isHttpUrl = isHttpUrl;
/**
 * @param {string} target 目标字符串
 * @returns {boolean} 返回目标字符串是否是一个有效的 URL 地址
 */
const isValidURL = (url) => {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url);
};
exports.isValidURL = isValidURL;
