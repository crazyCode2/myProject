<!-- 条件选择框 组件 -->
<template>
  <div class="select">
    <!-- tab 栏 -->
    <tab v-if="showSzjqSelect">
      <tab-item selected @on-item-click="onItemClick('0','ssqy')">{{tabs[0]}}</tab-item>
      <tab-item @on-item-click="onItemClick('1','szjq')">{{tabs[1]}}</tab-item>
      <tab-item @on-item-click="onItemClick('2','gdlx')">{{tabs[2]}}</tab-item>
      <tab-item @on-item-click="onItemClick('3','zt')">{{tabs[3]}}</tab-item>
    </tab>
    <tab v-if="!showSzjqSelect">
      <tab-item selected @on-item-click="onItemClick('0','ssqy')">{{tabs[0]}}</tab-item>
      <tab-item @on-item-click="onItemClick('1.33','gdlx')">{{tabs[2]}}</tab-item>
      <tab-item @on-item-click="onItemClick('2.66','zt')">{{tabs[3]}}</tab-item>
    </tab>
    <!-- 内容部分 -->
    <!-- 所在区域 -->
    <ul
      v-if="currentSelect == 'ssqy'"
      :style="currentStyle"
      :class="['animated', { 'flipInX': showAnimation, 'flipOutX': !showAnimation }]">
      <li
        v-for="(item,index) in ssqyList"
        :key="index"
        @click="chooseSelect('ssqy',item)"
      >{{item.name}}</li>
    </ul>
    <!-- 所在监区 -->
    <ul
      v-if="currentSelect == 'szjq'"
      :style="currentStyle"
      :class="['animated', { 'flipInX': showAnimation, 'flipOutX': !showAnimation }]">
      <li
        v-for="(item,index) in szjqList"
        :key="index"
        @click="showSzjq(item.jq)"
      >{{item.jqName}}</li>
      <!-- 子监区 -->
      <ul :style="{'left': currentStyle.left}">
        <li
          v-if="childList.length"
          v-for="(item,index) in childList"
          :key="index"
          @click="chooseSelect('szjq',item)"
        >{{item.jqName}}</li>
      </ul>
    </ul>
    <!-- 规定类型 -->
    <ul
      v-if="currentSelect == 'gdlx'"
      :style="currentStyle"
      :class="['animated', { 'flipInX': showAnimation, 'flipOutX': !showAnimation }]">
      <li
        v-for="(item,index) in gdlxList"
        :key="index"
        @click="chooseSelect('gdlx',item)"
      >{{item.name}}</li>
    </ul>
    <!-- 状态 -->
    <ul
      v-if="currentSelect == 'zt'"
      :style="currentStyle"
      :class="['animated', { 'flipInX': showAnimation, 'flipOutX': !showAnimation }]">
      <li
        v-for="(item,index) in ztList"
        :key="index"
        @click="chooseSelect('zt',item)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  // 引入vuex
  import {mapGetters, mapActions} from 'vuex'
  // 引入vux
  import { Tab, TabItem } from 'vux'

  export default {
    components: {
      Tab,
      TabItem,
    },
    props: {
      tabs: { // 标题数组
        type: Array,
        default(){
          return ['区域','监区','类别','状态']
        }
      }
    },
    computed: {
      ...mapGetters([//...函数名 使用对象展开运算符将此对象混入到外部对象中
        'originSzjqListData'
      ])
    },
    data() {
      return {
        ssqyList: [{name:'区域',value:''},{name:'监狱',value:'0'},{name:'监区',value:'1'}], // 所在区域
        szjqList: [
          {childList:[{jq:"11",jqName:"一监1分"},{jq:"12",jqName:"一监2分"}],jq:"1",jqName:"一监区"},
          {childList:[{jq:"21",jqName:"二监1分"},{jq:"22",jqName:"二监2分"}],jq:"2",jqName:"二监区"},
          {childList:[{jq:"31",jqName:"三监1分"},{jq:"32",jqName:"三监2分"}],jq:"3",jqName:"三监区"},
          {childList:[{jq:"41",jqName:"四监1分"},{jq:"42",jqName:"四监2分"}],jq:"4",jqName:"四监区"},
          {childList:[{jq:"51",jqName:"五监1分"},{jq:"52",jqName:"五监2分"}],jq:"5",jqName:"五监区"}
        ], // 所在监区
        currentSzjq: '', // 当前选中的监区
        childList: [], // 子监区
        gdlxList: [{name:'类别',value:''},{name:'A类',value:'A类'},{name:'B类',value:'B类'}], // 规定类型
        ztList: [{name:'状态',value:''},{name:'启用',value:'0'},{name:'撤销',value:'1'}], // 状态
        currentStyle:{width: '100%;',left:'0px;'}, // 当前样式
        currentSelect: '', // 当前所选择的条件
        showAnimation: false,
        tabsData: {
          'appKeyPart.ssqy': '',
          'appKeyPart.szjq': '',
          'appKeyPart.gdlx': '',
          'appKeyPart.zt': '',
          'appKeyPart.xclx': ''
        }, // 向父组件传递的参数
        showSzjqSelect: true, // 能否选择监区
        typeList: [] // 巡查类型(暂定)
      }
    },
    mounted(){
      // // 性能优化
      // // vuex 监区列表数据
      // if(this.originSzjqListData.length > 0){
      //   this.szjqList = this.originSzjqListData;
      // }else{
      //   this.fetchAareList();
      // }
      // 设置ul宽度
      this.currentStyle.width = this.getViewportSize().width / 4 + 'px';
      // 判断
      if(this.tabs[2] == '状态'){ // 巡查统计模块
        // 改为 巡查状态
        this.gdlxList = [{name:'状态',value:''},{name:'正常',value:'0'},{name:'异常',value:'1'}];
        // 改为 巡查类型
        this.ztList = [{name:'全部类型',value:''},{name:'日常巡查',value:'1'},{name:'月度巡查',value:'2'},{name:'季度巡查',value:'3'}];
      }
    },
    methods: {
      // 获取监区列表数据
      fetchAareList(){
        this.$api.post('appKeyPartManage_selectJqList.action', {}, res => {
          /**
           * 额外添加 '监狱'
           * {childList:[{jq:"",jqName:"全部监区"}],jq:"all_prison",jqName:"监狱"}
           */
          res.prisonList.push({childList:[{jq:"",jqName:"全部监区"}],jq:"all_prison",jqName:"监狱"});
          // 过滤数据
          this.szjqList = res.prisonList;
          // 将原始监区列表 保存至 vuex
          this.$store.dispatch('originSzjqListData', this.szjqList); // 异步
          // 将过滤后的监区列表 保存至 vuex
          this.$store.dispatch('szjqListData', this.filterData(res.prisonList)); // 异步
        })
      },
      // // 获取巡查类型数据
      // fetchTypeList(){
      //   // 模拟数据
      //   this.$api.post('appKeyPartCheckManage_selectXclx.action', {}, res => {
      //     // 重置
      //     this.typeList = [];
      //     let currentArr = ['全部类型'];
      //     res.typeList.forEach(function(item,index,arr){
      //       currentArr.push(item.xclxName);
      //     })
      //     this.typeList.push(currentArr);
      //     // 将状态列表 保存至 vuex
      //     this.$store.dispatch('typeListData', this.typeList); // 异步
      //   });
      // },
      // tab栏 点击事件
      onItemClick (index,type) {
        if(this.currentSelect == type){
          this.showAnimation = !this.showAnimation;
        }else{
          this.currentSelect = type;
          this.showAnimation = true;
        }

        // 定位
        this.currentStyle.left = index*(this.getViewportSize().width / 4) + 'px';
      },
      // 显示分监区
      showSzjq(id){
        let _this = this;
        // 匹配子组件
        this.szjqList.forEach(function(v,i,arr) {
          if(id == v.jq){
            _this.childList = v.childList;
            return false; // 结束程序
          };
        });
      },
      // 条件选择
      chooseSelect(type,item){
        if(type == 'ssqy'){ // 所在区域
          this.tabsData['appKeyPart.ssqy'] = item.value;
          // 修改tab栏
          this.tabs[0] = item.name;
          /**
           * 特殊请求处理
           * 当选中监狱的时候,需要隐藏监区tab
           */
          if(this.tabs[0] == '监狱'){
            this.showSzjqSelect = false;
            this.currentStyle.width = this.getViewportSize().width / 3 + 'px';
            // 清除监区数据
            this.tabsData['appKeyPart.szjq'] = '';
          }else{
            this.showSzjqSelect = true;
            this.currentStyle.width = this.getViewportSize().width / 4 + 'px';
            // 临时变量复用
            if(this.currentSzjq){
              this.tabsData['appKeyPart.szjq'] = this.currentSzjq;
            }
          }
        }else if(type == 'szjq'){ // 所在监区
          this.tabsData['appKeyPart.szjq'] = item.jq;
          // 创建临时变量保存,以备复用
          this.currentSzjq = item.jq;
          // 修改tab栏
          this.tabs[1] = item.jqName;
        }else if(type == 'gdlx'){ // 规定类型
          this.tabsData['appKeyPart.gdlx'] = item.value;
          // 修改tab栏
          this.tabs[2] = item.name;
        }else if(type == 'zt'){ // 状态
          this.tabsData['appKeyPart.zt'] = item.value;
          // 修改tab栏
          this.tabs[3] = item.name;
        }

        // 判断所在页面
        if(this.tabs[this.tabs.length-1].length >= 4){ // 巡查统计页面
          // 巡查状态
          // this.tabsData['appKeyPart.gdlx'] = this.tabsData['appKeyPart.gdlx'];
          // 巡查类型
          this.tabsData['appKeyPart.xclx'] = this.tabsData['appKeyPart.zt'];
        }

        // 向父组件传值
        this.$emit("tabsData", this.tabsData);
        // 关闭 下拉框
        this.showAnimation = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .select {
    position: relative;
    ul{
      position: absolute;
      top: 44px;
      li{
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        margin-bottom:3px;
        border-left: 1px solid #FF9900;
        // background-color: #eee;
        background: linear-gradient(45deg,#73c5ed, #ffffff);
      }
      ul{
        position: absolute;
        width: 100%;
        top: 0px;
      }
    }
  }
</style>
