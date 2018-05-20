<!-- 缩略图 组件 -->
<template>
  <div>
    <div class="main_infor">
      <img v-for="(item, index) in list" v-lazy="item.src" width="100" @click="show(index)">
      <div class="infor_content">
        <p>姓名：张三</p>
        <p>性别：男</p>
        <p>年龄：20</p>
      </div>
    </div>
    <!-- 缩略图 -->
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer"></previewer>
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
      picUrl: {
        type: String,
        default: ''
      }
    },
    methods: {
      show (index) {
        this.$refs.previewer.show(index)
      }
    },
    watch: {
      picUrl: {
        handler: function (val, oldVal) {
          this.list[0]['src'] = val;
        },
        deep: true
      }
    },
    mounted(){
      // let picUrl = 'https://www.baidu.com/img/bd_logo1.png';
      // this.list[0]['msrc'] = picUrl;
      // this.list[0]['src'] = picUrl;
    },
    data () {
      return {
        list: [{
          // msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
          // w: 800,
          // h: 400
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main_infor{
    width: 100%;
    height: 120px;
    background-image: url('../assets/img/infor_background.png');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius:0px 20px;
    img{
      display: inline-block;
      vertical-align: middle;
      margin: 15px 0px 0px 15px;
      width: 90px;
    }
    .infor_content{
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
      margin-top: 15px;
      p{
        height: 30px;
        line-height: 30px;
      }
    }
  }
</style>
