<!-- weex-ui -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="weex-ui">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- <wxc-minibar title="weex-ui"></wxc-minibar> -->
  </div>
</template>

<script>
  // import { WxcMinibar } from 'weex-ui';

  export default {
    name: 'WeexUI',
    components: {
      // WxcMinibar
    },
    data(){
      return {
        //
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
