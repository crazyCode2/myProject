<!-- 书影音 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="书影音"></mt-header>
    <!-- 内容部分 -->
    <div class="content">
      <!-- 轮播图 组件一 -->
      <banner :listImg="bannerList"></banner>
      <!-- 轮播图 组件二 -->
      <!--  <swiper :swiper="bannerList"></swiper> -->
      <!-- 手风琴 -->
      <squeeze-box :headerData="headerData"></squeeze-box>
    </div>
  </div>
</template>

<script>
  import Banner from '../../components/Banner.vue'
  // import Swiper from '../../components/Swiper.vue'
  import SqueezeBox from '../../components/SqueezeBox.vue'

  export default {
    name: 'AudioBook',
    components: {
      Banner,
      SqueezeBox
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
        ],
        headerData: [{
          name: '导航1',
          list: [{name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}],
          show: false
        }, {
          name: '导航2',
          list: [{name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}],
          show: false
        }, {
          name: '导航3',
          list: [{name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}],
          show: false
        }, {
          name: '导航4',
          list: [{name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}],
          show: false
        }, {
          name: '导航5',
          list: [{name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}, {name: '子集',list: [{name:'张三',age:'20'}],showItem:false}],
          show: false
        }]
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    position: absolute;
    top: 40px;
    left: 0px;
    right: 0px;
    bottom: 53px;
    overflow: scroll;
  }
  /*隐藏 滚动条*/
  ::-webkit-scrollbar{
    display:none;
  }
</style>
