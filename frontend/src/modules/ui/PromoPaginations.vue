<template>
  <div class="flex justify-center mt-[1vw] space-x-0.5vw items-center">
    <span
      v-for="index in totalDots"
      :key="index"
      class="cursor-pointer p-0.5 transition-all duration-300 text-center f-text-8-16"
      :class="{
        'bg-btnorange text-white': currentIndex === index - 1,
        'bg-gray-300 text-gray-700': currentIndex !== index - 1,
        'rounded-md f-w-18-28 f-h-18-28': isDots,
        'rounded-full w-2 h-2': !isDots
      }"
      @click="goToSlide(index)"
    >
      {{ isDots ? index : '' }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  slides: unknown[];
  currentIndex: number;
  goToSlide: (index: number) => void;
  dotsCount?: number;
  isDots?: boolean;
}>();

const totalDots = computed(() => props.dotsCount ?? props.slides?.length ?? 0);
</script>
