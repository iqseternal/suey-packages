export declare const AES_DEFAULT_KEY = "design::aes::key";
export type SetFn = <T>(key: string, value: T) => void;
export type SetTimeFn = <T>(key: string, value: T, time?: number) => void;
export type GetFn = <T>(key: string) => T | null;
export type RemoveFn = (key: string) => void;
export type ClearFn = () => void;
