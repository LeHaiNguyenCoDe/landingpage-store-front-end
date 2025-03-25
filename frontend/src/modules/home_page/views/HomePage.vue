<template>
  <main class="space-y-5vw">
      <PromoServiceBenefits />
      <ProductList />
      <RoomInspiration />
      <PromoSlider />
      <ItemsSection />
  </main>
</template>

<script lang="ts" setup>
import RoomInspiration from '@/modules/home_page/components/sliderSection/RoomInspiration.vue';
import PromoSlider from '@/modules/home_page/components/sliderSection/PromoSlider.vue';
import ItemsSection from '@/modules/home_page/components/itemsSection/ItemsSection.vue';
import PromoServiceBenefits from '@/modules/home_page/components/itemsSection/PromoServiceBenefits.vue';
import ProductList from '@/modules/home_page/components//productSection/ProductList.vue';
</script>
