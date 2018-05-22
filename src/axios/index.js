import axios from 'axios'
import Qs from 'qs'
import { Message } from 'element-ui'

// axios 配置
axios.defaults.timeout = 3000 // 设置超时时间为3s
// 配置axios发送请求时携带cookie
axios.defaults.withCredentials = false
// 如果为开发环境，将baseURL设置为服务器地址
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8090'
}

// 设置content-type
// 这里处理的是 针对SpringMVC Controller 无法正确获得请求参数的问题
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8'
    }
    const data = config.data
    if (!data) {
      return config
    }
    // const key = Object.keys(data)
    // var _data = Qs.stringify(config.data)
    // alert(_data)
    // config.data = _data
    // 重写data，由{"name":"name","password":"password"} 改为 name=name&password=password
    // config.data = encodeURI(key.map(name => `${name}=${data[name]}`).join('&'))
    // 设置Content-Type
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(response => {
  const res = response
  if (res.status !== 200) {
    Message({
      message: res.statusText,
      type: 'error',
      duration: 5 * 1000
    })
  } else {
    return response.data
  }
}, error => {
  console.log('err:' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default axios
