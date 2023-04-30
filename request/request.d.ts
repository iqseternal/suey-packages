import { AxiosResponse, AxiosPromise, Method } from 'axios';
import type { AxiosRequestConfig } from 'axios';
export declare enum REQ_METHODS {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
    UPDATE = "UPDATE",
    PUT = "PUT"
}
export type HConfig = {
    needAuth?: boolean;
    needTimestamp?: boolean;
    encryption?: boolean;
};
export type ApiRequestConfig = AxiosRequestConfig & HConfig;
export interface RequestConfig extends AxiosRequestConfig {
    hConfig?: HConfig;
}
type RequestFn = (payload: RequestConfig) => AxiosPromise;
type Interceptors<K, V> = {
    onFulfilled?: (config: K) => V;
    onRejected?: (config: K) => V;
};
type SendPreFn = Interceptors<RequestConfig, void>;
type RespAftFn = Interceptors<AxiosResponse, AxiosPromise<AxiosResponse>>;
export default function createRequest(baseURL: string, sendPre?: SendPreFn, respAft?: RespAftFn, config?: AxiosRequestConfig): RequestFn;
export declare const createApiRequest: (baseURL: string, sendPre?: SendPreFn, respAft?: RespAftFn) => {
    request: RequestFn;
    createApi: (method: Method) => (url: string, apiConfig?: ApiRequestConfig) => AxiosPromise;
    apiGet: (url: string, apiConfig?: ApiRequestConfig) => AxiosPromise;
    apiPost: (url: string, apiConfig?: ApiRequestConfig) => AxiosPromise;
};
export {};
