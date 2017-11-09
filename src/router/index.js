import Vue from 'vue'
import Router from 'vue-router'
import CheckList from '../pages/CheckList'
import DateTimePicker from '../pages/DateTimePicker'
import UploadImg from '../pages/UploadImg'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'CheckList',
    //   component: CheckList
    // }
    // {
    //   path: '/',
    //   name: 'DateTimePicker',
    //   component: DateTimePicker
    // }
    {
      path: '/',
      name: 'UploadImg',
      component: UploadImg
    }
  ]
})
