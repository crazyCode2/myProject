<!-- 缩略图 组件 -->
<template>
  <div>
    <div v-transfer-dom>
      <previewer
        :list="picList"
        ref="previewer"
        ></previewer>
    </div>
  </div>
</template>

<script>
  import { Previewer, TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Previewer
    },
    props: {
      showPreviewer: {
        type: Boolean,
        default: false
      },
      picList: {
        type: Array,
        default(){
          return [
            {
              msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
              src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
              w:1200,
              h:900
            }
          ]
        }
      }
    },
    watch: {
      picList: function (val, oldVal) {
        console.log('watch',val);
        this.show();
      }
    },
    methods: {
      show(){
        this.$refs.previewer.show(0)
      }
    },
    mounted(){
      console.log('mounted',this.picList);
    }
  }
</script>
