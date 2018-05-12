<!-- 下拉框 测试页 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="下拉框 测试页">
      <a slot="right" @click="showSearch">
        <icon type="search"></icon>
      </a>
    </x-header>
    <!-- 内容部分 -->
    <!-- 搜索框 组件一 -->
    <!-- <Search
      @currentSearchTxt="getSearchTxt"
      :placeholder="'请输入姓名'"
    /> -->
    <!-- 搜索框 组件二 -->
    <SearchBackups
      @currentSearchTxt="getSearchTxt"
      :placeholder="'请输入姓名'"
      :show="showSearchBtn"
    />
    <!-- 下拉框 组件 -->
    <BuildingTabsSelect
      :tabs="tabs"
      @tabsData="getTabsData"
    />
  </div>
</template>

<script>
  import { XHeader, Icon } from 'vux'
  // 搜索框 组件一
  import Search from '../../components/Search'
  // 搜索框 组件二
  import SearchBackups from '../../components/SearchBackups'
  // 条件选择框 组件
  import BuildingTabsSelect from '../../components/BuildingTabsSelect'

  export default {
    name: 'Select',
    components: {
      XHeader,
      Icon,
      Search,
      SearchBackups,
      BuildingTabsSelect,
    },
    data(){
      return {
        showSearchBtn: false, // 显示或隐藏搜索框
        tabs: ['区域','监区','类别','状态']
        // tabs: ['区域','监区','状态','全部类型']
      }
    },
    methods: {
      // 获取 搜索框 组件一 的值
      getSearchTxt(data){
        console.log(data);
      },
      // 显示或隐藏搜索框
      showSearch(){
        this.showSearchBtn = !this.showSearchBtn;
      },
      // 获取条件选择组件参数
      getTabsData(data){
        console.log(data);
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
