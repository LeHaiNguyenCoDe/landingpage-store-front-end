<template>
  <section class="bg-[#FCF8F3] py-3vw flex items-center overflow-hidden">
    <div class="mx-auto flex w-30vw flex-col gap-1vw">
      <span class="f-text-12-40 font-bold text-title">{{ roomContent.title }}</span>
      <span class="text-classic f-text-8-16 w-25vw">{{ roomContent.description }}</span>
      <button class="w-1/2 h-auto bg-btnorange text-white p-1vw cursor-pointer f-text-8-16">
        {{ roomContent.buttonText }}
      </button>
    </div>
    <div class="w-55vw flex gap-1.5vw overflow-hidden relative">
      <div class="relative">
        <transition name="slide" mode="out-in">
          <img :src="mainSlide.image" :key="mainSlide.image" alt="" class="h-35vw min-w-28vw object-cover">
        </transition>
        <transition name="slide" mode="out-in">
          <div class="absolute z-10 left-2vw bottom-3vw flex" :key="mainSlide.text">
            <div class="w-15vw h-8vw flex flex-col gap-0.5vw bg-white opacity-70 f-p-1-24">
              <div class="inline-flex items-center gap-0.5vw text-classic f-text-8-16"><span>{{ mainSlide.number
              }}</span><span class="w-2vw border h-0 border-classic"></span> <span
                  class=" f-text-8-16 whitespace-nowrap">{{ mainSlide.roomName }}</span></div>
              <span class="f-text-10-18 font-semibold whitespace-nowrap">{{ mainSlide.text }}</span>
            </div>
            <button
              class="bg-[#E7A17A] p-2 flex items-center justify-center hover:bg-[#d98b68] transition h-3vw w-3vw self-end">
              <span class="f-text-14-24 text-white ">→</span>
            </button>
          </div>
        </transition>
      </div>
      <div class="h-full">
        <transition-group name="slide" tag="div" class="flex gap-1.5vw overflow-hidden">
          <div v-for="(slide, index) in filteredSlides" :key="index" class="cursor-pointer" @click="changeSlide(index)">
            <img :src="slide.image" alt="" class="min-w-22vw h-30vw object-cover">
          </div>
          <button class="bg-white absolute right-2vw top-1/2 f-w-18-44 f-h-18-44 cursor-pointer rounded-full flex items-center justify-center shadow-xl z-10" @click="nextSlide"><i class="i-custom-arrowprev text-btnorange f-w-12-16 f-h-12-16 transform-rotate-180"></i></button>
        </transition-group>
        <div class="w-full h-6vw flex items-center">
          <div class="flex justify-center">
            <span v-for="(slide, index) in slides" :key="index"
              class="w-2 h-2 mx-1 rounded-full cursor-pointer transition-all duration-300"
              :class="mainSlideIndex === index ? 'bg-btnorange' : 'bg-gray-300'"
              @click="goToSlide(index)">
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue"
const slides = ref([
  {
    image: "/main-image/main_img01.png",
    number: '01',
    roomName: 'Bed room',
    text: 'Inner Peace'
  },
  {
    image: "/main-image/main_img02.png",
    number: '02',
    roomName: 'Living room',
    text: '(UX/UI)'
  },
  {
    image: "/main-image/main_img03.png",
    number: '03',
    roomName: 'Bath room',
    text: 'khách hàng'
  },
]);

const roomContent = ref({
  title: "50+ Beautiful rooms inspiration",
  description: "Our designer already made a lot of beautiful prototype of rooms that inspire you",
  buttonText: "Explore More"
});

const mainSlideIndex = ref(0);
const mainSlide = computed(() => slides.value[mainSlideIndex.value]);
const filteredSlides = computed(() => slides.value.filter((_, index) => index !== mainSlideIndex.value));

const changeSlide = (index: number) => {
  mainSlideIndex.value = index;
};

const nextSlide = () => {
  mainSlideIndex.value = (mainSlideIndex.value + 1) % slides.value.length;
};
const goToSlide = (index: number) => {
  mainSlideIndex.value = index;
};
</script>
<style>
/* Hiệu ứng transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
