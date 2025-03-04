<template>
  <section class="bg-[#FCF8F3] py-3vw flex items-center overflow-hidden">
      <div class="mx-auto flex w-30vw flex-col gap-1vw">
        <span class="f-text-12-40 font-bold text-[#3A3A3A]">50+ Beautiful rooms inspiration</span>
        <span class="text-[#616161] f-text-8-16 w-25vw">Our designer already made a lot of beautiful prototipe of rooms that inspire you</span>
        <button class="w-1/2 h-auto bg-[#E89F71] text-white p-1vw cursor-pointer f-text-8-16">
          Explore More
        </button>
      </div>
      <div class="w-55vw flex gap-1.5vw">
        <div class="relative">
          <img :src="main_img01" alt="" class="h-auto w-28vw object-cover">
          <div class="absolute z-10 left-2vw bottom-2vw flex" >
            <div class="w-15vw h-8vw flex flex-col gap-0.5vw bg-white opacity-70 f-p-1-24">
              <div class="inline-flex items-center gap-0.5vw text-[#616161] f-text-8-16"><span>01</span><span class="w-2vw border h-0 border-[#616161]"></span> <span class=" f-text-8-16 whitespace-nowrap">Bed Room</span></div>
              <span class="f-text-10-18 font-semibold whitespace-nowrap">Inner Peace</span>
            </div>
            <button
              class="bg-[#E7A17A] p-2 flex items-center justify-center hover:bg-[#d98b68] transition h-3vw w-3vw self-end"
            >
            <span class="f-text-14-24 text-white ">→</span>
            </button>
          </div>
        </div>
        <div class="h-full">
          <div class="flex gap-1.5vw">
            <div class="relative">
              <img :src="main_img02" alt="" class="w-22vw h-32vw object-cover">
              <img :src="arrow" alt="" class="absolute -right-2vw top-1/2 f-w-28-72">
            </div>
            <img :src="main_img03" alt="" class="w-5vw h-32vw object-cover">
          </div>
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
</script>
