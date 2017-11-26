<!-- 加载更多 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="加载更多">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 列表 -->
    <div class="cont">
      <m-scroller :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData" :marginTop="marginTop">
        <ul>
          <li v-for="(item,index) in listdata">
            <!-- 左滑删除 -->
            <m-left-slider @msg-from-child="getMsgFromChild(item)">
              {{item.name}}
            </m-left-slider>
          </li>
        </ul>
      </m-scroller>
    </div>
  </div>
</template>

<script>
  import mScroller from '../components/Scroller'
  import mLeftSlider from '../components/LeftSlider'

  export default {
    components: {
      mScroller,
      mLeftSlider,
    },
    data() {
      return {
        marginTop:'margin-top:40px;',
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 数据列表
        scrollData:{
          noFlag: false //暂无更多数据显示
        }
      }
    },
    mounted: function() {
      // 首次请求数据
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.axios.get('/api/testData').then((response) => {
          this.listdata = response.data.data.list;
          // 获取总页数
          this.pageEnd = response.data.data.totalPage;
          // 还原
          this.pageStart = 0;
        })
      },
      getMsgFromChild (v) {
        this.listdata.splice(v,1)
      },
      // 下拉刷新
      onRefresh(done) {
        this.fetchData();
        done(); // call done
      },
      // 上拉加载更多
      onInfinite(done) {
        this.pageStart++;
        // 加载条
        let more = this.$el.querySelector('.load-more');
        // 判断是否显示加载条
        if(this.pageStart > this.pageEnd){
          //走完数据调用方法
          this.scrollData.noFlag = true;
        }else{
          let _this = this;
          this.axios.get('/api/testData').then((response) => {
            _this.listdata = _this.listdata.concat(response.data.data.list);
            // 获取总页数
            _this.pageEnd = response.data.data.totalPage;
          })
        }
        // 隐藏加载条
        more.style.display = 'none';
        done();
      }
    }
  }
</script>

<style lang="less" scoped>
  ul {
    li {
      min-height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid red;
    }
  }
  // 隐藏滚动条
  ::-webkit-scrollbar{
    display:none;
  }
</style>
