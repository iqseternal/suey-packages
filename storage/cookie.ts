import Cookies from 'js-cookie';
import { RemoveFn, SetTimeFn } from './fnType';

export const ckGet = <T extends string>(key: string): T | null => {
  let data = Cookies.get(key);
  return data;
}

export const ckSet: SetTimeFn = <T>(key: string, value: T, time?: number): void => {
  if (typeof time === 'number') {
    Cookies.set(key, JSON.stringify(value), { expires: time });
    return;
  }

  Cookies.set(key, value);
}

export const ckRemove: RemoveFn = (key: string): void => Cookies.remove(key);



