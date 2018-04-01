<template>
  <li class="weui-uploader__file" :style="style"></li>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    style () {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      }
    }
  }
}
</script>

<style lang="less" scoped>
  //@import '~vux/src/styles/weui/widget/weui-uploader/index.less';
</style>
