import Vue from 'vue'
import App from './App'
import router from './router'

// UI组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入 axios 数据请求方式
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// 全局注册 二维码阅读器
// import VueQrcodeReader from 'vue-qrcode-reader'
// Vue.use(VueQrcodeReader)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
