"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidURL = exports.isHttpUrl = exports.isArray = exports.isExternal = exports.isClass = exports.isDate = exports.isEmail = exports.isPhone = exports.isDecimal = exports.isPromise = exports.isUnDef = exports.isDef = exports.isUndefined = exports.isNull = exports.isString = exports.isFunction = exports.isObject = exports.isBoolean = exports.isType = void 0;
function isType(type) {
    return function (val) {
        return type === Object.prototype.toString.call(val).slice(8, -1);
    };
}
exports.isType = isType;
exports.isBoolean = isType('Boolean');
exports.isObject = isType('Object');
exports.isFunction = isType('Function');
exports.isString = isType('String');
exports.isNull = isType('Null');
exports.isUndefined = isType('Undefined');
const isDef = (target) => !(0, exports.isNull)(target) && !(0, exports.isUndefined)(target);
exports.isDef = isDef;
const isUnDef = (target) => (0, exports.isNull)(target) || (0, exports.isUndefined)(target);
exports.isUnDef = isUnDef;
const isPromise = (target) => !!target && (0, exports.isObject)(target) && (0, exports.isFunction)(target.then) && (0, exports.isFunction)(target.catch);
exports.isPromise = isPromise;
const isDecimal = (str) => (0, exports.isString)(str) && /^\d+\.\d+$/.test(str);
exports.isDecimal = isDecimal;
const isPhone = (str) => /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/.test(str + '');
exports.isPhone = isPhone;
const isEmail = (str) => (0, exports.isString)(str) && /^\w+@[a-zA-Z\d]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(str);
exports.isEmail = isEmail;
const isDate = (val) => isType('Date')(val);
exports.isDate = isDate;
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
const isExternal = (path) => {
    const reg = /^(https?:|mailto:|tel:)/;
    return reg.test(path);
};
exports.isExternal = isExternal;
const isArray = (arg) => {
    if (typeof Array.isArray === "undefined") {
        return Object.prototype.toString.call(arg) === "[object Array]";
    }
    return Array.isArray(arg);
};
exports.isArray = isArray;
const isHttpUrl = (path) => (0, exports.isString)(path) && /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#\/)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(path);
exports.isHttpUrl = isHttpUrl;
const isValidURL = (url) => {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url);
};
exports.isValidURL = isValidURL;
