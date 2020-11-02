import axios from 'axios';
import {message} from 'antd'
import paramsQs from 'qs';

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});

http.interceptors.request.use(
  config => {
    // post数据序列化  针对post需要
    if (config.method !== 'get') {
      if (!config['headers']['Content-Type'] || config['headers']['Content-Type'] === 'application/x-www-form-urlencoded') {
        config.data = paramsQs.stringify(config.data);
      }
    }
    return config;
  },
  error => Promise.reject(error),
)

http.interceptors.response.use(
  (response) => {
    console.log(response.data)
    let responseData = response.data
    if (responseData.status.code !== 0) {
      message.error(responseData.status.message)
      return {}
    }
    return response.data.data;
  },
  (error) => {
    if (error.response) {
      if ([400, 401].indexOf(error.response.status) > -1) {
        console.log('error.response', error.response);
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log('error.request', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log('error.config', error.config);
    return Promise.reject(error);
  },
);

/**
 * @description: 网络请求
 * @param {url: 请求地址, method?: 请求方式, data?: 请求参数, conf?: 请求时headers配置} 
 * @return {} 
 */
export function request(url: string, method?: string, data?: any, conf?: any) {
  switch (method) {
    case 'get':
      return http.get(url, { params: data })
    case 'post':
      return http.post(url, data )
    case 'put':
      return http.put(url, data, conf)
    default:
      return http.get(url, { params: data })
  }
}
