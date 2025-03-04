<template>
  <section class="relative">
    <div class="flex w-full h-full absolute -z-10">
      <div class="w-2/3 bg-[#F9F1E7]"></div>
      <div class="w-1/3 bg-[#FCF8F3]"></div>
    </div>
    <div class="w-full h-15vw">

    </div>
    <div class="absolute z-10 bg-white w-32vw h-35vw left-8vw top-10vw p-3vw flex flex-col gap-2vw">
      <span class="f-text-10-54 font-bold text-[#3A3A3A] f-leading-14-64">High-Quality
        Furniture Just
        For You</span>
        <span class="text-f-text-8-20 text-[#898989] w-11/12 f-leading-8-32 xl:scale-100">
          Our furniture is made from selected and best quality materials that are suitable for your dream home
        </span>
        <button class="w-full h-auto bg-[#E89F71] text-white p-1vw cursor-pointer">
          Shop Now
        </button>
    </div>
    <div class="flex justify-between">
      <img :src="left_image" alt="" class="w-25vw">
      <div class="relative z-0 h-fit">
        <img :src="main_image" alt="" class="w-65vw">
        <div class="absolute z-10 flex flex-col bg-white p-1vw right-2vw bottom-2vw opacity-90 w-15vw h-auto">
          <span class="font-medium f-text-12-32 text-[#3A3A3A]">Bohauss</span>
          <span class="text-[#616161] f-text-10-16">Luxury big sofa 2-seat</span>
          <span class="text-[#3A3A3A] f-text-10-20">Rp 17.000.000</span>
        </div>
      </div>
      <img :src="right_image" alt="" class="w-3vw">
    </div>
  </section>
</template>


<script lang="ts" setup>
import left_image from "@/assets/image-banner/left_image.png";
import main_image from "@/assets/image-banner/main_image.png";
import right_image from "@/assets/image-banner/right_image.png";
</script>
