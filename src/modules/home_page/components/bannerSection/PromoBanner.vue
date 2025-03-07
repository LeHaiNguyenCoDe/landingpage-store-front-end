<template>
  <section class="relative flex flex-col">
    <div class="flex w-full h-full absolute -z-10">
      <div class="w-2/3 bg-[#F9F1E7]"></div>
      <div class="w-1/3 bg-[#FCF8F3]"></div>
    </div>
    <div class="w-full h-10vw text-[#3A3A3A] container mx-auto mr-auto flex py-3vw">
      <div class="w-full h-fit flex gap-2vw">
        <div class="xl:w-35vw md:w-35vw w-45vw flex items-center justify-between gap-1vw xl:ml-[-1vw]">
          <span class="f-text-12-24 font-bold text-black">Funiro.</span>
          <div class="flex gap-3vw f-text-8-16">
            <span>Products</span>
            <span>Rooms</span>
            <span>Inspirations</span>
          </div>
        </div>
        <div class="w-60vw flex items-center justify-between xl:mr-[-2.5vw]">
          <input type="text" placeholder="Search for minimalist chair"
            class="xl:w-35vw md:w-35vw w-30vw xl:h-3vw md:h-3vw h-5vw bg-white p-1vw f-text-8-14">
          <div class="flex gap-1vw items-center f-text-10-16">
            <a href="#">
              <img :src="heart" alt="" class="f-w-10-24">
            </a>
            <a href="#">
              <img :src="cart" alt="" class="f-w-10-24">
            </a>
            <a href="#">
              <img :src="avatar" alt="" class="f-w-12-40">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-55vw mx-4vw flex justify-between py-2vw self-end px-2vw">
      <img :src="Indicator" alt="" class="f-w-36-96">
      <div class="flex gap-1vw">
        <img :src="buttonPrev" alt="" class="f-w-18-48 cursor-pointer"  @click="prevSlide">
        <img :src="buttonNext" alt="" class="f-w-18-48 cursor-pointer"  @click="nextSlide">
      </div>
    </div>
    <div class="absolute z-10 bg-white w-32vw h-35vw left-8vw top-10vw p-3vw flex flex-col gap-2vw">
      <span class="f-text-10-54 font-bold text-[#3A3A3A] f-leading-14-64">High-Quality
        Furniture Just
        For You</span>
      <span class="f-text-8-20 text-[#898989] xl:w-11/12 md:w-full w-full f-leading-8-32 xl:scale-100">
        Our furniture is made from selected and best quality materials that are suitable for your dream home
      </span>
      <button class="w-full h-auto bg-[#E89F71] text-white p-1vw cursor-pointer f-text-8-20">
        Shop Now
      </button>
    </div>
    <div class="flex justify-between items-center">
      <transition name="fade" mode="out-in">
        <img :src="leftSlide.image" :key="leftSlide.image" alt="" class="w-25vw h-40vw object-cover">
      </transition>

      <div class="relative z-0 h-fit">
        <transition name="fade" mode="out-in">
          <img :src="mainSlide.image" :key="mainSlide.image" alt="" class="w-65vw h-40vw">
        </transition>
        <transition name="fade" mode="out-in">
          <div class="absolute z-10 flex flex-col bg-white p-1vw right-2vw bottom-2vw opacity-90 xl:w-17vw md:w-20vw w-30vw h-auto"  :key="mainSlide.name">
            <span class="font-medium f-text-12-32 text-[#3A3A3A]">{{ mainSlide.name }}</span>
            <span class="text-[#616161] f-text-10-16">{{ mainSlide.detail }}</span>
            <span class="text-[#3A3A3A] f-text-10-20">{{ mainSlide.price }}</span>
          </div>
        </transition>
      </div>

      <transition name="fade" mode="out-in">
        <img :src="rightSlide.image" :key="rightSlide.image" alt="" class="w-3vw h-40vw object-cover">
      </transition>
    </div>
  </section>
</template>


<script lang="ts" setup>
import left_image from "@/assets/image-banner/left_image.png";
import main_image from "@/assets/image-banner/main_image.png";
import right_image from "@/assets/image-banner/right_image.png";
import cart from "@/assets/image-banner/Cart.svg";
import heart from "@/assets/image-banner/heart.svg";
import avatar from "@/assets/image-banner/avatar.png";
import buttonNext from "@/assets/image-banner/button_next.png";
import buttonPrev from "@/assets/image-banner/button_prev.png";
import Indicator from "@/assets/main-image/Indicator.svg"
import { computed, ref } from "vue"
const slides = ref([
  {
    image: left_image,
    name: '02',
    detail: 'Living room',
    price: '(UX/UI)'
  },
  {
    image: main_image,
    name: 'Bohauss',
    detail: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000'
  },
  {
    image: right_image,
    name: '03',
    detail: 'Bath room',
    price: 'khách hàng'
  }
]);

const currentIndex = ref(0);

const leftSlide = computed(() => slides.value[(currentIndex.value - 1 + slides.value.length) % slides.value.length]);
const mainSlide = computed(() => slides.value[currentIndex.value]);
const rightSlide = computed(() => slides.value[(currentIndex.value + 1) % slides.value.length]);



const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};
</script>
