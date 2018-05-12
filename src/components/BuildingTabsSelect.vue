<!-- 报警 组件 -->
<template>
  <div class="alarm">
    <!-- <video src="../assets/mp3/6705.mp3" controls="controls">
    您的浏览器不支持 video 标签。
    </video> -->

    <!-- <audio id="myAudio" loop>
      <source :src="url" type="audio/mpeg">
    </audio> -->

    <!-- <audio id="myAudio" loop>
      <source v-if="number == 2370" src="../assets/mp3/2370.mp3" type="audio/mpeg">
      <source v-if="number == 4031" src="../assets/mp3/4031.mp3" type="audio/mpeg">
      <source v-if="number == 6705" src="../assets/mp3/6705.mp3" type="audio/mpeg">
    </audio> -->
  </div>
</template>

<script>
  /**
   * audio 属性详解
   * controls 显示或隐藏用户控制界面
   * autoplay 是否自动播放(加载时播放,仅播放一次)
   * loop 是否循环播放
   * preload 是否预加载
   */
  export default {
    props: {
      onOff: { // 报警开关
        type: Boolean,
        default: false
      },
      number: {
        type: Number,
        default: 6705
      }
    },
    data() {
      return {
        url: require('../assets/mp3/6705.mp3')
      }
    },
    watch:{
      onOff: {
        handler: function (val, oldVal) {
          if(val){
            document.getElementById('myAudio').play();
          }else{
            document.getElementById('myAudio').pause();
          }
        },
        deep: true
      }
    },
    methods: {
      //
    }
  }
</script>

<style lang="less" scoped>
  .alarm {
    //
  }
</style>
