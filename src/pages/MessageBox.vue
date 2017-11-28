<!-- 弹窗 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="弹窗">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name: 'MessageBox',
    data(){
      return {
        //
      }
    },
    mounted(){
      this.$msgBox.showMsgBox({
          title: '添加分类',
          content: '请填写分类名称',
          isShowInput: true
      }).then(async (val) => {
          console.log(val);
      }).catch(() => {
          // ...
      });
    },
  }
</script>

<style lang="less" scoped>
  //
</style>
