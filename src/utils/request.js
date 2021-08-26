// 导入 axios 
import axios from 'axios'
// 导入 element-ui 消息模块
import { Message } from 'element-ui';

// 创建 axios 实例
const service = axios.create({
    // baseURL: 'https://mock.mengxuegu.com/',
    baseURL: process.env.VUE_APP_URL,
    timeout: 2000,
})

// 请求拦截
service.interceptors.request.use(config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
        'Content-Type': 'application/json; charset=utf-8' //配置请求头    
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
    return response.data.data;
}, error => {
    console.log('err' + error);
    Message({
      message: 'error.message',
      type: 'error',
      duration: 5 * 1000
    })
})

export default service
