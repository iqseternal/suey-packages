
export const AES_DEFAULT_KEY = 'design::aes::key';

export interface SetOptions {
  encrypt: boolean;
  aesKey: string;
};

export type SetFn = <T>(key: string, value: T, options?: Partial<SetOptions>) => void;
export type SetTimeFn = <T>(key: string, value: T, time?: number, options?: Partial<SetOptions>) => void;

export interface GetOptions {
  decrypt: boolean;
  aesKey: string;
};

export type GetFn = <T>(key: string, options?: Partial<GetOptions>) => T | null;

export type RemoveFn = (key: string) => void;

export type ClearFn = () => void;
