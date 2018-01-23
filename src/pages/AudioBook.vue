<!-- 书影音 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="书影音"></mt-header>
    <!-- 轮播图 组件一 -->
    <banner :listImg="bannerList"></banner>
    <!-- 轮播图 组件二 -->
    <swiper :swiper="bannerList"></swiper>
  </div>
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Swiper from '../components/Swiper.vue'

  export default {
    name: 'AudioBook',
    components: {
      Banner,
      Swiper
    },
    data(){
      return {
        bannerList: [
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172411843341.jpg;","url":""},
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172434968049.jpg;","url":""},
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172503906167.jpg;","url":""},
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172518390352.jpg;","url":""},
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172540250495.jpg;","url":""},
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172552359735.jpg;","url":""}
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
