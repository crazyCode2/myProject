<!-- 设置 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="设置"></x-header>
    <!-- 内容部分 -->
    <box gap="10px 10px">
      <x-button type="primary" @click.native="startAlarm">开启报警</x-button>
      <x-button type="warn" @click.native="stopAlarm">结束报警</x-button>
    </box>

    <m-alarm
      :onOff="onOff"
    ></m-alarm>

    <div class="main_content key_parts">
      <p class="masked">测试一测试一测试一</p>
      <p class="masked">测试二测试二测试二</p>
      <p class="masked">测试三测试三测试三</p>
    </div>

    <div class="main_content key_person">
      <p class="masked">测试一测试一测试一</p>
      <p class="masked">测试二测试二测试二</p>
      <p class="masked">测试三测试三测试三</p>
    </div>

    <group>
      <x-textarea
        :title="'防范措施'"
        :placeholder="'请输入防范措施'"
        :show-counter="false"
        v-model="currentValue"
        readonly
        autosize
      ></x-textarea>
    </group>
  </div>
</template>

<script>
  import { XHeader, Box, XButton, Group, XTextarea } from 'vux'
  // 引入报警组件
  import mAlarm from '../../components/Alarm.vue'

  export default {
    name: 'Setting',
    components: {
      XHeader,
      Box,
      XButton,
      mAlarm,
      Group,
      XTextarea,
    },
    data(){
      return {
        onOff: false,
        currentValue: ''
      }
    },
    mounted(){
      // console.log(this.$route.path);
      // console.log(this.$route);
      // console.log(this.$router.options.routes);

      // 请求数据
      this.fetchData();
    },
    beforeRouteEnter (to, from, next) {
      // 在导航完成前获取数据
      console.log(to.path); // 当前路由
      console.log(from.path); // 上一页路由
      // 执行下一步操作
      next();
    },
    methods: {
      startAlarm(){
        console.log('开启');
        this.onOff = true;
      },
      stopAlarm(){
        console.log('关闭');
        this.onOff = false;
      },
      // 请求数据
      fetchData(){
        this.currentValue = '1、测试测试测试测试。2、测试测试测试测试测试;3、测试测试测试测试；4、测试测试测试测试。5、测试测试测试测试;';

        // 自动换行
        this.currentValue = this.autoLinefeed(this.currentValue);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main_content{
    width: 100%;
    height: 120px;
    margin-bottom: 10px;
    &.key_parts{
      background-image: url('../../assets/img/key_parts.png');
      background-size: cover;
    }
    &.key_person{
      background-image: url('../../assets/img/key_person.png');
      background-size: cover;
    }
    p{
      height: 40px;
      line-height: 40px;
      font-size: 16px;
    }
  }
  /*隐藏 滚动条*/
  ::-webkit-scrollbar{
    display:none;
  }
</style>
