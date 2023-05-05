import { AxiosResponse, AxiosPromise, Method } from 'axios';
import type { AxiosRequestConfig } from 'axios';
/** 预定义的请求发送方式 */
export declare enum REQ_METHODS {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
    UPDATE = "UPDATE",
    PUT = "PUT"
}
/** 扩展机制, 当项目中需要配置指定请求发送 Token, 加密, 时间戳时使用 */
export interface HConfig {
    needAuth?: boolean;
    needTimestamp?: boolean;
    encryption?: boolean;
}
export type ApiRequestConfig = AxiosRequestConfig & HConfig;
export interface RequestConfig extends AxiosRequestConfig {
    hConfig?: HConfig;
}
type RequestFn = (payload: RequestConfig) => AxiosPromise;
/** 请求拦截器 */
type Interceptors<K, V> = {
    onFulfilled?: (config: K) => V;
    onRejected?: (config: K) => V;
};
/** 创建发送请求时的拦截器 */
export type SendPreFn = Interceptors<RequestConfig, void>;
/** 创建响应时的响应拦截器 */
export type RespAftFn = Interceptors<AxiosResponse, AxiosPromise<AxiosResponse>>;
/**
 * 采用柯里化思想，将请求封装出去
 * @param {string} baseURL baseUrl, 与 proxy 进行匹配
 * @param {SendPreFn} sendPre 发送时
 * @param {RespAftFn} respAft 响应时
 * @param {AxiosRequestConfig} config 请求配置
 * @return {RequestFn} function
 */
export default function createRequest(baseURL: string, sendPre?: SendPreFn, respAft?: RespAftFn, config?: RequestConfig): RequestFn;
/**
 * 创建需要的 Api 请求, 返回的请求函数都会按照这个配置进行发送请求和拦截
 * @param {string} baseURL 请求的baseUrl
 * @param {SendPreFn} sendPre 请求的拦截
 * @param {RespAftFn} respAft 响应的拦截
 * @param {RequestConfig} config 请求的额外配置, 但是请注意, 发送请求时的配置会覆盖该配置
 * @returns 返回请求 Api
 */
export declare const createApiRequest: (baseURL: string, sendPre?: SendPreFn, respAft?: RespAftFn, config?: RequestConfig) => {
    request: RequestFn;
    createApi: (method: Method) => (url: string, apiConfig?: ApiRequestConfig) => AxiosPromise;
    /** GET请求 */
    apiGet: (url: string, apiConfig?: ApiRequestConfig) => AxiosPromise;
    /** POST请求 */
    apiPost: (url: string, apiConfig?: ApiRequestConfig) => AxiosPromise;
};
export {};
