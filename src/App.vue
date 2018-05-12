<!-- 入口文件 -->
<template>
  <div id="app">
    <!-- 视图层 -->
    <router-view></router-view>
    <!-- 底部选项卡 -->
    <tabbar @on-index-change="onIndexChange" v-if="tabbarShow">
      <tabbar-item selected link="/home">
        <img slot="icon" src="./assets/img/ic_tab_home_normal.png">
        <img slot="icon-active" src="./assets/img/ic_tab_home_active.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/audioBook">
        <img slot="icon" src="./assets/img/ic_tab_subject_normal.png">
        <img slot="icon-active" src="./assets/img/ic_tab_subject_active.png">
        <span slot="label">书影音</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/mine">
        <img slot="icon" src="./assets/img/ic_tab_profile_normal.png">
        <img slot="icon-active" src="./assets/img/ic_tab_profile_active.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  // 引入 vux tabbar 组件
  import { Tabbar, TabbarItem } from 'vux'
  // 引入 vuex 的两个方法
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    components:{
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        //
      }
    },
    // 计算属性
    computed:mapGetters([
      // 从 getters 中获取值
      'tabbarShow'
    ]),
    // 监听,当路由发生变化的时候执行
    watch:{
      $route(to,from){
        if(to.path == '/' || to.path == '/home' || to.path == '/audioBook' || to.path == '/mine'){
          /**
           * $store来自Store对象
           * dispatch 向 actions 发起请求
           */
          this.$store.dispatch('showTabBar');
        }else{
          this.$store.dispatch('hideTabBar');
        }
      }
    },
    methods: {
      onIndexChange (newIndex, oldIndex) {
        // console.log(newIndex, oldIndex);
      }
    }
  }
</script>

<style lang="scss">
  // 防止布局错乱
  table{
    table-layout:fixed;
  }
</style>
