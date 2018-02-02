<!-- vux-ui -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="vux-ui"></x-header>
    <!-- 内容部分 -->
    <group>
      <x-input :placeholder="'标题'"></x-input>
      <x-textarea :value="content" :max="200" name="description" :placeholder="'提示'"></x-textarea>
    </group>
  </div>
</template>

<script>
  import { XHeader, Group, XInput, XTextarea } from 'vux'

  export default {
    name: 'VuxUI',
    components: {
      XHeader,
      Group,
      XInput,
      XTextarea,
    },
    data(){
      return {
        content:'使用vux,需要配置webpack.base.conf.js文件'
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
