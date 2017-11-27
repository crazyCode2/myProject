<!-- 自定义 echart 组件 -->
<template>
  <div>
    <!-- echart表格 -->
    <div id="myChart" :style="echartStyle"></div>
  </div>
</template>

<script>
  export default {
    props: {
      // 样式
      echartStyle: {
        type: Object,
        default(){
          return {}
        }
      },
      // 标题文本
      titleText: {
        type: String,
        default: ''
      },
      // 提示框键名
      tooltipFormatter: {
        type: String,
        default: ''
      },
      // 扇形区域名称
      opinion: {
        type: Array,
        default(){
          return []
        }
      },
      // 提示框标题
      seriesName: {
        type: String,
        default: ''
      },
      // 扇形区域数据
      opinionData: {
        type: Array,
        default(){
          return []
        }
      },
    },
    data(){
      return {
        //
      }
    },
    mounted(){
      this.$nextTick(function() {
        this.drawPie('myChart')
      })
    },
    methods: {
      // 绘制饼状图
      drawPie(id){
        this.charts = this.$echarts.init(document.getElementById(id));
        this.charts.setOption({
          title: {
            text: this.titleText, // 标题文本
            left: 'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/> " + this.tooltipFormatter + ":{c}"
          },
          legend: {
            bottom: 20,
            left: 'center',
            data: this.opinion // 扇形区域名称
          },
          series : [
            {
              name:this.seriesName,  // 提示框标题
              type: 'pie',
              radius : '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data:this.opinionData, // 扇形区域数据
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  #myChart{
    width: 100%;
  }
</style>
