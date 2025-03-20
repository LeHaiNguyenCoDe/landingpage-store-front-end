<template>
  <button
    class="relative group overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
    :aria-label="ariaLabel"
  >
    <img
      :src="src"
      :srcset="srcset"
      alt=""
      loading="lazy"
      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  src: string;
  srcset?: string;
  ariaLabel?: string;
}>();
</script>
