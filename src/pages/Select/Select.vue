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
  </div>
</template>

<script>
  import { XHeader, Icon } from 'vux'
  // 搜索框 组件一
  import Search from '../../components/Search'
  // 搜索框 组件二
  import SearchBackups from '../../components/SearchBackups'

  export default {
    name: 'Select',
    components: {
      XHeader,
      Icon,
      Search,
      SearchBackups,
    },
    data(){
      return {
        showSearchBtn: false
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
