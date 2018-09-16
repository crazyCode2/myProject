<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="vue-scroller"></x-header>
    <!-- 内容部分 -->
    <div class="dropload-container">
      <div>
        <dropload ref="drop" :loadUpFn="reFreshData" :loadDownFn="getMoreData">
          <div v-for="item in listData" class="list">
            {{item.title}}
          </div>
        </dropload>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  // 引入 Dropload 组件
  import Dropload from '../../components/Dropload/Dropload'

  export default {
    components: {
      XHeader,
      Dropload,
    },
    data () {
      return {
        listPage: 0, // 当前页码
        listData: [], // 后端数据
        canLoadMore: true
      }
    },
    mounted() {
      this.reFreshData();
    },
    methods: {
      // 获取数据
      getData () {
        return new Promise(resolve => {
          this.$api.get('category/1004.json',{page: this.listPage},res => {
            this.canLoadMore = res.next ? res.next : false;
            resolve(res.data.books);
          });
        })
      },
      // 下拉刷新
      reFreshData () {
        this.listPage = 1;
        // 模拟下拉刷新
        console.log('下拉刷新');
        this.getData().then(res => {
          this.listData = res;
          this.$refs.drop.resetUp()
        })
      },
      // 上拉加载更多
      getMoreData () {
        this.listPage++;
        // 模拟上拉 加载更多数据
        console.log('上拉加载')
        // this.getData().then(res => {
        //   this.listData = this.listData.concat(res)
        //   if(this.canLoadMore){
        //     this.$refs.drop.resetUp()
        //   }else{
        //     // 没有更多数据了
        //     this.$nextTick(this.$refs.drop.resetDown)
        //   }
        // })

        this.getData().then(res => {
          this.listData = this.listData.concat(res)
          this.$nextTick(this.$refs.drop.resetDown)
        })
      }
    }
  }
</script>

<style lang="scss">
  $color1: red;
  .dropload-container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
    .list{
      border-top: 1px solid $color1;
      padding: 12px;
      &:nth-last-child(1) {
        border-bottom: 1px solid $color1;
      }
    }
  }
</style>
