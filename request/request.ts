import axios, { AxiosResponse, AxiosPromise, Method } from 'axios';
import type { InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios';

export enum REQ_METHODS { GET = 'GET', POST = 'POST', DELETE = 'DELETE', UPDATE = 'UPDATE', PUT = 'PUT' };
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
type Interceptors<K, V> = { onFulfilled?: (config: K) => V;onRejected?: (config: K) => V; };

export type SendPreFn = Interceptors<RequestConfig, void>;
export type RespAftFn = Interceptors<AxiosResponse, AxiosPromise<AxiosResponse>>;

/**
 * 采用柯里化思想，将请求封装出去
 * @param baseURL {string} baseUrl, 与 proxy 进行匹配
 * @param sendPre {SendPreFn} 发送时
 * @param respAft {RespAftFn} 响应时
 * @param config {AxiosRequestConfig} 请求配置
 * @return function
 */
export default function createRequest(baseURL: string, sendPre?: SendPreFn, respAft?: RespAftFn, config?: AxiosRequestConfig): RequestFn {
  const instance = axios.create({
    baseURL,
    method: REQ_METHODS.POST,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 3000,
    withCredentials: false,
    ...config
  });
  instance.interceptors.request.use(
    (config: any) => {
      if (sendPre && sendPre.onFulfilled) sendPre.onFulfilled(config as RequestConfig);

      if (config.hConfig) delete config.hConfig;

      return config;
    },
    (error) => {
      if (sendPre && sendPre.onRejected) sendPre.onRejected(error as RequestConfig);
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      if (respAft && respAft.onFulfilled) return respAft.onFulfilled(response);
      return response;
    },
    (error) => {
      if (respAft && respAft.onRejected) return respAft.onRejected(error);
      return Promise.reject(error);
    }
  );
  return (payload: RequestConfig) => instance(payload);
}

export const createApiRequest = (baseURL: string, sendPre?: SendPreFn, respAft?: RespAftFn) => {
  const request = createRequest(baseURL, sendPre, respAft);

  /**
   * @param url {string} 请求地址
   * @param config {string} 请求体配置
   * @param needAuth {boolean} 是否携带token
   * @return {AxiosPromise<AxiosResponse>}
   */
  type ApiRequest = (url: string, apiConfig?: ApiRequestConfig) => AxiosPromise;

  /**
   * 创建某个固定请求方式的Api
   * @param method {Method} 请求方式
   * @return {ApiRequest} 请求Api
   */
  const createApi = (method: Method): ApiRequest => {
    return (url: string, apiConfig?: ApiRequestConfig): AxiosPromise => {
      const hConfig: HConfig = {
        needAuth: apiConfig?.needAuth,
        encryption: apiConfig?.encryption,
        needTimestamp: apiConfig?.needTimestamp
      }

      delete apiConfig?.needAuth;
      delete apiConfig?.encryption;

      return request({
        url,
        method,
        ...apiConfig as RequestConfig,
        hConfig
      })
    }
  }

  return {
    request, createApi,
    /** GET请求 */
    apiGet: createApi(REQ_METHODS.GET),
    /** POST请求 */
    apiPost: createApi(REQ_METHODS.POST)
  }
}


