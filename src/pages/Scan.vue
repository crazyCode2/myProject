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
      //
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
