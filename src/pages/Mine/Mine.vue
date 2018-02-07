<!-- 我的 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header :left-options="{showBack: false}" title="计算时间差"></x-header>
    <!-- 内容部分 -->
    <div class="content">
      <!-- 测试 -->
      <group>
        <x-input title="开始日期:" placeholder="例如:20170101" v-model="startDate"></x-input>
        <x-input title="结束日期:" placeholder="例如:20180202" v-model="endDate"></x-input>
      </group>
      <div style="padding:15px;">
        <x-button @click.native="monthDayDiff" type="primary">计算日期差</x-button>
      </div>
      <!-- 结果 -->
      <group>
        <x-input title="结果:" v-model="result"></x-input>
      </group>
    </div>
  </div>
</template>

<script>
  import { XHeader, Group, XInput, XButton } from 'vux'

  export default {
    name: 'Mine',
    components: {
      XHeader,
      Group,
      XInput,
      XButton,
    },
    data(){
      return {
        startDate: '20000229',
        endDate: '20180228',
        result: ''
      }
    },
    methods: {
      computedDayDiff(){
        console.log(this.startDate);
        console.log(this.endDate);
      },
      monthDayDiff() {
        // this指针
        let _this = this;
        let flag = [1, 3, 5, 7, 8, 10, 12, 4, 6, 9, 11, 2]; // 月份
        let start = new Date(this.changeFormat(_this.startDate));
        let end = new Date(this.changeFormat(_this.endDate));
        let year = end.getFullYear() - start.getFullYear(); // 年差
        let month = end.getMonth() - start.getMonth(); // 月差
        let day = end.getDate() - start.getDate(); // 日差
        // 判断天数
        if (day < 0) {
          // findIndex 获取索引值
          let index = flag.findIndex((temp) => {
            return temp === start.getMonth() + 1
          });
          let monthLength;
          if (index <= 6) { // 每月31天
            monthLength = 31;
          } else if (index > 6 && index <= 10) { // 每月30天
            monthLength = 30;
          }else if(_this.IsPinYear(start.getFullYear()) && _this.IsPinYear(end.getFullYear())){ // 同为闰年 29天
            monthLength = 29;
          }else if(!_this.IsPinYear(start.getFullYear()) && !_this.IsPinYear(end.getFullYear())){ // 同为平年 28天
            monthLength = 28;
          }
          day = end.getDate() + (monthLength - start.getDate());
          // 月数减一
          month--;
          // 闰年 平年
          if(index > 10){
            // 一个闰年 一个平年
            if(_this.IsPinYear(start.getFullYear())){
              day = end.getDate() + (29 - start.getDate());
              console.log(day);
            }else{
              day = end.getDate() + (28 - start.getDate());
            }
            // month++;
          }
        }
        // 判断月数
        if (month < 0) {
          month = end.getMonth() + (12 - start.getMonth());
          // 年数减一
          year--;
        }
        // this.result = `相差${12 * year + month}月${day}天`;
        this.result = `相差${year}年${month}月${day}天`;
      },
      // 改变日期格式
      changeFormat(str){
        // 例如:将 20170101 改为 2017-01-01
        return str.substr(0,4) + '-' + str.substr(4,2) + '-' + str.substr(6,2);
      },
      // 判断是否闰平年
      IsPinYear(year){
        /**
         * 平年2月28天 闰年2月29天
         * 同为平年或同为闰年没有影响
         */
        return (0 == year%4 && (year%100 !=0 || year%400 == 0));
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    position: absolute;
    top: 46px;
    left: 0px;
    right: 0px;
    bottom: 53px;
    overflow: scroll;
  }
  /*隐藏 滚动条*/
  ::-webkit-scrollbar{
    display:none;
  }
</style>
