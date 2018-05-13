/**
 * 步骤四
 * 突变(处理状态改变)
 */
import {
  SHOW_TABBAR, // 显示 tabbar
  HIDE_TABBAR, // 隐藏 tabbar
  CURRENT_INDEX, // 当前序号 currentIndex
  ORIGIN_SZJQ_LIST_DATA, // 原始监区列表数据 originSzjqListData
} from './types'

// 引入 getters
import getters from './getters'

// 定义、初始化数据
const state = {
  tabbar:true,
  currentIndex:'',
  originSzjqListData:[]
}

// 定义 mutations
const mutations = {
  // 匹配actions通过commit传过来的值,并改变state上的属性的值
  [SHOW_TABBAR](state){
    state.tabbar = true;
  },
  [HIDE_TABBAR](state){
    state.tabbar = false;
  },
  // 当前序号 currentIndex
  [CURRENT_INDEX](state, res){
    state.currentIndex = res;   //state.数据名 = data
  },
  // 原始监区列表数据 originSzjqListData
  [ORIGIN_SZJQ_LIST_DATA](state, res){
    state.originSzjqListData = res;   //state.数据名 = data
  }
}

// 导出
export default {
  state,
  mutations,
  getters
}
