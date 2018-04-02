<!-- vux-uploader 图片上传组件 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="vux-uploader图片上传组件"></x-header>
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
      :autoUpload="autoUpload"
      :uploadUrl="uploadUrl"
    ></uploader>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  // 引入组件
  import Uploader from '../../components/Uploader/uploader.vue'

  export default {
    components: {
      XHeader,
      Uploader,
    },
    data(){
      return {
        varmax: 5, // 图片最大张数
        images: [], // 图片数组
        uploadUrl: '', // 接收上传图片的url
        params: {}, // 上传文件时携带参数
        autoUpload: false // 自动上传
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
