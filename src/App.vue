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
  // css3实现文字扫光渐变动画效果
  .masked{
    text-align: center;
    background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);
    // background-image: -webkit-linear-gradient(left, #f0fff0, #bbffbb 25%, #93ff93 50%, #53ff53 75%, #00ec00);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 4s infinite linear;
  }
  @-webkit-keyframes masked-animation {
    0%{ background-position: 0 0;}
    100% { background-position: -100% 0;}
  }
</style>
