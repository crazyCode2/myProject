<!-- 我的 -->
<template>
  <div>
    <!-- 标题栏 -->
     <x-header :left-options="{showBack: false}" title="计算时间差"></x-header>
    <!-- 测试 -->
    <group>
      <x-input title="开始日期" placeholder="例如:20170101" v-model="startDate"></x-input>
      <x-input title="结束日期" placeholder="例如:20180202" v-model="endDate"></x-input>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="monthDayDiff" type="primary">计算日期差</x-button>
    </div>
    <!-- 结果 -->
    <group>
      <x-input title="结果" v-model="result"></x-input>
    </group>
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
        startDate: '20170101',
        endDate: '20180202',
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
        let flag = [1, 3, 5, 7, 8, 10, 12, 4, 6, 9, 11, 2];
        let start = new Date(this.changeFormat(_this.startDate));
        let end = new Date(this.changeFormat(_this.endDate));
        let year = end.getFullYear() - start.getFullYear();
        let month = end.getMonth() - start.getMonth();
        let day = end.getDate() - start.getDate();
        if (month < 0) {
            year--;
            month = end.getMonth() + (12 - start.getMonth());
        }
        if (day < 0) {
            month--;
            let index = flag.findIndex((temp) => {
                return temp === start.getMonth() + 1
            });
            let monthLength;
            if (index <= 6) {
                monthLength = 31;
            } else if (index > 6 && index <= 10) {
                monthLength = 30;
            } else {
                monthLength = 28;
            }
            day = end.getDate() + (monthLength - start.getDate());
        }
        // this.result = `相差${12 * year + month}月${day}天`;
        this.result = `相差${year}年${month}月${day}天`;
      },
      changeFormat(str){
        // 例如:将 20170101 改为 2017-01-01
        return str.substr(0,4) + '-' + str.substr(4,2) + '-' + str.substr(6,2)
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
