<!-- 生成二维码 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="生成二维码">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div id="qrCode">
      <QRCode :val="val" :show="true" />
    </div>
    <!-- 按钮 -->
    <mt-button type="primary" @click="changeUrl">修改url</mt-button>
  </div>
</template>

<script>
  import QRCode from '../../components/QRCode.vue'
  import { MessageBox } from 'mint-ui';

  export default {
    name: 'QR',
    components: {
      QRCode
    },
    data(){
      return {
        val:'https://www.baidu.com/s?wd=123'
      }
    },
    methods: {
      changeUrl(){
        MessageBox.prompt('请输入新的url').then(({ value, action }) => {
          this.val = value;
        });
      }
    }
  }
</script>

<style>
  /*垂直水平居中*/
  #qrCode {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -100px 0 0 -100px;
  }
  .mint-button{
    width: 80%;
    margin: 20px auto;
    display: block;
  }
</style>
