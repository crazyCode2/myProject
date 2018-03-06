<!-- 九宫格 -->
<template>
  <div>
    <!-- 头部 -->
    <x-header title="模块归类"></x-header>
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
  </div>
</template>

<script>
import { Grid, GridItem, XHeader } from 'vux'

export default {
  name: 'Modules',
  components: {
    Grid,
    GridItem,
    XHeader
  },
  data(){
    return {
      //
    }
  },
  methods:{
    handleClose(){
      window.history.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
