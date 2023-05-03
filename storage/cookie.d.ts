import { RemoveFn, SetTimeFn } from './fnType';
export declare const ckGet: <T extends string>(key: string) => T;
export declare const ckSet: SetTimeFn;
export declare const ckRemove: RemoveFn;
