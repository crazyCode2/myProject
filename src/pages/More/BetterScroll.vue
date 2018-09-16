<!-- vue + better-scroll -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="vue-better-scroll"></x-header>
    <!-- 内容部分 -->
    <main class="position-box">
      <vue-better-scroll
        class="wrapper"
        ref="scroll"
        :scrollbar="scrollbarObj"
        :pullDownRefresh="pullDownRefreshObj"
        :pullUpLoad="pullUpLoadObj"
        :startY="parseInt(startY)"
        @pullingDown="onPullingDown"
        @pullingUp="onPullingUp">
        <ul ref="list" class="list-content" style="min-height: 95vh">
          <li class="list-item" v-for="item in listData" :key="item.id">{{item.title}}</li>
        </ul>

      </vue-better-scroll>
    </main>
    <!-- 返回顶部按钮 -->
    <button class="go-top" @click="scrollTo">返回顶部</button>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  // 引入 VueBetterScroll 组件
  import VueBetterScroll from '../../components/VueBetterScroll'

  export default {
    components: {
      XHeader,
      VueBetterScroll,
    },
    data() {
      return {
        // 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
        scrollbarObj: {
          fade: true
        },
        // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
        pullDownRefreshObj: {
          threshold: 90,
          stop: 40
        },
        // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
        pullUpLoadObj: {
          threshold: 0,
          txt: {
            more: '加载更多',
            noMore: '没有更多数据了'
          }
        },
        startY: 0,  // 纵轴方向初始化位置
        scrollToX: 0,
        scrollToY: 0,
        scrollToTime: 700,
        listPage: 1, // 当前页码
        listData: [], // 后端数据
        canLoadMore: true
      }
    },
    mounted() {
      this.onPullingDown();
    },
    methods: {
      // 滚动到页面顶部
      scrollTo () {
        this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime)
      },
      // 模拟数据请求
      getData () {
        return new Promise(resolve => {
          this.$api.get('category/1004.json',{page: this.listPage},res => {
            this.canLoadMore = res.next ? res.next : false;
            resolve(res.data.books);
          });
        })
      },
      onPullingDown () {
        this.listPage = 1;
        // 模拟下拉刷新
        console.log('下拉刷新');
        this.getData().then(res => {
          this.listData = res;
          this.$refs.scroll.forceUpdate(true)
        })
      },
      onPullingUp () {
        this.listPage++;
        // 模拟上拉 加载更多数据
        console.log('上拉加载')
        this.getData().then(res => {
          this.listData = this.listData.concat(res)
          if(this.canLoadMore){
            this.$refs.scroll.forceUpdate(true)
          }else{
            // 没有更多数据了
            this.$refs.scroll.forceUpdate(false)
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .vux-header {
    z-index: 1;
  }
  .position-box {
    position: fixed;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .wrapper {
    height:100%;
    overflow: hidden;
  }
  .list-content {
    list-style: none;
    background: #fff;
  }
  .list-item {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding-left: 20px;
    border-bottom: 1px solid #e5e5e5;
  }
  .go-top{
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: #009a61;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #fff;
    padding: 10px 15px;
  }
</style>
