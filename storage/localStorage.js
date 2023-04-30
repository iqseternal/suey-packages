import { aesEncryptAlgorithm } from '../fnUtils/encryption';
import { AES_DEFAULT_KEY } from './fnType';
if (!window) {
    throw new Error(`not have window...`);
}
const storage = window.localStorage;
if (!storage) {
    throw new Error(`not have window.localStorage...`);
}
export const loGet = (key, options) => {
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
export const loSet = (key, value, options) => {
    let data = JSON.stringify(value);
    if (options?.encrypt) {
        data = aesEncryptAlgorithm(data, options.aesKey ?? AES_DEFAULT_KEY);
    }
    storage.setItem(key, data);
};
export const loRemove = (key) => storage.removeItem(key);
export const loClear = () => storage.clear();
