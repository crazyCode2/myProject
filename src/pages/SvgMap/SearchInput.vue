<!-- 搜索框 -->
<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <!-- 输入框 -->
      <input class="search__input" placeholder="请输入...">
      <!-- 关闭按钮 -->
      <button class="boxbutton boxbutton--darker close-search" aria-label="Close details"><svg class="icon icon--cross"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cross"></use></svg></button>
    </div>
    <span class="label">
      <input id="sort-by-name" class="label__checkbox" type="checkbox" aria-label="Show alphabetically">
      <label class="label__text">A - Z</label>
    </span>
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
