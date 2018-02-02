<!-- 折叠列表 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="折叠列表">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 列表 -->
    <accordion
      v-for="(item,index) in dataList"
      :key="item.id"
      :title="item"
      :list="item.child">
    </accordion>
  </div>
</template>

<script>
  import Accordion from '../../components/Accordion'

  export default {
    name: 'Fold',
    components: {
      Accordion,
    },
    data(){
      return {
        dataList:[
          {"area":"深圳","num":"10","sum":"30","child":[
            {"area":"罗湖","num":"20","sum":"20"},
            {"area":"福田","num":"20","sum":"20"},
            {"area":"南山","num":"20","sum":"20"}
          ]},
          {"area":"广州","num":"10","sum":"30","child":[
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
