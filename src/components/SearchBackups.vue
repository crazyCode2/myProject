<!-- 搜索框 组件二 -->
<template>
  <div class="search_backups" v-if="show">
    <search
      v-model="searchTxt"
      position="absolute"
      :placeholder="placeholder"
      top="46px"
      auto-scroll-to-top
      @on-change="getResult"
      @on-submit="onSubmit"
      ref="search"></search>
  </div>
</template>

<script>
  import { Search } from 'vux'

  export default {
    components: {
      Search,
    },
    props:{
      placeholder:{
        type: String,
        default:'搜索...'  // 默认值
      },
      show: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return{
        searchTxt:''
      }
    },
    methods:{
      getResult (val) {
        // // 实时查询
        // console.log('on-change', val)
        // // 向父组件传值
        // this.$emit("currentSearchTxt",val);
      },
      onSubmit (val) {
        // 失去焦点
        this.$refs.search.setBlur()
        // 向父组件传值
        // this.$emit("currentSearchTxt",this.searchTxt);
        this.$emit("currentSearchTxt",val);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../base/css/app.scss';
  .search_backups{
    //
  }
</style>
