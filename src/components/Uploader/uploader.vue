<template>
  <div class="weui-cell">
    <div class="weui-cell__bd">
      <div class="weui-uploader">
        <div v-show="showHeader" class="weui-uploader__hd">
          <!-- 标题 -->
          <p class="weui-uploader__title"> {{ title }} </p>
          <!-- 图片数量限制 -->
          <div v-show="showHeader && showTip" class="weui-uploader__info">
            {{ images.length }} / {{ max }}
          </div>
        </div>

        <div class="weui-uploader__bd" :class="{small: size === 'small'}">
          <!-- 删除图片 -->
          <div v-show="!readonly && images.length > 0" class="weui-uploader__input-box remove" @click="remove">
          </div>
          <!-- 图片列表 -->
          <ul class="weui-uploader__files">
            <uploader-item v-for="image in images" :background-image="image.url" :key="image.url" @click.native="preview(image)"></uploader-item>
          </ul>
          <!-- 添加图片 -->
          <div v-show="!readonly && images.length < max" class="weui-uploader__input-box" @click="add">
            <input v-if="!handleClick" ref="input" class="weui-uploader__input" type="file" accept="image/*" :capture="showCapture" @change="change">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UploaderItem from './uploader-item.vue'
  import axios from 'axios'
  export default {
    props: {
      // 图片数组
      images: {
        type: Array,
        default: () => []
      },
      // 图片最大张数
      max: {
        type: Number,
        default: 1
      },
      // 是否显示头部
      showHeader: {
        type: Boolean,
        default: true
      },
      // 是否显示头部数字部分
      showTip: {
        type: Boolean,
        default: true
      },
      // 是否只读
      readonly: {
        type: Boolean,
        default: false
      },
      // 头部的标题
      title: {
        type: String,
        default: '图片上传'
      },
      // 是否接管+号的click事件，如果是，点击不弹出选择文件的框
      handleClick: {
        type: Boolean,
        default: false
      },
      // 选择文件后是否自动上传，如果不是，则emit change事件
      autoUpload: {
        type: Boolean,
        default: true
      },
      // 接收上传图片的url
      uploadUrl: {
        type: String,
        default: ''
      },
      // 尺寸类型
      size: {
        type: String,
        default: 'normal'
      },
      // input 的capture属性
      capture: {
        type: String,
        default: ''
      },
      // 默认上传的时候，图片使用的表单name
      name: {
        type: String,
        default: 'img'
      },
      // 上传文件时携带参数
      params: {
        type: Object,
        default: null
      }
    },
    components: {
      UploaderItem
    },
    methods: {
      // 添加图片
      add () {
        if (this.handleClick) {
          this.$emit('add-image')
        }
      },
      // 移除第一张图
      remove () {
        if (this.handleClick) {
          this.$emit('remove-image')
        } else {
          this.images.shift()
        }
      },
      // 预览
      preview (image) {
        // 暂未实现，可以捕捉preview事件自己实现
        this.$emit('preview', image)
      },
      // 适用于action的情况
      change () {
        if (this.handleClick) {
          return
        }
        let formData = new window.FormData()
        formData.append(this.name, this.$refs.input.files[0])

        console.log(this.params);
        if (this.params) {
          for( let key in this.params) {
            formData.append(key, this.params[key])
          }
        }

        // if (this.autoUpload) {
        //   if (!this.uploadUrl) {
        //     console.error('uploadUrl不应为空')
        //   }
        //   if (this.$vux && this.$vux.loading) {
        //     this.$vux.loading.show('正在上传')
        //   }
        //   axios.post(this.uploadUrl, formData)
        //   .then((response) => {
        //     if (this.$vux && this.$vux.loading) {
        //       this.$vux.loading.hide()
        //     }
        //     this.$refs.input.value = ''
        //     this.images.push(response.data.data)
        //   })
        // } else {
        //   this.$emit('upload-image', formData)
        // }
      }
    },
    computed: {
      showCapture () {
        return this.capture || undefined
      }
    }
  }
</script>

<style scoped lang="less">
  @import '~vux/src/styles/weui/widget/weui-uploader/index.less';
  .remove:before {
    width: 0;
    height: 0;
  }
  .weui-uploader{
    overflow: hidden;
  }
  .weui-uploader__bd.small {
    .weui-uploader__input-box {
      margin-right: 5px;
      margin-bottom: 5px;
      width: 58px;
      height: 58px;
    }
    .weui-uploader__file {
      width: 60px;
      height: 60px;
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
</style>
