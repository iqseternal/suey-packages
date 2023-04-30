import Cookies from 'js-cookie';
import { aesEncryptAlgorithm, aesDecryptAlgorithm } from '../fnUtils/encryption';
import { isDef } from '../fnUtils/judgeType';
import { AES_DEFAULT_KEY } from './fnType';
export const ckGet = (key, options) => {
    const data = Cookies.get(key);
    if (options?.decrypt) {
        return aesDecryptAlgorithm(data, options.aesKey ?? AES_DEFAULT_KEY);
    }
    return data;
};
export function ckSet(key, value, time, options) {
    if (isDef(options)) {
        if (typeof time !== 'number') {
            throw new TypeError(``);
        }
        let v;
        if (options?.encrypt) {
            v = aesEncryptAlgorithm(value, options.aesKey ?? AES_DEFAULT_KEY);
        }
        else
            v = JSON.stringify(value);
        Cookies.set(key, v, { expires: time });
        return;
    }
    if (typeof time === 'object') {
        let v;
        if (options?.encrypt) {
            v = aesEncryptAlgorithm(value, options.aesKey ?? AES_DEFAULT_KEY);
        }
        else
            v = JSON.stringify(value);
        Cookies.set(key, v);
        return;
    }
    if (typeof time === 'number') {
        Cookies.set(key, JSON.stringify(value), { expires: time });
        return;
    }
    Cookies.set(key, value);
}
export const ckRemove = (key) => Cookies.remove(key);
