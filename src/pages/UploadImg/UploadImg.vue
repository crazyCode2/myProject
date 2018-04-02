<!-- 自定义 上传图片 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="自定义 上传图片"></x-header>
    <!-- 内容 -->
    <div style="width: 100%;">
      <m-up-loader :src="src" :onOff="onOff"></m-up-loader>
    </div>
    <!-- 上传按钮 -->
    <box gap="10px 10px">
      <x-button type="primary" @click.native="submit">上传图片</x-button>
    </box>
  </div>
</template>

<script>
  import { XHeader, Box, XButton } from 'vux'
  // 上传图片组件
  import mUpLoader from '../../components/UpLoader'

  export default {
    name: 'UploadImg',
    components: {
      XHeader,
      Box,
      XButton,
      mUpLoader,
    },
    data () {
      return {
        src: '/api/imgs', // 后台接受图片的路径
        onOff: {value: false} // 上传开关
      }
    },
    mounted () {
      //
    },
    methods: {
      submit(){
        this.onOff.value = true;
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
