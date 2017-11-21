<!-- 日期选择器 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="日期选择器">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <mt-button @click="open('datePicker')" size="large">日期选择</mt-button>
    <div>当前：{{currentDate}}</div>
    <br/>
    <mt-datetime-picker
      ref="datePicker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'DateTimePicker',
    data () {
      return {
        currentDate:'20170101'
      }
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.currentDate = this.formatDate(value);
        console.log(this.currentDate); // 20170101
      },
      formatTen(num) {
        return num > 9 ? (num + "") : ("0" + num);
      },
      formatDate(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return year + this.formatTen(month) + this.formatTen(day);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
