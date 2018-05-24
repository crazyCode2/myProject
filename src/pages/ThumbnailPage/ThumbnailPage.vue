<!-- 缩略图 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="缩略图"></x-header>
    <!-- 内容部分 -->
    <box gap="10px 10px">
      <x-button type="primary" @click.native="onChange">切换</x-button>
    </box>
    <!-- 缩略图 -->
    <Thumbnail
      :picUrl="picUrl"
    />
  </div>
</template>

<script>
  import { XHeader, Box, XButton } from 'vux'
  // 引入 缩略图 组件
  import Thumbnail from '../../components/ThumbnailBackups.vue'
  export default {
    name: 'ThumbnailPage',
    components: {
      XHeader,
      Box,
      XButton,
      Thumbnail,
    },
    data(){
      return {
        picUrl_1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526816388159&di=a70c680d06ea187ba67e4e34c2391891&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1398790387%2C802640038%26fm%3D214%26gp%3D0.jpg',
        picUrl_2:'https://www.baidu.com/img/bd_logo1.png',
        picUrl: ''
      }
    },
    methods: {
      onChange(){
        if(this.picUrl == ''){
          this.picUrl = this.picUrl_1;
        }else if(this.picUrl == this.picUrl_1){
          this.picUrl = this.picUrl_2;
        }else if(this.picUrl == this.picUrl_2){
          this.picUrl = this.picUrl_1;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
