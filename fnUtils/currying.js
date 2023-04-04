"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curring = void 0;
function curring(callback) {
    return function curried(...args) {
        if (args.length >= callback.length) {
            return callback.apply({}, args);
        }
        else {
            return function (...args2) {
                return curried.apply({}, args.concat(args2));
            };
        }
    };
}
exports.curring = curring;
