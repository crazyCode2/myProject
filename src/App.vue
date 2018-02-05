<!-- 入口文件 -->
<template>
  <div id="app">
    <router-view></router-view>
    <!-- <m-tabbar v-model="select" v-if="tabbarShow">
     <m-tabbar-item id='Home' isRouter>
        <img src="./assets/img/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="./assets/img/ic_tab_home_active.png" alt="" slot="icon-active">
        首页
      </m-tabbar-item>
      <m-tabbar-item id='AudioBook' isRouter>
        <img src="./assets/img/ic_tab_subject_normal.png" alt="" slot="icon-normal">
        <img src="./assets/img/ic_tab_subject_active.png" alt="" slot="icon-active">
        书影音
      </m-tabbar-item>
      <m-tabbar-item id='Mine' isRouter>
        <img src="./assets/img/ic_tab_profile_normal.png" alt="" slot="icon-normal">
        <img src="./assets/img/ic_tab_profile_active.png" alt="" slot="icon-active">
        我的
      </m-tabbar-item>
    </m-tabbar> -->
    <tabbar v-if="tabbarShow">
      <tabbar-item selected link="/home">
        <img slot="icon" src="./assets/img/ic_tab_home_normal.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/audioBook">
        <img slot="icon" src="./assets/img/ic_tab_subject_normal.png">
        <span slot="label">书影音</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/mine">
        <img slot="icon" src="./assets/img/ic_tab_profile_normal.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  // import mTabbar from './components/Tabbar/Tabbar'
  // import mTabbarItem from './components/Tabbar/TabbarItem'
  // 引入 vux tabbar 组件
  import { Tabbar, TabbarItem } from 'vux'
  // 引入 vuex 的两个方法
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    components:{
      // mTabbar,
      // mTabbarItem,
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        select:"Home"
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
        if(to.path == '/' || to.path == '/Home' || to.path == '/AudioBook' || to.path == '/Mine'){
          /**
           * $store来自Store对象
           * dispatch 向 actions 发起请求
           */
          this.$store.dispatch('showTabBar');
        }else{
          this.$store.dispatch('hideTabBar');
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
