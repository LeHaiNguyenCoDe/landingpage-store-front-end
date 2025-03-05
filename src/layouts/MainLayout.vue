<template>
  <section class="space-y-3vw">
    <header>
      <HeaderLayout />
    </header>

    <main class="space-y-3vw">
      <!-- <router-view /> -->
      <RoomInspiration />
      <PromoSlider />
      <ItemsSection />
    </main>

    <footer>
      <FooterLayout />
    </footer>
  </section>
</template>

<script lang="ts" setup>
import FooterLayout from '@/layouts/FooterLayout.vue'
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import RoomInspiration from '@/components/sliderSection/RoomInspiration.vue';
import PromoSlider from '@/components/sliderSection/PromoSlider.vue';
import ItemsSection from '@/components/itemsSection/ItemsSection.vue';
</script>
