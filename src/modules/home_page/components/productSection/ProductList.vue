<template>
  <section class="container mx-auto relative overflow-visible flex flex-col items-center gap-2vw">
    <h2 class="text-center f-text-24-40 font-bold text-title">Our Product</h2>
    <div class="flex items-center justify-center gap-4 w-full py-2">
      <div class="flex-1 border-t border-gray-400"></div>
      <div class="flex gap-1vw text-title f-text-8-24 font-semibold ">
        <button v-for="(item, index) in classification" :key="item.id" @click="changeCategory(item.id)"
          class="cursor-pointer hover:text-btnorange transition-all flex items-center gap-1vw">
          <div v-if="index !== 0" class="f-w-4-10 f-h-4-10 bg-black rounded-full"></div> {{ item.title }}
        </button>
      </div>
      <div class="flex-1 border-t border-gray-400"></div>
    </div>

    <!-- Nút điều hướng tùy chỉnh -->
    <div class="relative">
      <button class="custom-next1 f-w-12-44 f-h-12-44 bg-title absolute z-10 -top-2vw left-0.5vw cursor-pointer rounded-full flex items-center justify-center shadow-2xl">
        <i class="i-custom-arrowprev text-btnorange f-w-6-16 f-h-6-16 transform-rotate-180"></i>
      </button>
      <button class="custom-prev1 f-w-12-44 f-h-12-44 bg-title absolute z-10 -top-2vw right-0.5vw cursor-pointer rounded-full flex items-center justify-center shadow-2xl">
        <i class="i-custom-arrowprev text-btnorange f-w-6-16 f-h-6-16"></i>
      </button>
    </div>
    <swiper :slides-per-view="4" :space-between="20" :breakpoints="{
      430: { slidesPerView: 2, spaceBetween: 30 },
      768: { slidesPerView: 4, spaceBetween: 20, }
    }" :navigation="{
        nextEl: '.custom-next1',
        prevEl: '.custom-prev1'
      }" :modules="[Navigation]" class="w-full p-2vw" @swiper="(swiper) => (swiperRef = swiper)"
      @slideChange="onSlideChange" @resize="updateSlidesPerView">

      <swiper-slide v-for="product in filteredProducts" :key="product.id"
        class="group relative transition-transform duration-500 h-full">
        <div class="relative overflow-hidden">
          <div class="relative transition-transform duration-1000 h-full">
            <img :src="product.image" :alt="product.name" class="w-full xl:h-[25vw] md:h-[25vw] h-45vw object-cover" />
            <!-- Hiển thị khi hover -->
            <div
              class="absolute bottom-0 inset-x-0 flex items-center h-3vw text-center text-sm bg-white border border-gray-300 text-title opacity-0 group-hover:opacity-100 transition-all duration-1000 ">
              <button
                class="flex relative group/cart items-center space-x-[0.5vw] cursor-pointer hover:text-orange-400 h-full w-1/2 justify-center border-r border-gray-300">
                <i class="i-custom-Cart f-w-12-28"></i>
                <span
                  class="inset-0 absolute -top-3vw f-text-6-12 p-1vw h-3vw left-1vw w-6vw bg-title flex justify-center items-center rounded-lg opacity-0 group-hover/cart:opacity-100 transition-all duration-1000">Thêm
                  vào giỏ hàng</span>
              </button>
              <button
                class="flex group/heart items-center space-x-[0.5vw] cursor-pointer hover:text-red-400 w-1/4 h-full justify-center border-r border-gray-300">
                <i class="i-custom-heart f-w-10-18"></i>
                <span
                  class="absolute -top-3vw f-text-6-12 p-1vw h-3vw w-6vw bg-title flex justify-center items-center rounded-lg opacity-0 group-hover/heart:opacity-100 transition-all duration-1000 ">Yêu
                  thích</span>
              </button>
              <button
                class="flex group/menu items-center space-x-[0.5vw] cursor-pointer hover:text-orange-400 w-1/4 h-full justify-center">
                <i class="i-custom-menu f-w-10-18"></i>
                <span
                  class="absolute -top-3vw right-0 f-text-6-12 p-1vw h-3vw w-6vw bg-title flex justify-center items-center rounded-lg opacity-0 group-hover/menu:opacity-100 transition-all duration-1000 ">Chi
                  tiết</span>
              </button>
            </div>
            <div v-if="product.discount !== null"
              class="absolute top-1vw right-1vw f-w-32-52 f-h-32-52 flex flex-col items-center justify-center text-center f-text-8-14 bg-orange-400 text-black rounded-full">
              <div class="f-w-24-36 border border-0.1vw border-black"></div>
              <button class="flex items-center cursor-pointer h-4/12 text-center">
                <span>-{{ product.discount }}%</span>
              </button>
              <div class="f-w-24-36 border border-black"></div>
            </div>
          </div>
          <div class="p-[1vw] space-y-[0.3vw] md:h-13vw xl:h-fit h-25vw flex flex-col justify-center">
            <h3 class="text-md font-bold self-center">{{ product.name }}</h3>
            <p class="text-classic text-xs self-center">{{ product.description }}</p>
            <div class=" flex gap-0.5vw items-center self-center">
              <span class=" f-text-12-16 font-bold">Rp {{ product.price.toLocaleString() }}</span>
              <span v-if="product.oldPrice"
                class="text-gray-400 inline-flex line-through xl:ml-2 text-center f-text-6-16">
                Rp {{ product.oldPrice.toLocaleString() }}
              </span>
            </div>
            <div class="h-4vw relative -mx-1vw">
              <div
                class="absolute bottom-0 inset-0 flex flex-col space-y-[0.3vw] items-center h-3vw text-center text-md bg-white text-title opacity-0 group-hover:opacity-100 transition-all duration-1000 ">
                <div class="w-full border border-gray-300"></div>
                <button class="flex items-center cursor-pointer hover:text-red-400 w-1/3 f-text-8-16 whitespace-nowrap">
                  <span>+ Quickshop</span>
                </button>
                <div class="w-full border border-black"></div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <Paginations :slides="filteredProducts" :currentIndex="currentIndex" :goToSlide="goToSlide"
      :dotsCount="filteredProducts.length - (slidesPerView - 1)" :is-dots="true" />
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
import { storeToRefs } from "pinia";
import { useClassification } from "../../stores/productSection";

const classificationlist = useClassification();
const { classification, filteredProducts } = storeToRefs(classificationlist);
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
const slidesPerView = ref(4);

const updateSlidesPerView = () => {
  if (swiperRef.value) {
    slidesPerView.value = swiperRef.value.params.slidesPerView as number;
  }
};
const changeCategory = (id: number) => {
  classificationlist.selectCategory(id);
  currentIndex.value = 0;
  if (swiperRef.value) {
    swiperRef.value.slideTo(0);
  }
};

</script>
