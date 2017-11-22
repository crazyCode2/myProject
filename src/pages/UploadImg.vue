<!-- 上传图片 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="上传图片">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div style="width: 100%;">
      <m-up-loader :src="src"></m-up-loader>
    </div>
  </div>
</template>

<script>
  // 上传图片组件
  import mUpLoader from '../components/UpLoader'

  export default {
    name: 'UploadImg',
    components: {
      mUpLoader
    },
    data () {
      return {
        src: '/api/imgs', // 后台接受图片的路径
      }
    },
    mounted () {
      //
    },
    methods: {
      //
    }
  }
</script>

<style lang="less" scoped>
  .show {
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    border: 1px solid #d5d5d5;
  }
  .picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
