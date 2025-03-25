<template>
  <section class="container mx-auto">
    <div class="flex justify-between items-center space-x-3vw">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center space-x-1.5vw"
      >
        <i :class="`${feature.icon} f-text-10-32 text-black`"></i>
        <div>
          <h3 class="f-text-6-18 font-semibold text-title">{{ feature.title }}</h3>
          <p class="text-banner f-text-6-14">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFeatureStore } from '@/modules/home_page/stores/itemsSection';
import { storeToRefs } from 'pinia';

const featureStore = useFeatureStore();
const { features } = storeToRefs(featureStore);
</script>
