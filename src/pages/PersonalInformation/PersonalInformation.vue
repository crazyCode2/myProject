<!-- 个人信息 table -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="个人信息 table"></x-header>
    <!-- 内容部分 -->
    <div style="padding:10px;">
      <x-table full-bordered style="background-color:#fff;">
        <!-- <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead> -->
        <tbody>
          <tr>
            <td>姓名</td>
            <td>{{person.xm}}</td>
            <td colspan="2" rowspan="4">
              <img :src="person.avater">
            </td>
          </tr>
          <tr>
            <td>民族</td>
            <td>{{person.mz}}</td>
          </tr>
          <tr>
            <td>编号</td>
            <td>{{person.bh}}</td>
          </tr>
          <tr>
            <td>监区</td>
            <td>{{person.jq}}</td>
          </tr>
          <tr>
            <td>文化程度</td>
            <td>{{person.whcd}}</td>
            <td>原判刑期</td>
            <td>{{person.ypxq}}</td>
          </tr>
          <tr>
            <td>罪名</td>
            <td colspan="3">{{person.zm}}</td>
          </tr>
          <tr>
            <td>刑期起日</td>
            <td colspan="3">{{person.xqqr}}</td>
          </tr>
          <tr>
            <td>刑期止日</td>
            <td colspan="3">{{person.xqzr}}</td>
          </tr>
        </tbody>
      </x-table>
    </div>
  </div>
</template>

<script>
  import { XHeader, XTable } from 'vux'

  export default {
    name: 'PersonalInformation',
    components: {
      XHeader,
      XTable,
    },
    data(){
      return {
        person: {
          xm:'张三',
          mz:'汉族',
          bh:'0000001',
          zm:'抢劫',
          jq:'一监一分',
          whcd:'小学',
          ypxq:'6年0月0日',
          xqqr:'2017-01-01',
          xqzr:'2017-01-01',
          avater: require('../../assets/img/avater.jpg')
        }
      }
    },
    methods: {
      //
    }
  }
</script>

<style lang="scss" scoped>
  td{
    position: relative;
    img{
      position: absolute;
      width:50%;
      top: 10%;
      right: 25%;
    }
  }
</style>
