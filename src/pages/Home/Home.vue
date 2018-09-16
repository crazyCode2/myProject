<!-- 首页 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="首页"></mt-header>
    <!-- 内容部分 -->
    <div class="content">
      <mt-cell title="复选框列表" to="/checkList" is-link></mt-cell>
      <mt-cell title="日期选择器" to="/dateTimePicker" is-link></mt-cell>
      <mt-cell title="自定义 图片上传" to="/uploadImg" is-link></mt-cell>
      <mt-cell title="生成二维码" to="/qr" is-link></mt-cell>
      <mt-cell title="下拉刷新/上拉加载更多(引入VueScroller)" to="/loadMore" is-link></mt-cell>
      <mt-cell title="下拉刷新/上拉加载更多(自定义VueScroller)" to="/vueScroller" is-link></mt-cell>
      <mt-cell title="下拉刷新/上拉加载更多(自定义Scroller)" to="/getMore" is-link></mt-cell>
      <mt-cell title="下拉刷新/上拉加载更多(vue+better-scroll)" to="/betterScroll" is-link></mt-cell>
      <mt-cell title="下拉刷新/上拉加载更多(dropload)" to="/dropload" is-link></mt-cell>
      <mt-cell title="图表" to="/diagram" is-link></mt-cell>
      <mt-cell title="弹窗" to="/messageBox" is-link></mt-cell>
      <mt-cell title="vux-uploader 图片上传" to="/uploader" is-link></mt-cell>
      <mt-cell title="二级折叠列表" to="/fold" is-link></mt-cell>
      <mt-cell title="三级折叠列表" to="/cuttle" is-link></mt-cell>
      <mt-cell title="提示框" to="/toast" is-link></mt-cell>
      <mt-cell title="自定义指令" to="/directive" is-link></mt-cell>
      <mt-cell title="自定义过滤器" to="/filter" is-link></mt-cell>
      <mt-cell title="mint-ui" to="/mint-ui" is-link></mt-cell>
      <mt-cell title="vux-ui" to="/vux-ui" is-link></mt-cell>
      <mt-cell title="Picker调试" to="picker" is-link></mt-cell>
      <mt-cell title="weex-ui" to="/weex-ui" is-link></mt-cell>
      <mt-cell title="跳转登录页" to="/login" is-link></mt-cell>
      <mt-cell title="扫描二维码 20171123" to="/scan" is-link></mt-cell>
      <mt-cell title="扫一扫 20171128" to="/scanner" is-link></mt-cell>
      <mt-cell title="二维码扫一扫 20180109" to="/qrScanner" is-link></mt-cell>
      <mt-cell title="Iframe" to="/iframe" is-link></mt-cell>
      <mt-cell title="九宫格 及 终止函数测试" to="/modules" is-link></mt-cell>
      <mt-cell title="抽奖活动" to="/lottery" is-link></mt-cell>
      <mt-cell title="api请求接口测试" to="/api" is-link></mt-cell>
      <mt-cell title="Mp3调试" to="/mp3" is-link></mt-cell>
      <mt-cell title="移动端筛选条件" to="/filterBarTest" is-link></mt-cell>
      <mt-cell title="筛选 css3" to="/preparation" is-link></mt-cell>
      <mt-cell title="个人信息 table" to="/personalInformation" is-link></mt-cell>
      <!-- <mt-cell title="svg 地图" to="/svgMap" is-link></mt-cell> -->
      <mt-cell title="下拉框 测试页" to="/select" is-link></mt-cell>
      <mt-cell title="缩略图" to="/thumbnailPage" is-link></mt-cell>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return {
        //
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
