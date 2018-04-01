import Vue from 'vue'
import App from './App'
import router from './router'
import * as filters from './utils/filters.js'
// 引入 vuex入口文件
import store from './store/index'

// 引入 flexible.js
import './assets/js/base.js'

// MintUI组件库 npm install mint-ui --save
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// // WeexUI组件库 npm install weex-ui --save
// import WeexUI from 'weex-ui'
// import 'weex-ui/lib/style.css'
// Vue.use(WeexUI)

// 全局引入 loading/toast/alert
import { LoadingPlugin, ToastPlugin, AlertPlugin } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)
Vue.prototype.$wechat = Vue.wechat
// console.log(Vue.wechat) // 可以直接访问 wx 对象。

// 引入 axios 数据请求方式
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// 全局注册 二维码阅读器
// import VueQrcodeReader from 'vue-qrcode-reader'
// Vue.use(VueQrcodeReader)

// 全局引入 自定义指令
import './utils/directive.js'

// 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 全局引入 自定义过滤器
// import './utils/filters.js'

// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

// 全局 注册scroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// 全局引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 全局引入MessageBox
import MessageBox from './components/MessageBox/index';
Vue.use(MessageBox);

// 全局引入Toast
import './components/Toast/toast.css';
import Toast from './components/Toast/index';
Vue.use(Toast);

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

export default vm;
