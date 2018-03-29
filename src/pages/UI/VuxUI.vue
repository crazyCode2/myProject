<!-- vux-ui -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="vux-ui"></x-header>
    <!-- 内容部分 -->
    <group>
      <x-input :placeholder="'标题'"></x-input>
      <x-textarea :value="content" :max="200" name="description" :placeholder="'提示'"></x-textarea>
    </group>
    <!-- 两栏滚动 -->
    <divider>两栏滚动</divider>
    <popup-picker :title="title2" :data="list2" :columns="2" v-model="value2" @on-change="onChangeValue2" show-name></popup-picker>
    <!-- 三栏滚动 -->
    <divider>三栏滚动</divider>
    <popup-picker :title="title3" :data="list3" :columns="3" v-model="value3" @on-change="onChangeValue3" show-name></popup-picker>
  </div>
</template>

<script>
  import { XHeader, Group, XInput, XTextarea, Divider, PopupPicker } from 'vux'

  export default {
    name: 'VuxUI',
    components: {
      XHeader,
      Group,
      XInput,
      XTextarea,
      Divider,
      PopupPicker,
    },
    data(){
      return {
        content:'使用vux,需要配置webpack.base.conf.js文件',
        // 两栏滚动
        title2: '联动显示文字',
        list2: [{
          name: '中国',
          value: 'china',
          parent: 0
        }, {
          name: '美国',
          value: 'USA',
          parent: 0
        }, {
          name: '广东',
          value: 'china001',
          parent: 'china'
        }, {
          name: '广西',
          value: 'china002',
          parent: 'china'
        }, {
          name: '美国001',
          value: 'usa001',
          parent: 'USA'
        }, {
          name: '美国002',
          value: 'usa002',
          parent: 'USA'
        }],
        value2: [],
        // 三栏滚动
        title3: '联动显示文字',
        list3: [{
          name: '中国',
          value: 'china',
          parent: 0
        }, {
          name: '美国',
          value: 'USA',
          parent: 0
        }, {
          name: '广东',
          value: 'china001',
          parent: 'china'
        }, {
          name: '广西',
          value: 'china002',
          parent: 'china'
        }, {
          name: '美国001',
          value: 'usa001',
          parent: 'USA'
        }, {
          name: '美国002',
          value: 'usa002',
          parent: 'USA'
        }, {
          name: '广州',
          value: 'gz',
          parent: 'china001'
        }, {
          name: '深圳',
          value: 'sz',
          parent: 'china001'
        }, {
          name: '广西001',
          value: 'gx001',
          parent: 'china002'
        }, {
          name: '广西002',
          value: 'gx002',
          parent: 'china002'
        }, {
          name: '美国001_001',
          value: '0003',
          parent: 'usa001'
        }, {
          name: '美国001_002',
          value: '0004',
          parent: 'usa001'
        }, {
          name: '美国002_001',
          value: '0005',
          parent: 'usa002'
        }, {
          name: '美国002_002',
          value: '0006',
          parent: 'usa002'
        }],
        value3: []
      }
    },
    methods: {
      onChangeValue2(val){
        console.log(val);
      },
      onChangeValue3(val){
        console.log(val);
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
