<!-- vux-uploader 图片上传组件 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="vux-uploader图片上传组件">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容部分 -->
    <!-- <uploader
      :max="varmax"
      :images="images"
      :handle-click="true"
      :show-header="false"
      :readonly="true"
      :upload-url="uploadUrl"
      name="img"
      :params="params"
      size="small"
      @preview="previewMethod"
      @add-image="addImageMethod"
      @remove-image="removeImageMethod"
    ></uploader> -->

    <uploader
      :autoUpload="false"></uploader>
  </div>
</template>

<script>
  // 引入组件
  import Uploader from '../../components/Uploader/uploader.vue'

  export default {
    components: {
      Uploader,
    },
    data(){
      return {
        varmax: 5, // 图片最大张数
        images: [], // 图片数组
        uploadUrl: '', // 接收上传图片的url
        params: {} // 上传文件时携带参数
      }
    },
    mounted () {
      //
    },
    methods: {
      previewMethod(){
        //
      },
      addImageMethod(){
        //
      },
      removeImageMethod(){
        //
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/weui/widget/weui-uploader/index.less';
</style>
