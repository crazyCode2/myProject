/**
 * 配置API接口地址
 * 测试接口：https://h5.manhua.163.com/category/1004.json?page=1
 */
// const root = 'https://h5.manhua.163.com/' // 测试
const root = 'api/' // 测试

// 引用axios
import axios from 'axios'

//axios默认配置请求的api基础地址
axios.defaults.baseURL = root;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // post 内容类型
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8'; // get 内容类型
axios.defaults.timeout = 30000; // 超时设置,超时进入错误回调，进行相关操作
axios.defaults.withCredentials = true; // 是否支持跨域cookie

// 引入 vm 实例
import vm from '../main.js'

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

/**
 * 接口处理函数
 */
function apiAxios (method, url, params, success, failure) {
  if(vm){
    // 显示等待框
    vm.$vux.loading.show({
      text: '加载中...'
    });
  }

  if (params) {
    params = filterNull(params)
  }

  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null, // post参数
    params: method === 'GET' || method === 'DELETE' ? params : null // get参数
  })
  .then(function (res) {
    // success(res.data)

    // 判读 成功的回调/失败的回调
    if (res.status == 200) {
      if (success) {
        success(res.data)
      }
    } else {
      // 显示提示框
      vm.$vux.toast.text(res.data.mes);
    }
    // 隐藏等待框
    vm.$vux.loading.hide();
  })
  .catch(function (err) {
    // 隐藏等待框
    vm.$vux.loading.hide();
    // 跳转网络异常页面
    // vm.$router.push({name: 'Error'});
    // 提示框
    vm.$vux.toast.text('网络异常,请检查网络!');
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
