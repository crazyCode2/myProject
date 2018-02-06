<!-- Iframe -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="Iframe">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <iframe
      :src="currentSrc"
      frameborder="0"
      scrolling=""
      style="background-color:transparent; position: absolute; z-index: -1; width: 100%; height: 100%; top: 40px;left:0;">
    </iframe>
  </div>
</template>

<script>
  export default {
    name: 'Iframe',
    data(){
      return {
        currentSrc: "https://www.cnblogs.com/"
      }
    }
  }
</script>

<style lang="less" scoped>
  /*隐藏 滚动条*/
  ::-webkit-scrollbar{
    display:none;
  }
</style>
