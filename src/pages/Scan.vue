<!-- 扫描二维码 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="扫描二维码">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 https://github.com/gruhn/vue-qrcode-reader -->
    <qrcode-reader @init="onInit">
      <b>stuff here overlays the camera stream</b>
    </qrcode-reader>
  </div>
</template>

<script>
  export default {
    name: 'Scan',
    data(){
      return {
        //
      }
    },
    methods: {
      async onInit (promise) {
        // show loading indicator
        try {
          await promise
          // successfully initialized
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            // user denied camera access permisson
          } else if (error.name === 'NotFoundError') {
            // no suitable camera device installed
          } else if (error.name === 'NotSupportedError') {
            // page is not served over HTTPS (or localhost)
          } else {
            // browser is probably lacking features (WebRTC, Canvas)
          }
        } finally {
          // hide loading indicator
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
