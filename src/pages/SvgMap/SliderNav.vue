<!-- 右侧导航 -->
<template>
  <div>
    <!-- 搜索按钮 -->
    <button class="boxbutton boxbutton--dark open-search" aria-label="Show search"><svg class="icon icon--search"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use></svg></button>
    <!-- 导航栏 -->
    <nav class="mallnav mallnav--hidden">
      <!-- 上一层 -->
      <button class="boxbutton mallnav__button--up boxbutton--disabled" aria-label="Go up"><svg class="icon icon--angle-down"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-angle-up"></use></svg></button>
      <!-- 首页 -->
      <button class="boxbutton boxbutton--dark mallnav__button--all-levels" aria-label="Back to all levels"><svg class="icon icon--stack"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-stack"></use></svg></button>
      <!-- 下一页 -->
      <button class="boxbutton mallnav__button--down" aria-label="Go down"><svg class="icon icon--angle-down"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-angle-down"></use></svg></button>
    </nav>
  </div>
</template>

<script>
  export default {
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
  //
</style>
