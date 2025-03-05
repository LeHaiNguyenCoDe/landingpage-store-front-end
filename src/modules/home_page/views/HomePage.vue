<template>
  <main class="space-y-3vw">
      <RoomInspiration />
      <PromoSlider />
      <ItemsSection />
  </main>
</template>

<script lang="ts" setup>
import RoomInspiration from '@/modules/home_page/components/sliderSection/RoomInspiration.vue';
import PromoSlider from '@/modules/home_page/components/sliderSection/PromoSlider.vue';
import ItemsSection from '@/modules/home_page/components/itemsSection/ItemsSection.vue';
</script>
