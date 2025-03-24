<template>
  <div class="flex justify-between items-center overflow-hidden">
    <template v-for="(image, index) in validImages" :key="index">
      <transition name="slide" mode="out-in">
        <div v-if="index === 1" class="relative h-fit">
          <img :src="image.image" alt="" class="w-65vw h-40vw object-cover">
          <div class="absolute flex flex-col bg-white p-1vw right-2vw bottom-2vw opacity-90 xl:w-17vw md:w-20vw w-30vw h-auto">
            <span class="font-medium f-text-12-32 text-title">{{ image.name }}</span>
            <span class="text-classic f-text-10-16">{{ image.detail }}</span>
            <span class="text-title f-text-10-20">{{ image.price }}</span>
          </div>
        </div>
        <img v-else :src="image.image" alt="" :class="[index === 0 ? 'w-25vw' : 'w-3vw', 'h-40vw object-cover']">
      </transition>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";



const props = defineProps<{
  leftImage?: { image: string; name?: string; detail?: string; price?: string };
  mainImage?: { image: string; name: string; detail: string; price: string };
  rightImage?: { image: string; name?: string; detail?: string; price?: string };
}>();

// Xử lý nếu image bị undefined
const validImages = computed(() => [
  props.leftImage ?? { image: "", name: "", detail: "", price: "" },
  props.mainImage ?? { image: "", name: "No Product", detail: "N/A", price: "N/A" },
  props.rightImage ?? { image: "", name: "", detail: "", price: "" }
]);

console.log(validImages);
</script>
