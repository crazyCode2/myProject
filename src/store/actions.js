/**
 * 步骤三
 * 管理事件(行为)
 */

// 引入 状态(类型),用于提交到mutations
import * as types from './types'
// 显示 底部tab栏
export function showTabBar ({ commit }) {
  // 提交到 mutations
  commit(types.SHOW_TABBAR);
}
// 隐藏 底部tab栏
export function hideTabBar ({ commit }) {
  // 提交到 mutations
  commit(types.HIDE_TABBAR);
}
