<template>
  <section class="container mx-auto relative overflow-visible">
    <h2 class="text-center f-text-24-40 font-bold mb-2vw text-[#3A3A3A]">Tips & Tricks</h2>
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
        <div class="bg-white hover:text-gray-500">
          <div class="overflow-hidden"><img :src="post.image" alt="Post Image" class="w-30vw h-15vw object-cover hover:scale-110 transition-transform duration-300"></div>
          <div class="f-p-0-4">
            <h3 class="f-text-10-24 font-semibold" v-html="post.title"></h3>
            <p class="text-gray-500 f-text-8-14">{{ post.date }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Nút điều hướng tùy chỉnh -->
    <button class="custom-prev absolute z-10 left-0 top-2/5 f-w-36-68 cursor-pointer">
      <img :src="arrowleft" alt="Previous">
    </button>
    <button class="custom-next absolute z-10 right-0 top-2/5 f-w-36-68 cursor-pointer">
      <img :src="arrow" alt="Next">
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

import slider_image_01 from "@/assets/slider-image/slider_image_01.png";
import slider_image_02 from "@/assets/slider-image/slider_image_02.png";
import slider_image_03 from "@/assets/slider-image/slider_image_03.png";
import arrow from "@/assets/main-image/arrow.svg";
import arrowleft from "@/assets/main-image/arrowleft.svg";

const modules = ref([Navigation, Pagination]);

const posts = ref([
  {
    title: "How to create a living <br> room to love",
    date: "20 Jan 2020",
    image: slider_image_01
  },
  {
    title: "Solution for clean look working space",
    date: "10 Jan 2020",
    image: slider_image_02
  },
  {
    title: "Make your cooking activity more fun with good setup",
    date: "20 Jan 2020",
    image: slider_image_03
  },
  {
    title: "How to create a living <br> room to love",
    date: "20 Jan 2020",
    image: slider_image_01
  },
  {
    title: "Solution for clean look working space",
    date: "10 Jan 2020",
    image: slider_image_02
  },
  {
    title: "Make your cooking activity more fun with good setup",
    date: "20 Jan 2020",
    image: slider_image_03
  }
]);
</script>
<style scoped>
:deep(.custom-pagination .swiper-pagination-bullet-active) {
  @apply w-[0.5vw] h-[0.5vw] bg-[#E89F71] relative rounded-full transition-all duration-300 scale-200;
}

/* :deep(.custom-pagination .swiper-pagination-bullet-active)::before {
  content: "";
  @apply absolute inset-[0] w-[1vw] h-[1vw] border border-[#E89F71] rounded-full scale-100;
} */

</style>
