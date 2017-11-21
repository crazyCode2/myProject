<!-- 复选列表 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="复选列表">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <mt-checklist
      title="复选框列表"
      v-model="value"
      align="right"
      :options="options">
    </mt-checklist>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  data () {
    return {
      //存放所选选项
      value:[],
      //checklist设置
      options : [{
        label: '选项A',
        value: 'A'
      },
      {
        label: '选项B',
        value: 'B'
      },
      {
        label: '选项C',
        value: 'C'
      },
      {
        label: '选项D',
        value: 'D'
      }]
    }
  },
  watch:{
    value:function(val,oldvalue) {
      console.log(val);
    }
  },
  methods:{

  }
}
</script>

<style>

</style>
