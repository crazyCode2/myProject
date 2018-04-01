<!-- 设置 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="设置"></x-header>
    <!-- 内容部分 -->
    <box gap="10px 10px">
      <x-button type="primary" @click.native="startAlarm">开启报警</x-button>
      <x-button type="warn" @click.native="stopAlarm">结束报警</x-button>
    </box>

    <m-alarm
      :onOff="onOff"
    ></m-alarm>
  </div>
</template>

<script>
  import { XHeader, Box, XButton } from 'vux'
  // 引入报警组件
  import mAlarm from '../../components/Alarm.vue'

  export default {
    name: 'Setting',
    components: {
      XHeader,
      Box,
      XButton,
      mAlarm,
    },
    data(){
      return {
        onOff: false
      }
    },
    methods: {
      startAlarm(){
        console.log('开启');
        this.onOff = true;
      },
      stopAlarm(){
        console.log('关闭');
        this.onOff = false;
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    position: absolute;
    top: 46px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: scroll;
  }
  /*隐藏 滚动条*/
  ::-webkit-scrollbar{
    display:none;
  }
</style>
