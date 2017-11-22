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

</style>
