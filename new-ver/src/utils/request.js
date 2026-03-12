import axios from 'axios'
import Vue from 'vue'

import {Toast} from "vant"

const BASE_URL = '' //TODO: get base URL later

const request = axios.create({
    baseURL: BASE_URL, // Base URL: The base URL for all requests
    timeout: 5000, // Timeout: Request timeout duration
    headers: {platform: 'h5'} // Headers: Custom headers for each request
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
})

// Customize response interceptor
request.interceptors.response.use(response => {
    const res = response.data
    console.log(res)
})

export default request