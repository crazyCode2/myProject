<!-- 下拉刷新/上拉加载更多 自定义 vue-scroller -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="vue-scroller"></x-header>
    <!-- 内容部分 -->
    <scroller style="top: 46px;"
      :on-refresh="refresh"
      :on-infinite="infinite"
      refresh-layer-color="#4b8bf4"
      loading-layer-color="#ec4949"
    >
      <!-- 列表数据 -->
      <div v-for="(item, index) in items"
          class="row"
          :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
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
        items: []
      }
    },
    mounted() {
      // 初始化
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },
    methods: {
      // 刷新
      refresh(done) {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;
          done()
        }, 1500)
      },
      // 加载更多
      infinite(done) {
        // 没有更多数据
        if (this.bottom >= 30) {
          setTimeout(() => {
            done(true) // 关闭加载等待图标,显示'没有更多数据'
          }, 1500)
          return;
        }
        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10;
          // 继续加载
          setTimeout(() => {
            done()
          })
        }, 1500)
      }
    }
  }
</script>

<style lang="less" scoped>
  .row {
    height: 45px;
    line-height: 45px;
    &.grey-bg {
      background-color: #eee;
    }
  }
</style>
