<template>
  <section class="bg-[#FCF8F3] py-3vw flex items-center overflow-hidden">
    <div class="mx-auto flex w-30vw flex-col gap-1vw">
      <span class="f-text-12-40 font-bold text-[#3A3A3A]">50+ Beautiful rooms inspiration</span>
      <span class="text-[#616161] f-text-8-16 w-25vw">Our designer already made a lot of beautiful prototipe of rooms
        that inspire you</span>
      <button class="w-1/2 h-auto bg-[#E89F71] text-white p-1vw cursor-pointer f-text-8-16">
        Explore More
      </button>
    </div>
    <div class="w-55vw flex gap-1.5vw overflow-hidden">
      <div class="relative">
        <transition name="fade" mode="out-in">
          <img :src="mainSlide.image" :key="mainSlide.image" alt="" class="h-35vw min-w-28vw object-cover">
        </transition>
        <transition name="fade" mode="out-in">
          <div class="absolute z-10 left-2vw bottom-3vw flex" :key="mainSlide.text">
            <div class="w-15vw h-8vw flex flex-col gap-0.5vw bg-white opacity-70 f-p-1-24">
              <div class="inline-flex items-center gap-0.5vw text-[#616161] f-text-8-16"><span>{{ mainSlide.number
              }}</span><span class="w-2vw border h-0 border-[#616161]"></span> <span
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
        <transition-group name="fade" tag="div" class="flex gap-1.5vw relative overflow-hidden">
          <div v-for="(slide, index) in filteredSlides" :key="index" class="cursor-pointer" @click="changeSlide(index)">
            <img :src="slide.image" alt="" class="min-w-22vw h-30vw object-cover">
          </div>
          <img :src="arrow" alt="" class="absolute right-21vw top-1/2 f-w-28-72" @click="nextSlide">
        </transition-group>
        <div class="w-full h-6vw flex items-center">
          <img :src="Indicator" alt="" class="f-w-36-96">
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import main_img01 from "@/assets/main-image/main_img01.png"
import main_img02 from "@/assets/main-image/main_img02.png"
import main_img03 from "@/assets/main-image/main_img03.png"
import Indicator from "@/assets/main-image/Indicator.svg"
import arrow from "@/assets/main-image/arrow.svg"
import { computed, ref } from "vue"
const slides = ref([
  {
    image: main_img01,
    number: '01',
    roomName: 'Bed room',
    text: 'Inner Peace'
  },
  {
    image: main_img02,
    number: '02',
    roomName: 'Living room',
    text: '(UX/UI)'
  },
  {
    image: main_img03,
    number: '03',
    roomName: 'Bath room',
    text: 'khách hàng'
  }
]);

const mainSlideIndex = ref(0);
const mainSlide = computed(() => slides.value[mainSlideIndex.value]);
const filteredSlides = computed(() => slides.value.filter((_, index) => index !== mainSlideIndex.value));

const changeSlide = (index: number) => {
  mainSlideIndex.value = index;
};

const nextSlide = () => {
  mainSlideIndex.value = (mainSlideIndex.value + 1) % slides.value.length;
};
</script>
