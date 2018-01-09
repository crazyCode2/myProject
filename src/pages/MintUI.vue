<!-- mint-ui -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="mint-ui">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容部分 -->
    <mt-field label="使用说明" placeholder="mint-ui介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
  </div>
</template>

<script>
  export default {
    name: 'MintUI',
    data(){
      return {
        introduction:'使用mint-ui,需要在main.js中全局注入'
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
