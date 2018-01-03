/**
 * 步骤一
 * vuex 入口文件
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import * as actions from './actions'
import * as mutations from './mutations'

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    tabbar:true // 底部tab栏
  },

  getters: {
    tabbarShow (state) {
      return state.tabbar;
    }
  }
})

export default store;
