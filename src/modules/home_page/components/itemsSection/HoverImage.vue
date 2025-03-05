<template>
  <button class="relative group">
    <img :src="src" alt="" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
  </button>
</template>

<script lang="ts" setup>
defineProps<{ src: string }>();
</script>
