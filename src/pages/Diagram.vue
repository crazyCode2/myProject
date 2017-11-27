<!-- 图表 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="图表">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <m-echarts
      :echartStyle="s"
      :titleText="a"
      :tooltipFormatter="b"
      :opinion="c"
      :seriesName="d"
      :opinionData="e"
    ></m-echarts>
  </div>
</template>

<script>
  import mEcharts from '../components/Echarts'

  export default {
    name: 'Diagram',
    components: {
      mEcharts
    },
    data(){
      return {
        a:'水果销售统计',
        b:'销售数量',
        c:['香蕉','苹果','橘子'],
        d:'销售统计',
        e:[
            {value:3, name:'香蕉'},
            {value:3, name:'苹果'},
            {value:3, name:'橘子'}
          ],
        s: {
          height: ''
        }
      }
    },
    created(){
      // 获取屏幕高度
      this.s.height = document.documentElement.clientHeight - 44 + 'px';
    },
  }
</script>

<style lang="less" scoped>
  //
</style>
