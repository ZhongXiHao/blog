import axios from 'axios'
import Vue from 'vue'

import {Toast} from "vant"

const BASE_URL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3001/api' // Base URL: The base URL for all requests

const request = axios.create({
    baseURL: BASE_URL, // Base URL: The base URL for all requests
    timeout: 5000, // Timeout: Request timeout duration
    // headers: {platform: 'h5'} // Headers: Custom headers for each request
})

// Customize request interceptors
request.interceptors.request.use(config => {
    Toast.loading(
        {
            message: "loading...",
            forbidClick: true,
            duration: 0
        }
    )
    return config
})

// Customize response interceptor
request.interceptors.response.use(response => {
    const res = response.data
    console.log(res)
    if (res.code !== 200) {
        Toast(res.msg ? res.msg : 'Network Error')
        return Promise.reject({ code: res.code, msg: res.msg })
    } else {
        Toast.clear()
    }
    return res
}, error => {
    return Promise.reject(error)
})

export default request