/**
 * 步骤五
 * 获取数据
 */
// 导出
export default {
  // 获取 底部选项卡
  tabbarShow:(state) => {
    return state.tabbar;
  },
  // 获取 当前序号
  currentIndex: (state) => {
    return state.currentIndex;
  }
}
