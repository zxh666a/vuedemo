<template>
  <div class="swiper-container" :style="{width:containerwidth,height:height}" v-if="swiperitem.length">
    <Swiper class="wrap" :style="{width:wrapwidth,height:height}" :options="swiperOptions">
      <Swiper-slide v-for="(item,index) in swiperitem" :key="index">
        <img :src="item.image" alt class="item" :style="{width:imgwidth,height:height}" />
      </Swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next" slot="pagination"></div>
      <div class="swiper-button-prev" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper",
  data() {
    return {
      //swiper配置
      swiperOptions: {
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable :true
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          disableOnInteraction: false // false 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      }
    };
  },
  props: ["swiperitem", "wrapwidth", "imgwidth", "containerwidth",'height'],
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  --swiper-navigation-size: 30px;
  --swiper-navigation-color: #1abc9c
}
.swiper-container::after{
  display: block;
  content: "";
  clear: both;
}
</style>