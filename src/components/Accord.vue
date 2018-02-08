<!-- 三级折叠列表 组件 -->
<template>
  <nav :class="$style.accWrapper">
    <!-- 一级菜单 -->
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
      <li :class="$style.accItem" v-for="(item,index) in list">
        <!-- 二级菜单 -->
        <div @click="toggleItem(index)">
          <span>{{ item.area }}</span>
          <span>当前人数：{{ item.num }}人</span>
          <span>总人数：{{ item.sum }}人</span>
          <img
            src="../assets/img/arrow_right.png"
            alt="chevron"
            :class="[{ [$style.open_menu]: index == currentItemIndex, [$style.close_menu]: index != currentItemIndex }, $style.accChevron]"
          />
        </div>
        <ul :class="[{ [$style.maxHeight]: index == currentItemIndex }, $style.accList]">
          <!-- 三级菜单 -->
          <li v-for="(child,index) in item.children" @click="goStep(index)">
            <span style="width:83%;">{{child.name}}</span>
            <img
              src="../assets/img/arrow_right.png"
              alt="chevron"
              :class="$style.accChevron"
            />
          </li>
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
        isItemDisplay: false,
        currentItemIndex: -1
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
        required: true,
        default(){
          return []
        }
      }
    },
    methods: {
      toggleList() {
        this.isDisplay = !this.isDisplay;
      },
      toggleItem(index) {
        // this.isItemDisplay = !this.isItemDisplay;
        if(this.currentItemIndex == index){
          this.currentItemIndex = -1;
        }else{
          this.currentItemIndex = index;
        }
      },
      goStep(index) {
        console.log(index);
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
    background: #ddd;
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
    .accItem{
      min-height: 50px;
      line-height: 50px;
      font-size: 16px;
      background: #eee;
      text-indent: 1em;
      li{
        background-color: #fff;
      }
      span{
        display: inline-block;
      }
    }
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
