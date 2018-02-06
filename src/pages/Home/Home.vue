<!-- 首页 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="首页"></mt-header>
    <!-- 内容部分 -->
    <div class="content">
      <!-- <mt-cell title="复选框列表" to="/checkList" is-link></mt-cell>
      <mt-cell title="日期选择器" to="/dateTimePicker" is-link></mt-cell>
      <mt-cell title="图片上传" to="/uploadImg" is-link></mt-cell>
      <mt-cell title="生成二维码" to="/qr" is-link></mt-cell>
      <mt-cell title="下拉刷新/上拉加载更多" to="/loadMore" is-link></mt-cell>
      <mt-cell title="加载更多" to="/getMore" is-link></mt-cell>
      <mt-cell title="图表" to="/diagram" is-link></mt-cell>
      <mt-cell title="弹窗" to="/messageBox" is-link></mt-cell>
      <mt-cell title="vux 图片上传" to="/uploader" is-link></mt-cell>
      <mt-cell title="二级折叠列表" to="/fold" is-link></mt-cell> -->
      <mt-cell title="三级折叠列表" to="/cuttle" is-link></mt-cell>
      <!-- <mt-cell title="提示框" to="/toast" is-link></mt-cell>
      <mt-cell title="自定义指令" to="/directive" is-link></mt-cell>
      <mt-cell title="自定义过滤器" to="/filter" is-link></mt-cell>
      <mt-cell title="mint-ui" to="/mint-ui" is-link></mt-cell>
      <mt-cell title="vux-ui" to="/vux-ui" is-link></mt-cell>
      <mt-cell title="weex-ui" to="/weex-ui" is-link></mt-cell>
      <mt-cell title="跳转登录页" to="/login" is-link></mt-cell>
      <mt-cell title="扫描二维码 20171123" to="/scan" is-link></mt-cell>
      <mt-cell title="扫一扫 20171128" to="/scanner" is-link></mt-cell>
      <mt-cell title="二维码扫一扫 20180109" to="/qrScanner" is-link></mt-cell>
      <mt-cell title="Iframe" to="/iframe" is-link></mt-cell> -->
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
