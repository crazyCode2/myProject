<!-- 轮播图 组件 -->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.img + ')' }"></div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  // npm install swiper --save
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  export default {
    props: ['listImg'],
    name: 'banner',
    mounted() {
      let mySwiper = new Swiper('.swiper-container', {
        pagination: { // 按钮
          el: '.swiper-pagination',
          clickable :true, // 分页导航是否可点击
        },
        loop: true, // 环路(无缝滚动)
        speed: 600, // 切换速度
        autoplay: { // 自动切换
          delay: 3000, // 自动切换的时间间隔
          stopOnLastSlide: false, // 如果设置为true,当切换到最后一个slide时停止自动切换(loop模式下无效)
          disableOnInteraction: false, // 用户操作swiper之后,是否禁止autoplay.默认为true:停止
        }
      });
    }
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    width: 100%;
    height: 200px;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
