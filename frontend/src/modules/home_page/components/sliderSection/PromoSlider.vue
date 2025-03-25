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
      :modules="[Navigation]"
      class="w-full p-2vw"
      @swiper="(swiper) => (swiperRef = swiper)"
      @slideChange="onSlideChange"
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
    <button class="custom-prev f-w-18-44 f-h-18-44 bg-white absolute z-10 left-0.5vw top-2/5 cursor-pointer rounded-full flex items-center justify-center shadow-xl">
      <i class="i-custom-arrowprev text-btnorange f-w-12-16 f-h-12-16"></i>
    </button>
    <button class="custom-next f-w-18-44 f-h-18-44 bg-white absolute z-10 right-0.5vw top-2/5 cursor-pointer rounded-full flex items-center justify-center shadow-xl">
      <i class="i-custom-arrowprev text-btnorange f-w-12-16 f-h-12-16 transform-rotate-180"></i>
    </button>
    <Paginations :slides="posts" :currentIndex="currentIndex" :goToSlide="goToSlide" :dotsCount="posts.length - 2" />
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ref } from "vue";
import Paginations from "@/modules/ui/PromoPaginations.vue";
import { usePostStore } from "@/modules/home_page/stores/sliderSection";
import { storeToRefs } from "pinia";

const postStore = usePostStore();
const { posts } = storeToRefs(postStore);

const swiperRef = ref<SwiperClass | null>(null);
const currentIndex = ref(0);
const onSlideChange = (swiper: SwiperClass) => {
  currentIndex.value = swiper.activeIndex;
};

const goToSlide = (index: number) => {
  if (swiperRef.value) {
    swiperRef.value.slideTo(index);
  }
};
</script>
