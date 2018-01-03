import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login' // 登录页
import Home from '../pages/Home' // 首页
import CheckList from '../pages/CheckList' // 复选框列表
import DateTimePicker from '../pages/DateTimePicker' // 日期选择器
import UploadImg from '../pages/UploadImg' // 图片上传
import QR from '../pages/QR' // 生成二维码
import Scan from '../pages/Scan' // 扫描二维码
import Scanner from '../pages/Scanner' // 扫一扫
import LoadMore from '../pages/LoadMore' // 下拉刷新/上拉加载更多
import GetMore from '../pages/GetMore' // 加载更多
import Diagram from '../pages/Diagram' // 图表
import MessageBox from '../pages/MessageBox' // 弹窗
import Fold from '../pages/Fold' // 折叠列表
import Toast from '../pages/Toast' // 提示框
import Directive from '../pages/Directive' // 自定义指令
import Filter from '../pages/Filter' // 自定义过滤器
import MintUI from '../pages/MintUI' // mint-ui
import VuxUI from '../pages/VuxUI' // vux-ui webpack.base.conf.js
import WeexUI from '../pages/WeexUI' // weex-ui
import AudioBook from '../pages/AudioBook' // 书影音
import Mine from '../pages/Mine' // 我的

Vue.use(Router)

export default new Router({
  routes: [
    // 默认页面
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 首页
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    // 登录页
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 复选框列表
    {
      path: '/checkList',
      name: 'CheckList',
      component: CheckList
    },
    // 日期选择器
    {
      path: '/dateTimePicker',
      name: 'DateTimePicker',
      component: DateTimePicker
    },
    // 图片上传
    {
      path: '/uploadImg',
      name: 'UploadImg',
      component: UploadImg
    },
    // 生成二维码
    {
      path: '/qr',
      name: 'QR',
      component: QR
    },
    // 扫描二维码
    {
      path: '/scan',
      name: 'Scan',
      component: Scan
    },
    // 扫一扫
    {
      path: '/scanner',
      name: 'Scanner',
      component: Scanner
    },
    // 下拉刷新/上拉加载更多
    {
      path: '/loadMore',
      name: 'LoadMore',
      component: LoadMore
    },
    // 加载更多
    {
      path: '/getMore',
      name: 'GetMore',
      component: GetMore
    },
    // 图表
    {
      path: '/diagram',
      name: 'Diagram',
      component: Diagram
    },
    // 弹窗
    {
      path: '/messageBox',
      name: 'MessageBox',
      component: MessageBox
    },
    // 折叠列表
    {
      path: '/fold',
      name: 'Fold',
      component: Fold
    },
    // 提示框
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    // 自定义指令
    {
      path: '/directive',
      name: 'Directive',
      component: Directive
    },
    // 自定义过滤器
    {
      path: '/filter',
      name: 'Filter',
      component: Filter
    },
    // mint-ui
    {
      path: '/mint-ui',
      name: 'MintUI',
      component: MintUI
    },
    // vux-ui
    {
      path: '/vux-ui',
      name: 'VuxUI',
      component: VuxUI
    },
    // weex-ui
    {
      path: '/weex-ui',
      name: 'WeexUI',
      component: WeexUI
    },
    // 书影音
    {
      path: '/audioBook',
      name: 'AudioBook',
      component: AudioBook
    },
    // 我的
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
