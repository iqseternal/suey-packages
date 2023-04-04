"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiRequest = exports.REQ_METHODS = void 0;
const axios_1 = __importDefault(require("axios"));
var REQ_METHODS;
(function (REQ_METHODS) {
    REQ_METHODS["GET"] = "GET";
    REQ_METHODS["POST"] = "POST";
    REQ_METHODS["DELETE"] = "DELETE";
    REQ_METHODS["UPDATE"] = "UPDATE";
    REQ_METHODS["PUT"] = "PUT";
})(REQ_METHODS = exports.REQ_METHODS || (exports.REQ_METHODS = {}));
;
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
const createApiRequest = (baseURL, sendPre, respAft) => {
    const request = createRequest(baseURL, sendPre, respAft);
    const createApi = (method) => {
        return (url, apiConfig) => {
            const hConfig = {
                needAuth: apiConfig?.needAuth,
                encryption: apiConfig?.encryption
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
        apiGet: createApi(REQ_METHODS.GET),
        apiPost: createApi(REQ_METHODS.POST)
    };
};
exports.createApiRequest = createApiRequest;
