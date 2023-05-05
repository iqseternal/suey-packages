"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiRequest = exports.REQ_METHODS = void 0;
const axios_1 = __importDefault(require("axios"));
/** 预定义的请求发送方式 */
var REQ_METHODS;
(function (REQ_METHODS) {
    REQ_METHODS["GET"] = "GET";
    REQ_METHODS["POST"] = "POST";
    REQ_METHODS["DELETE"] = "DELETE";
    REQ_METHODS["UPDATE"] = "UPDATE";
    REQ_METHODS["PUT"] = "PUT";
})(REQ_METHODS = exports.REQ_METHODS || (exports.REQ_METHODS = {}));
;
;
/**
 * 采用柯里化思想，将请求封装出去
 * @param {string} baseURL baseUrl, 与 proxy 进行匹配
 * @param {SendPreFn} sendPre 发送时
 * @param {RespAftFn} respAft 响应时
 * @param {AxiosRequestConfig} config 请求配置
 * @return {RequestFn} function
 */
function createRequest(baseURL, sendPre, respAft, config) {
    const instance = axios_1.default.create({
        baseURL,
        method: REQ_METHODS.POST,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout: 3000,
        withCredentials: false,
        ...config
    });
    instance.interceptors.request.use((config) => {
        if (sendPre && sendPre.onFulfilled)
            sendPre.onFulfilled(config);
        if (config.hConfig)
            delete config.hConfig;
        return config;
    }, (error) => {
        if (sendPre && sendPre.onRejected)
            sendPre.onRejected(error);
        return Promise.reject(error);
    });
    instance.interceptors.response.use((response) => {
        if (respAft && respAft.onFulfilled)
            return respAft.onFulfilled(response);
        return response;
    }, (error) => {
        if (respAft && respAft.onRejected)
            return respAft.onRejected(error);
        return Promise.reject(error);
    });
    return (payload) => instance(payload);
}
exports.default = createRequest;
/**
 * 创建需要的 Api 请求, 返回的请求函数都会按照这个配置进行发送请求和拦截
 * @param {string} baseURL 请求的baseUrl
 * @param {SendPreFn} sendPre 请求的拦截
 * @param {RespAftFn} respAft 响应的拦截
 * @param {RequestConfig} config 请求的额外配置, 但是请注意, 发送请求时的配置会覆盖该配置
 * @returns 返回请求 Api
 */
const createApiRequest = (baseURL, sendPre, respAft, config) => {
    const request = createRequest(baseURL, sendPre, respAft, config);
    /**
     * 创建某个固定请求方式的Api
     * @param method {Method} 请求方式
     * @return {ApiRequest} 请求Api
     */
    const createApi = (method) => {
        return (url, apiConfig) => {
            const hConfig = {
                needAuth: apiConfig?.needAuth,
                encryption: apiConfig?.encryption,
                needTimestamp: apiConfig?.needTimestamp
            };
            delete apiConfig?.needAuth;
            delete apiConfig?.encryption;
            return request({
                url,
                method,
                ...apiConfig,
                hConfig
            });
        };
    };
    return {
        request, createApi,
        /** GET请求 */
        apiGet: createApi(REQ_METHODS.GET),
        /** POST请求 */
        apiPost: createApi(REQ_METHODS.POST)
    };
};
exports.createApiRequest = createApiRequest;
