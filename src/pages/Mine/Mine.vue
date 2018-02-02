<!-- 我的 -->
<template>
  <div>
    <!-- 标题栏 -->
     <x-header :left-options="{showBack: false}" title="我的"></x-header>
    <!-- 测试 -->
    <group>
      <x-input title="开始日期" placeholder="例如:20170101" v-model="startDate"></x-input>
      <x-input title="结束日期" placeholder="例如:20180202" v-model="endDate"></x-input>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="computedDayDiff" type="primary">计算日期差</x-button>
    </div>
    <!-- 结果 -->
    <group>
      <x-input title="结果" v-model="result"></x-input>
    </group>
  </div>
</template>

<script>
  import { XHeader, Group, XInput, XButton } from 'vux'

  export default {
    name: 'Mine',
    components: {
      XHeader,
      Group,
      XInput,
      XButton,
    },
    data(){
      return {
        startDate: '20170101',
        endDate: '20180202',
        result: ''
      }
    },
    methods: {
      computedDayDiff(){
        console.log(this.startDate);
        console.log(this.endDate);
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
