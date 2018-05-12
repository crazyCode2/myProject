<!-- svg 地图 -->
<template>
  <div>
    <!-- 标题栏 -->
    <x-header title="筛选 css3"></x-header>
    <!-- 整体内容部分 -->
    <div>
      <!-- 所有标签 -->
      <Icons />
      <!-- 内容部分 -->
      <div class="container">
        <div class="main">
          <!-- 标题 -->
          <header class="codrops-header">
            <h1>交互式商场地图</h1>
          </header>
          <!-- 地图部分 -->
          <div class="mall">
            <!-- 四周背景图 -->
            <div class="surroundings">
              <img class="surroundings__map" src="../../assets/img/surroundings.svg" alt="Surroundings">
            </div>
            <!-- 所有楼层  -->
            <div class="levels">
              <!-- 一楼 -->
              <Level_1 />
              <!-- 二楼 -->
              <Level_2 />
              <!-- 三楼 -->
              <Level_3 />
              <!-- 四楼 -->
              <Level_4 />
            </div>
          </div>
          <!-- 右侧导航栏 -->
          <SliderNav />
          <!-- 内容部分 -->
          <ContentPart />
        </div>

        <aside class="spaces-list" id="spaces-list">
          <!-- 搜索框 -->
          <SearchInput />
          <GroupList />
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  // 所有图标
  import Icons from './Icons.vue'
  // 一楼地图
  import Level_1 from './Level_1.vue'
  // 二楼地图
  import Level_2 from './Level_2.vue'
  // 三楼地图
  import Level_3 from './Level_3.vue'
  // 四楼地图
  import Level_4 from './Level_4.vue'
  // 右侧导航栏
  import SliderNav from './SliderNav.vue'
  // 内容部分
  import ContentPart from './ContentPart.vue'
  // 搜索框
  import SearchInput from './SearchInput.vue'
  // groupList
  import GroupList from './GroupList.vue'

  export default {
    name: 'SvgMap',
    components: {
      XHeader,
      Icons,
      Level_1,
      Level_2,
      Level_3,
      Level_4,
      SliderNav,
      ContentPart,
      SearchInput,
      GroupList,
    },
    data(){
      return {
        //
      }
    },
    methods: {
      //
    }
  }
</script>

<style lang="scss" scoped>
  .main_content{
    position: absolute;
    top: 46px;
    bottom: 0px;
    width: 100%;
  }
</style>
