<!-- 生成二维码 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="生成二维码">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div id="qrCode">
      <QRCode val="https://www.baidu.com/s?wd=123" :show="true" />
    </div>
  </div>
</template>

<script>
  import QRCode from '../components/QRCode.vue'
  export default {
    name: 'QR',
    components: {
      QRCode
    }
  }
</script>

<style>
  /*垂直水平居中*/
  #qrCode {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -100px 0 0 -100px;
  }
</style>
