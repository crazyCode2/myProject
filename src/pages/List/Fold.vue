<!-- 二级折叠列表 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="二级折叠列表">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 列表 -->
    <accordion
      v-for="(item,index) in dataList"
      :key="item.id"
      :currentNum="item.id"
      :title="item"
      :list="item.child">
    </accordion>
  </div>
</template>

<script>
  // Accordion 组件
  import Accordion from '../../components/Accordion.vue';

  export default {
    name: 'Fold',
    components: {
      Accordion,
    },
    data(){
      return {
        dataList:[
          {"id":"123","area":"深圳","num":"10","sum":"30","child":[
            {"area":"罗湖","num":"20","sum":"20"},
            {"area":"福田","num":"20","sum":"20"},
            {"area":"南山","num":"20","sum":"20"}
          ]},
          {"id":"456","area":"广州","num":"10","sum":"30","child":[
            {"area":"白云","num":"20","sum":"20"},
            {"area":"福田","num":"20","sum":"20"},
            {"area":"南山","num":"20","sum":"20"}
          ]},
          {"id":"789","area":"广州","num":"10","sum":"30","child":[
            {"area":"白云","num":"20","sum":"20"},
            {"area":"福田","num":"20","sum":"20"},
            {"area":"南山","num":"20","sum":"20"}
          ]}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
