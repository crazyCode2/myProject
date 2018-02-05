<!-- 三级折叠列表 组件 -->
<template>
  <nav :class="$style.accWrapper">
    <div :class="$style.accTitle" @click="toggleList">
      <span>{{ title.area }}</span>
      <span>当前人数：{{ title.num }}人</span>
      <span>总人数：{{ title.sum }}人</span>
      <img
        src="../assets/img/arrow_right.png"
        alt="chevron"
        :class="[{ [$style.open_menu]: isDisplay, [$style.close_menu]: !isDisplay }, $style.accChevron]"
      />
    </div>
    <ul :class="[{ [$style.maxHeight]: isDisplay }, $style.accList]">
      <li :class="$style.accTitle" v-for="item in list" @click="toggleItem">
        <div>
          <span>{{ item.area }}</span>
          <span>当前人数：{{ item.num }}人</span>
          <span>总人数：{{ item.sum }}人</span>
          <img
            src="../assets/img/arrow_right.png"
            alt="chevron"
            :class="[{ [$style.open_menu]: isItemDisplay, [$style.close_menu]: !isItemDisplay }, $style.accChevron]"
          />
        </div>
        <ul :class="[{ [$style.maxHeight]: isItemDisplay }, $style.accList]">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        isDisplay: false,
        isItemDisplay: false
      }
    },
    props: {
      title: {
        type: Object,
        default(){
          return {}
        }
      },
      list: {
        type: Array,
        required: true
      }
    },
    methods: {
      toggleList() {
        this.isDisplay = !this.isDisplay
      },
      toggleItem() {
        this.isItemDisplay = !this.isItemDisplay
      }
    }
  }
</script>

<style lang="scss" module>
  .accWrapper {
    display:flex;
    flex-direction: column;
  }
  .accTitle {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    background: #eee;
    text-indent: 1em;
    cursor: pointer;
  }
  .accChevron {
    width: 20px;
    margin-right: 15px;
  }
  .accList{
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s ease-out;
  }
  .accList.maxHeight {
    max-height: 500px;
    transition: max-height .5s ease-in;
  }
  .accListItem {
    background-image: url(../assets/img/arrow_right.png);
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 95% 50%;
    display: flex;
    // justify-content: space-between;
    align-items: baseline;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-indent: 1em;
    cursor: pointer;
  }
  /* chevron animation  */
  @keyframes open-menu {
    to {
      transform: rotate(90deg);
    }
  }
  @keyframes close-menu {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  .open_menu {
    animation: open-menu 0.4s ease-out forwards;
  }
  .close_menu {
    animation: close-menu 0.4s ease-out forwards;
  }
</style>
