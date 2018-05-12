<!-- 搜索框 组件一 -->
<template>
  <div id="search">
    <input type="text" :placeholder="placeholder" v-model="searchTxt" />
    <div class="search" @click="search"></div>
  </div>
</template>

<script>
  export default {
    props:{
      placeholder:{
        type: String,
        default:'搜索...'  // 默认值
      }
    },
    data(){
      return{
        searchTxt:''
      }
    },
    methods:{
      search(){
        // if(this.searchTxt){
        //   // 将输入值传递给父组件
        //   this.$emit("currentSearchTxt",this.searchTxt);
        // }else{
        //   // 提示信息
        //   this.$vux.toast.show({
        //     type: 'text',
        //     position: 'middle',
        //     text: '请输入查询内容!'
        //   });
        // }

        this.$emit("currentSearchTxt",this.searchTxt);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../base/css/app.scss';
  #search{
    height: px2rem(80px);
    background-color: $defaultColor;
    display: flex;
    input{
      flex:1;
      margin:px2rem(8px) px2rem(8px);
      text-indent: 1em;
      border-radius: px2rem(10px);
      outline:none;
    }
    .search{
      display: inline-block;
      width: px2rem(68px);
      height: px2rem(68px);
      background-color: #ddd;
      border-radius: px2rem(10px);
      margin: px2rem(6px) px2rem(10px) 0px 0px;
      background-image: url(../assets/img/search.png);
      background-repeat: no-repeat;
      background-size: px2rem(50px) px2rem(50px);
      background-position: 50% 50%;
    }
  }
</style>
