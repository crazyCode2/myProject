<!-- 三级折叠列表 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="三级折叠列表">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 列表 -->
    <accord
      v-for="(item,index) in dataList"
      :key="item.id"
      :title="item"
      :list="item.child">
    </accord>
  </div>
</template>

<script>
  // Accord 组件爱你
  import Accord from '../../components/Accord'

  export default {
    name: 'Cuttle',
    components: {
      Accord,
    },
    data(){
      return {
        dataList:[
          {"area":"深圳","num":"10","sum":"30","child":[
            {"area":"罗湖","num":"20","sum":"20","children":[{"name":"张三"},{"name":"李四"},{"name":"王五"}]},
            {"area":"福田","num":"20","sum":"20","children":[{"name":"张三"},{"name":"李四"},{"name":"王五"}]},
            {"area":"南山","num":"20","sum":"20","children":[{"name":"张三"},{"name":"李四"},{"name":"王五"}]}
          ]},
          {"area":"广州","num":"10","sum":"30","child":[
            {"area":"白云","num":"20","sum":"20","children":[{"name":"张三"},{"name":"李四"},{"name":"王五"}]},
            {"area":"福田","num":"20","sum":"20","children":[{"name":"张三"},{"name":"李四"},{"name":"王五"}]},
            {"area":"南山","num":"20","sum":"20","children":[{"name":"张三"},{"name":"李四"},{"name":"王五"}]}
          ]}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
