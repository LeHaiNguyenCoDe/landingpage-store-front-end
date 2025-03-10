<template>
  <div class="flex justify-between items-center">
    <transition name="slide" mode="out-in">
      <img :src="leftImage.image" :key="leftImage.image" alt="" class="w-25vw h-40vw object-cover">
    </transition>

    <div class="relative z-0 h-fit">
      <transition name="slide" mode="out-in">
        <img :src="mainImage.image" :key="mainImage.image" alt="" class="w-65vw h-40vw">
      </transition>
      <transition name="slide" mode="out-in">
        <div
          class="absolute z-10 flex flex-col bg-white p-1vw right-2vw bottom-2vw opacity-90 xl:w-17vw md:w-20vw w-30vw h-auto"
          :key="mainImage.name">
          <span class="font-medium f-text-12-32 text-title">{{ mainImage.name }}</span>
          <span class="text-classic f-text-10-16">{{ mainImage.detail }}</span>
          <span class="text-title f-text-10-20">{{ mainImage.price }}</span>
        </div>
      </transition>
    </div>

    <transition name="slide" mode="out-in">
      <img :src="rightImage.image" :key="rightImage.image" alt="" class="w-3vw h-40vw object-cover">
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  leftImage: { image: string };
  mainImage: { image: string; name: string; detail: string; price: string };
  rightImage: { image: string };
}>();
</script>
