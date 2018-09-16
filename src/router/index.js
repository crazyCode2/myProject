import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login/Login' // 登录页
import Home from '../pages/Home/Home' // 首页
import CheckList from '../pages/CheckList' // 复选框列表
import DateTimePicker from '../pages/DateTimePicker' // 日期选择器
import Uploader from '../pages/UploadImg/Uploader.vue' // vux 图片上传
import UploadImg from '../pages/UploadImg/UploadImg' // 图片上传
import QR from '../pages/Scan/QR' // 生成二维码
import Scan from '../pages/Scan/Scan' // 扫描二维码
import Scanner from '../pages/Scan/Scanner' // 扫一扫
import QrScanner from '../pages/Scan/QrScanner' // 扫一扫 20180109
import LoadMore from '../pages/More/LoadMore' // 下拉刷新/上拉加载更多(引入VueScroller)
import VueScroller from '../pages/More/VueScroller' // 下拉刷新/上拉加载更多(自定义VueScroller)
import GetMore from '../pages/More/GetMore' // 下拉刷新/上拉加载更多(自定义Scroller)
import BetterScroll from '../pages/More/BetterScroll' // 下拉刷新/上拉加载更多(vue+better-scroll)
import Dropload from '../pages/More/Dropload' // 下拉刷新/上拉加载更多(Dropload)
import Diagram from '../pages/Echarts/Diagram' // 图表
import MessageBox from '../pages/Toast/MessageBox' // 弹窗
import Fold from '../pages/List/Fold' // 二级折叠列表
import Cuttle from '../pages/List/Cuttle' // 三级折叠列表
import Toast from '../pages/Toast/Toast' // 提示框
import Directive from '../pages/Util/Directive' // 自定义指令
import Filter from '../pages/Util/Filter' // 自定义过滤器
import MintUI from '../pages/UI/MintUI' // mint-ui
import VuxUI from '../pages/UI/VuxUI' // vux-ui webpack.base.conf.js
import Picker from '../pages/UI/Picker' // Picker 调试
import WeexUI from '../pages/UI/WeexUI' // weex-ui
import AudioBook from '../pages/AudioBook/AudioBook' // 书影音
import Mine from '../pages/Mine/Mine' // 我的
import Setting from '../pages/Mine/Setting.vue' // 设置
import Iframe from '../pages/Webview/Iframe' // Iframe
import Modules from '../pages/Modules/Modules' // 九宫格
import Lottery from '../pages/Lottery/Lottery' // 抽奖活动
import LotteryRecord from '../pages/Lottery/LotteryRecord' // 获奖记录
import Api from '../pages/Api/Api' // api请求测试
import Mp3 from '../pages/Mp3/Mp3' // mp3调试
import FilterBarTest from '../pages/FilterBarTest/FilterBarTest' // 移动端筛选条组件
import Preparation from '../pages/FilterBarTest/Preparation' // 筛选 css3
import PersonalInformation from '../pages/PersonalInformation/PersonalInformation' // 个人信息 table
// import SvgMap from '../pages/SvgMap/SvgMap' // svg 地图
import Select from '../pages/Select/Select' // 下拉框 测试页
import ThumbnailPage from '../pages/ThumbnailPage/ThumbnailPage' // 缩略图

Vue.use(Router)

export default new Router({
  routes: [
    // 默认页面
    {
      path: '/',
      component: Home
    },
    // 路由不存在重定向
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
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
    // vux 图片上传
    {
      path: '/uploader',
      name: 'Uploader',
      component: Uploader
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
    // 扫一扫 20180109
    {
      path: '/qrScanner',
      name: 'QrScanner',
      component: QrScanner
    },
    // 下拉刷新/上拉加载更多(引入VueScroller)
    {
      path: '/loadMore',
      name: 'LoadMore',
      component: LoadMore
    },
    // 下拉刷新/上拉加载更多(自定义VueScroller)
    {
      path: '/vueScroller',
      name: 'VueScroller',
      component: VueScroller
    },
    // 下拉刷新/上拉加载更多(自定义Scroller)
    {
      path: '/getMore',
      name: 'GetMore',
      component: GetMore
    },
    // 下拉刷新/上拉加载更多(vue+better-scroll)
    {
      path: '/betterScroll',
      name: 'BetterScroll',
      component: BetterScroll
    },
    // 下拉刷新/上拉加载更多(Dropload)
    {
      path: '/dropload',
      name: 'Dropload',
      component: Dropload
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
    // 二级折叠列表
    {
      path: '/fold',
      name: 'Fold',
      component: Fold
    },
    // 三级折叠列表
    {
      path: '/cuttle',
      name: 'Cuttle',
      component: Cuttle
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
    // Picker 调试
    {
      path: '/picker',
      name: 'Picker',
      component: Picker
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
    },
    // 设置
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    // Iframe
    {
      path: '/iframe',
      name: 'Iframe',
      component: Iframe
    },
    // 九宫格
    {
      path: '/modules',
      name: 'Modules',
      component: Modules
    },
    // 抽奖活动
    {
      path: '/lottery',
      name: 'Lottery',
      component: Lottery
    },
    // 抽奖活动
    {
      path: '/lotteryRecord',
      name: 'LotteryRecord',
      component: LotteryRecord
    },
    // api请求测试
    {
      path: '/api',
      name: 'Api',
      component: Api
    },
    // mp3 调试
    {
      path: '/mp3',
      name: 'Mp3',
      component: Mp3
    },
    // 移动端删选条件
    {
      path: '/filterBarTest',
      name: 'FilterBarTest',
      component: FilterBarTest
    },
    // 筛选 css3
    {
      path: '/preparation',
      name: 'Preparation',
      component: Preparation
    },
    // 个人信息 table
    {
      path: '/personalInformation',
      name: 'PersonalInformation',
      component: PersonalInformation
    },
    // // svg 地图
    // {
    //   path: '/svgMap',
    //   name: 'SvgMap',
    //   component: SvgMap
    // },
    // 下拉框 测试页
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    // 缩略图
    {
      path: '/thumbnailPage',
      name: 'ThumbnailPage',
      component: ThumbnailPage
    },
  ]
})
