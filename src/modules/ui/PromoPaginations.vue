<template>
  <div class="flex justify-center mt-[1vw]">
    <span
      v-for="index in totalDots"
      :key="index"
      class="w-2 h-2 mx-1 rounded-full cursor-pointer transition-all duration-300"
      :class="currentIndex === index-1 ? 'bg-btnorange' : 'bg-gray-300'"
      @click="goToSlide(index)"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  slides: unknown[];
  currentIndex: number;
  goToSlide: (index: number) => void;
  dotsCount?: number;
}>();
const totalDots = computed(() => props.dotsCount ?? props.slides?.length ?? 0);
</script>
