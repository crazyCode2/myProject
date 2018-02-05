<!-- 自定义 过滤器 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="自定义过滤器">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="cont">{{currentTime | fmtDate2}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Filte',
    data(){
      return {
        currentTime: new Date()
      }
    }
  }
</script>

<style lang="less" scoped>
  .cont{
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
  }
</style>
