import Vue from 'vue'
import axios from 'axios'
import router from '../router'
import qs from 'qs'
import merge from 'lodash/merge'
import {Message} from 'element-ui'
import {sortObjASCII} from '../utils/common.js'

const http = axios.create({
  timeout: 1000 * 6,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  }
});

//路由全局守卫
router.beforeEach((to, from, next) => {
  next()
  // if (sessionStorage.getItem('token')) {// 判断是否登录
  //   next()
  // } else {// 没登录则跳转到登录界面
  //   Message.error("非法访问方式！");
  //   next({
  //     path: '',
  //     query: {redirect: to.fullPath}
  //   })
  // }
});


/**
 * 请求拦截
 */
// http 请求拦截器
http.interceptors.request.use(config => {
  // config.withCredentials = true;
  config.headers = {
    'Authorization' : `Bearer ${sessionStorage.getItem('token')}`,
    'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
  };
  return config;
},function (error) {
  return Promise.reject(error);
});

//http 响应拦截器
http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 这里写清除token的代码
          sessionStorage.setItem("Token",null);
          sessionStorage.setItem("userid",null);
          console.log(router.currentRoute.fullPath)
          router.replace({
            path: '/',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response)
  });


// -------------------------- 自定义方法
/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName) => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi/' : window.SITE_CONFIG.baseUrl) + actionName
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = true) => {
  var defaults = {
    // 't': new Date().getTime()
  }
  // return openDefultParams ? merge(defaults, params) : params
  return params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'text') => {
  // var dataSign = sort_ASCII(JSON.stringify(data))
  var defaults = {
    // 't': new Date().getTime()
  }
  // data = openDefultdata ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

/**
 * 向url后加参数
 */
http.addUrlParam = function (url = '', params = {}) {
  if (url && JSON.stringify(params) != '{}') {
    var paramArray = []
    Object.keys(params).forEach(function (key) {
      var param = key + '=' + params[key]
      paramArray.push(param)
    })
    var url2 = encodeURI(url + '?' + paramArray.join('&'))
    var enurl = encodeURI(url2)
    return enurl
  } else {
    return url
  }
}

export default http
