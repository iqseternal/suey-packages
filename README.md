

设置 npm 源

`npm config set registry https://registry.npmjs.org`

安装

`npm install @suey/packages --save`




.. code::
.
|-- fnUtils
|   |-- index.ts
|   |-- encryption.ts  加密解密相关函数
|   |-- judgeType.ts  类型判断相关函数
|    -- random.ts

|    -- request
     |-- index.ts
     `-- request.ts  关于axios的二次封装函数



```javascript
import { isType, isBoolean, isNull, isUnDef } from '@suey/packages';

const isObject = isType('Object');

isObject(1); // false
isObject({}); // true

isBoolean(true); // true

isNull(undefined); // false
isNull(null); // true

// 引入加密函数, 还有 md5, aesEncryptAlgorithm, aesDecryptAlgorithm, aesEncrypt, aesDecrypt
// rsaEncryptAlgorithm, rsaDecryptAlgorithm
import { aesDecrypt } from '@suey/packages';
import { createApiRequest, REQ_METHODS } from '@suey/packages';

// 可以像如下方式创建请求
const { request, apiGet, apiPost, createApi } = createApiRequest('http://localhost:3000', {
  onFulfilled: config => { // axios 拦截器, 请求可以放行的拦截, 可以在下面做一些全局配置
    if (!config.headers) config.headers = {};

    let token = 'Bearer token......';

    if (config.hConfig?.needAuth) {

      if (config.hConfig?.encryption) token = aesDecrypt(token);

      config.headers['authorization'] = token;
    }

    if (config.hConfig?.needTimestamp) config.headers['_t'] = new Date().getTime();

  }
}, {
  onFulfilled: response => { // 和后端配合做状态解码
    if (response.status !== 200) {
      return Promise.reject(response);
    }

    return Promise.resolve(response);

  },
  onRejected: response => { // 失败时候的响应
    return Promise.reject(response);
  }
});

// 向目标发起一个 GET 请求
request({
  url: '/api',
  method: REQ_METHODS.GET,
  hConfig: {
    needAuth: true,
    encryption: true
  }
});

// 向目标发起一个 GET 请求
apiGet('/api', {
  needAuth: true,
  encryption: true,
  needTimestamp: true
});

// 向目标发起一个 POST 请求
apiPost('/api', {
  needAuth: true,
  encryption: true,
  needTimestamp: true
});

// 如果 GET 和 POST 还不足满足你的请求类型, 你可以像下面这样
const apiPut = createApi(REQ_METHODS.PUT);
apiPut('/api/put');
```


