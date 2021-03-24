import axios from 'axios';
import vue from '../main.js'
// import vue from 'vue'

import {
    Message
} from 'element-ui';
axios.defaults.baseURL = 'http://192.168.1.102:90/'

// 响应拦截器
axios.interceptors.response.use (

    response => {
        
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response.status == 200) {
           
            // console.log(vue.$store.state.token)
            if (response.data.code == 0) {
                response.data = response.data.data
                return Promise.resolve(response)
            }

            if (response.data.code == '400') {
                Message.error(response.data.message)
                return Promise.reject(response);
            }
            if (response.data.code == '402') {
                Message.error(response.data.message)
                // router.push('/login')
                return Promise.reject(response);
            }

            if (response.data.code == '403') {
                Message.error('权限不足')
                return Promise.reject(response);
            }

            if (response.data.code == '500') {
                
                Message.error('系统出错')
                return Promise.reject(response);
            }
            if (response.data.code == '10001') {
                
                Message.error('用户名或密码错误')
                return Promise.reject(response);
            }

            Message.error('未知错误')
            return Promise.reject(response);

        } else {
            Message.error('发生错误，请检查网络')
            return Promise.reject(response);

        }
    },
    error => {

        Message.error("发生错误，请检查网络")
        if (error.response.status) {
            return Promise.reject(error.response);
        }

    })

// expect default axios

export const postRequest = (url, params) => {

    return axios({
        method: 'post',
        url: url,
        data: params,
        // transformRequest: [function (data) {
        //     let ret = ''
        //     for (let it in data) {
        //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        //     }
        //     return ret
        // }],
        headers: {
            'Content-Type': 'application/json',
            'token': vue.$store.state.token
        }
    });
}


export const upload = (url, params) => {
    const data = new FormData()
    data.append('file', params)
    return axios({
        method: 'post',
        url: url,
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
            let complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
            self.uploadMessage = '上传 ' + complete
            console.log(complete)
        }
    });
}


export const getRequest = (url, vue) => {
    return axios({
        method: 'get',
        url: url,
        headers: {
            'token': vue.$store.state.token
        }
    });
}

