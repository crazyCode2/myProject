<!-- Mp3 调用 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="Mp3调用"></x-header>
    <!-- 内容部分 -->
    <alarm></alarm>
    <!-- 按钮 -->
    <group>
      <x-switch title="开关" v-model="value" @click.native="changeMp3"></x-switch>
    </group>
  </div>
</template>

<script>
  import { XHeader, XSwitch, Group } from 'vux'
  // 引入 报警组件
  import Alarm from '../../components/Alarm.vue'

  export default {
    name: 'VuxUI',
    components: {
      XHeader,
      Alarm,
      XSwitch,
      Group,
    },
    data(){
      return {
        value: false
      }
    },
    methods: {
      changeMp3(){
        console.log(this.value);
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
