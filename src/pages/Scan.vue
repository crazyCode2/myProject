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
    <m-q-r-scan :paused="start"></m-q-r-scan>
  </div>
</template>

<script>
  // 引入 扫一扫组件
  import mQRScan from '../components/QRScan'

  export default {
    name: 'Scan',
    components: {
      mQRScan
    },
    data(){
      return {
        start:true
      }
    },
    methods: {
      //
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
