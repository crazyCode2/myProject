<!-- 我的 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="我的"></mt-header>
    <input type="text" v-model="startDate" />
    <input type="text" v-model="endDate">
    <mt-button @click="monthDayDiff(startDate,endDate)">测试一</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'Mine',
    data(){
      return {
        startDate: '2017-3-3',
        endDate: '2019-3-1'
      }
    },
    methods: {
      monthDayDiff(startDate,endDate){
        console.log(startDate);
        console.log(endDate);
        let flag = [1, 3, 5, 7, 8, 10, 12, 4, 6, 9, 11, 2];
        let start = new Date(startDate);
        let end = new Date(endDate);
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
        console.log(`相差${12*year + month}月${day}天`);
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
