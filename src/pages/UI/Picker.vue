<!-- Picker 组件 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="Picker组件"></x-header>
    <!-- 内容部分 -->
    <group>
      <x-textarea :value="content" :max="200" name="description" :placeholder="'提示'" readonly></x-textarea>
    </group>
    <!-- TransferDom + Popup + PopupHeader + Picker -->
    <divider>TransferDom + Popup + PopupHeader + Picker</divider>
    <x-switch title="底部弹窗" v-model="show1"></x-switch>

    <div v-transfer-dom>
      <popup v-model="show1">
        <popup-header
        left-text="取消"
        right-text="确认"
        title="请选择"
        :show-bottom-border="false"
        @on-click-left="show1 = false"
        @on-click-right="show1 = false">
        </popup-header>
        <!-- <picker :data='years' v-model='year1' @on-change='change'></picker> -->
      </popup>
    </div>
    <!-- PopupPicker -->
    <divider>PopupPicker</divider>
    <popup-picker :title="title2" :data="list2" :columns="2" v-model="value2" @on-change="onChangeValue2" show-name></popup-picker>
  </div>
</template>

<script>
  import { XHeader, Group, XTextarea, Divider, PopupPicker, TransferDom, Popup, PopupHeader, Picker, XSwitch } from 'vux'

  export default {
    name: 'picker',
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Group,
      XTextarea,
      Divider,
      PopupPicker,
      TransferDom,
      Popup,
      PopupHeader,
      Picker,
      XSwitch,
    },
    data(){
      return {
        content:'PopupPicker = TransferDom + Popup + PopupHeader + Picker',
        show1: false,
        years: [[1,2,3,4,5,6,7]],
        year1:[1],
        title2: '两栏滚动',
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
        value2: []
      }
    },
    methods: {
      onChangeValue2(val){
        console.log(val);
      },
      change(val){
        console.log(val);
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
