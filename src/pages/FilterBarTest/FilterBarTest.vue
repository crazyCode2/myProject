<!-- 移动端筛选条件 测试页 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="移动端筛选条件 测试页"></x-header>
    <!-- 内容部分 -->
    <FilterBar
      top="40"
      :barMenus="barMenus"
      @showDialog="handleShowDialog"
      @closeDialog="handleCloseDialog"
      @changeTab="handleChangeTab"
      @changeMainItem="handleChangeMainItem"
      @changeSelect="changeData">
    </FilterBar>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  // 引入组件
  import FilterBar from '../../components/FilterBar/FilterBar.vue'
  // 引入假数据
  import barMenus from './data.js';

  export default {
    name: 'FilterBarTest',
    components: {
      XHeader,
      FilterBar,
    },
    data(){
      return {
        barMenus: barMenus
      }
    },
    methods: {
      handleShowDialog(v) {
        // console.log(v);
      },
      handleCloseDialog(v) {
        // console.log(v);
      },
      handleChangeTab(v) {
        // console.log(v);
      },
      handleChangeMainItem(v) {
        // console.log(v)
      },
      changeData(v) {
        console.log(v);
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
