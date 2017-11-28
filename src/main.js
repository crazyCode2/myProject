import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 flexible.js
import './assets/js/base.js'

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

// 全局引入 自定义指令
import './utils/directive.js'

// 全局 注册scroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// 全局引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 全局引入MessageBox
import MessageBox from './components/MessageBox/index';
Vue.use(MessageBox);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
