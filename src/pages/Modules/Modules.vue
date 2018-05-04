<!-- 九宫格 -->
<template>
  <div>
    <!-- 头部 -->
    <x-header title="模块归类"></x-header>
    <group>
      <divider>九宫格</divider>
      <!-- 九宫格 -->
      <grid :cols="3">
        <grid-item :label="'模块1'" link="/modules">
          <img slot="icon" src="../../assets/img/media_information1.png">
        </grid-item>
        <grid-item :label="'模块2'" link="/modules">
          <img slot="icon" src="../../assets/img/media_information2.png">
        </grid-item>
        <grid-item :label="'模块3'" link="/modules">
          <img slot="icon" src="../../assets/img/media_information3.png">
        </grid-item>
        <grid-item :label="'模块4'" link="/modules">
          <img slot="icon" src="../../assets/img/media_information4.png">
        </grid-item>
        <grid-item :label="'模块5'" link="/modules">
          <img slot="icon" src="../../assets/img/media_information5.png">
        </grid-item>
      </grid>
    </group>

    <group title="请求参数验证">
      <x-input title="姓名" placeholder="请输入姓名" v-model="name" :show-clear="true" text-align="right"></x-input>
      <x-input title="年龄" placeholder="请输入年龄" v-model="age" :show-clear="true" text-align="right"></x-input>
      <x-input title="职业" placeholder="请输入职业" v-model="job" :show-clear="true" text-align="right"></x-input>
      <!-- 请求参数处理 -->
      <box gap="10px 10px">
        <x-button type="primary" @click.native="goSubmit">测试</x-button>
      </box>
    </group>
  </div>
</template>

<script>
  import { XHeader, Group, Grid, GridItem, Divider, Box, XButton, XInput } from 'vux'

  export default {
    name: 'Modules',
    components: {
      XHeader,
      Group,
      Grid,
      GridItem,
      Divider,
      Box,
      XButton,
      XInput,
    },
    data(){
      return {
        name: '',
        age: '',
        job: ''
      }
    },
    methods:{
      handleClose(){
        window.history.go(-1);
      },
      goSubmit(){
        let params = {
          name: this.name,
          age: this.age,
          job: this.job
        };

        // 过滤空值
        // params = this.deleteObjNull(params);

        // 参数验证
        if(!this.paramsValidate(params)) return;

        console.log(params);
      }
    }
  };
</script>

<style lang="scss" scoped>
  // scss
</style>
