<template>
  <section class="container mx-auto">
    <div class="flex justify-between items-center space-x-3vw">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center space-x-1.5vw"
      >
        <img :src="feature.image" alt="" class="f-w-18-32">
        <div>
          <h3 class="f-text-6-18 font-semibold text-[#3A3A3A]">{{ feature.title }}</h3>
          <p class="text-[#898989] f-text-6-14">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import cup from "@/assets/image-banner/cup.svg"
import check from "@/assets/image-banner/check.svg"
import ship from "@/assets/image-banner/shipping.svg"
import support from "@/assets/image-banner/customer-support.svg"
const features = [
  { image: cup, title: "High Quality", description: "Crafted from top materials" },
  { image: check, title: "Warranty Protection", description: "Over 2 years" },
  { image: ship, title: "Free Shipping", description: "Order over 150$" },
  { image: support, title: "24 / 7 Support", description: "Dedicated support" },
];
</script>
