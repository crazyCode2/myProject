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
    <div>
      <p>weex-ui 无法直接引入vue项目,因为weex-ui 对样式规范有要求,不支持简写,容易产生冲突。</p>
    </div>
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
  p{
    font-size: 16px;
    line-height: 30px;
    text-indent: 1em;
  }
</style>
