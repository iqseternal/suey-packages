import { aesEncryptAlgorithm } from '../fnUtils/encryption';
import { AES_DEFAULT_KEY } from './fnType';
if (!window) {
    throw new Error(`not have window...`);
}
const storage = window.sessionStorage;
if (!storage) {
    throw new Error(`not have window.sessionStorage...`);
}
export const seGet = (key, options) => {
    const data = storage.getItem(key);
    if (data === null)
        return data;
    if (options?.decrypt) {
        const str = aesEncryptAlgorithm(data, options.aesKey ?? AES_DEFAULT_KEY);
        try {
            return JSON.parse(str);
        }
        catch {
            return null;
        }
    }
    try {
        return JSON.parse(data);
    }
    catch {
        return null;
    }
};
export const seSet = (key, value, options) => {
    let data = JSON.stringify(value);
    if (options?.encrypt) {
        data = aesEncryptAlgorithm(data, options.aesKey ?? AES_DEFAULT_KEY);
    }
    storage.setItem(key, data);
};
export const seRemove = (key) => storage.removeItem(key);
export const seClear = () => storage.clear();
