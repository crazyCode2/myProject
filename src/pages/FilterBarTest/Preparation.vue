<!-- 筛选 css3 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="筛选 css3"></x-header>
    <!-- 内容部分 -->
    <div class="btn" @click="change">筛选</div>
    <div v-if="show" class="content" :class="showAnimation?'animated fadeInUp':'animated fadeOutDown'"></div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    name: 'Preparation',
    components: {
      XHeader,
    },
    data(){
      return {
        show: false,
        showAnimation:false
      }
    },
    methods: {
      change(){
        let _this = this;
        _this.showAnimation = !_this.showAnimation;
        if(_this.showAnimation){
          _this.show = _this.showAnimation;
        }else{
          setTimeout(function(argument) {
            _this.show = _this.showAnimation;
          },1000);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn{
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 10px;
  }
  .content{
    margin-top: 10px;
    width: 100%;
    height: 300px;
    background-color: #ff0000;
    &.active{
      background-color: blue;
    }
  }
</style>
