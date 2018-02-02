<!-- 下拉刷新 上拉加载更多 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="上拉刷新/上拉加载更多">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <scroller style="top: 44px"
      :on-refresh="refresh"
      :on-infinite="infinite">
      <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}">
        <slider-delete :sliderConf="sliderConf">
            <div class="content">{{ item }}</div>
        </slider-delete>
        <div class="delete_button"></div>
      </div>
    </scroller>
  </div>
</template>

<script>
  import SliderDelete from "../../components/SliderDelete";

  export default {
    components:{
      SliderDelete
    },
    data() {
      return {
        items: [],
        sliderConf:{//滑动配置
          distance:1.4,
        }
      }
    },
    mounted() {
      for (var i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },
    methods: {
      refresh (done) {
        setTimeout(() => {
          var start = this.top - 1
          for (var i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10
          done()
        }, 1500)
      },
      infinite (done) {
        setTimeout(() => {
          var start = this.bottom + 1
          for (var i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10
          done()
        }, 1500)
      }
    }
  }
</script>

<style lang="less" scoped>
  .row {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
  }
  .grey-bg {
    background-color: #eee;
  }
</style>
