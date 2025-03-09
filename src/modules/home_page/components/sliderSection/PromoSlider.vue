<template>
  <section class="container mx-auto relative overflow-visible">
    <h2 class="text-center f-text-24-40 font-bold mb-2vw text-title">Tips & Tricks</h2>
    <swiper
      :slides-per-view="3"
      :space-between="20"
      :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev'
      }"
      :pagination="{ el: '.custom-pagination', clickable: true }"
      :modules="modules"
      class="w-full p-2vw"
    >
      <swiper-slide v-for="(post, index) in posts" :key="index">
        <div class="bg-white hover:bg-gray-100">
          <div class="overflow-hidden"><img :src="post.image" alt="Post Image" class="w-30vw h-15vw object-cover hover:scale-110 transition-transform duration-300"></div>
          <div class="f-p-0-4">
            <h3 class="f-text-10-24 font-semibold" v-html="post.title"></h3>
            <p class="text-gray-500 f-text-8-14">{{ post.date }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Nút điều hướng tùy chỉnh -->
    <button class="custom-prev f-w-18-44 f-h-18-44 bg-white absolute z-10 left-0.5vw top-2/5 cursor-pointer rounded-full flex items-center justify-center shadow-xl">
      <i class="i-custom-arrowprev text-btnorange f-w-12-16 f-h-12-16"></i>
    </button>
    <button class="custom-next f-w-18-44 f-h-18-44 bg-white absolute z-10 right-0.5vw top-2/5 cursor-pointer rounded-full flex items-center justify-center shadow-xl">
      <i class="i-custom-arrowprev text-btnorange f-w-12-16 f-h-12-16 transform-rotate-180"></i>
    </button>
    <div class="custom-pagination mt-4 flex justify-center space-x-1vw"></div>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";

const modules = ref([Navigation, Pagination]);

const posts = ref([
  {
    title: "How to create a living <br> room to love",
    date: "20 Jan 2020",
    image: "./src/assets/slider-image/slider_image_01.png"
  },
  {
    title: "Solution for clean look working space",
    date: "10 Jan 2020",
    image: "./src/assets/slider-image/slider_image_02.png"
  },
  {
    title: "Make your cooking activity more fun with good setup",
    date: "20 Jan 2020",
    image: "./src/assets/slider-image/slider_image_03.png"
  },
  {
    title: "How to create a living <br> room to love",
    date: "20 Jan 2020",
    image: "./src/assets/slider-image/slider_image_01.png"
  },
  {
    title: "Solution for clean look working space",
    date: "10 Jan 2020",
    image: "./src/assets/slider-image/slider_image_02.png"
  },
  {
    title: "Make your cooking activity more fun with good setup",
    date: "20 Jan 2020",
    image: "./src/assets/slider-image/slider_image_03.png"
  }
]);
</script>
<style scoped>
:deep(.custom-pagination .swiper-pagination-bullet-active) {
  @apply w-[2] h-[2] bg-[#E89F71] relative rounded-full transition-all duration-300;
}
</style>
