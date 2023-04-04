"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = exports.isUrl = exports.isArray = exports.isEmail = exports.isPhone = exports.isDecimal = exports.isPromise = exports.isUnDef = exports.isDef = exports.isUndefined = exports.isNull = exports.isString = exports.isFunction = exports.isObject = exports.isBoolean = exports.isType = void 0;
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
const isArray = (target) => target && Array.isArray(target);
exports.isArray = isArray;
const isUrl = (path) => (0, exports.isString)(path) && /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#\/)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(path);
exports.isUrl = isUrl;
const isDate = (val) => isType('Date')(val);
exports.isDate = isDate;
