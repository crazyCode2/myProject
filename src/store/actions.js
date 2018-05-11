/**
 * 步骤三
 * 管理事件(行为)
 */

// 引入 状态(类型),用于提交到mutations
import * as types from './types'

export default {
  // 显示 底部tab栏
  showTabBar:({commit}) => {
    // 提交到 mutations
    commit(types.SHOW_TABBAR);
  },
  // 隐藏 底部tab栏
  hideTabBar:({commit}) => {
    // 提交到 mutations
    commit(types.HIDE_TABBAR);
  },
  // 保存 当前序号 currentIndex
  currentIndex: ({commit}, res) => {
    commit(types.CURRENT_INDEX, res);
  }
}
