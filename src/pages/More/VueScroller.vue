<!-- 下拉刷新/上拉加载更多 自定义 vue-scroller -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="vue-scroller"></x-header>
    <!-- 内容部分 -->
    <scroller
      class="content"
      :on-refresh="refresh"
      :on-infinite="infinite"
      refresh-layer-color="#4b8bf4"
      loading-layer-color="#ec4949"
    >
      <!-- 列表数据 -->
      <div
        v-for="(item, index) in listData"
        class="row"
        :class="{'grey-bg': index % 2 == 0}"
        :key="index"
      >
        {{ item.title }}
      </div>
    </scroller>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  // 引入 Scroller 组件
  import Scroller from '../../components/VueScroller/Scroller'

  export default {
    components: {
      XHeader,
      Scroller
    },
    data () {
      return {
        listPage: 0, // 当前页码
        listData: [], // 后端数据
        canLoadMore: true
      }
    },
    mounted() {
      // 初始化
      // this.refresh();
    },
    methods: {
      // 刷新
      refresh(done) {
        console.log('下拉刷新');
        this.listPage = 1;
        this.$api.get('category/1004.json',{page: this.listPage},res => {
          this.listData = res.data.books;
          this.canLoadMore = true;
          done();
        });
      },
      // 加载更多
      infinite(done) {
        console.log('上拉加载更多');
        this.listPage++;
        // 没有更多数据
        if (!this.canLoadMore) {
          setTimeout(() => {
            done(true) // 关闭加载等待图标,显示'没有更多数据'
          }, 1500)
          return;
        }
        // 请求数据
        this.$api.get('category/1004.json',{page: this.listPage},res => {
          this.listData = this.listData.concat(res.data.books);
          this.canLoadMore = res.next ? res.next : false;
          done();
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    position: absoulte!important;
    top: 46px!important;
    bottom: 0px!important;
    left: 0px!important;
    height: auto!important;
  }
  .row {
    height: 45px;
    line-height: 45px;
    text-align: center;
    &.grey-bg {
      background-color: #eee;
    }
  }
</style>
