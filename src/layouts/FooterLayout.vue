<template>
  <footer class="bg-gray-100 py-10 lg:py-11">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between gap-8">
        <div v-for="(section, key) in footerData" :key="key" class="flex flex-col space-y-2 max-w-xs">
          <h3 class="f-text-20-24 font-semibold mb-3">{{ section.title }}</h3>
          <a
            v-for="(item, index) in section.items"
            :key="index"
            :href="'#'"
            class="text-gray-600 f-text-14-18"
          >
            {{ item.label }}
          </a>
          <EmailSubscribe v-if="key === 'newsletter'" />
        </div>

      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import EmailSubscribe from "@/layouts/components/EmailSubscribe.vue";

const footerData = ref({
  brand: {
    title: "Furino.",
    items: [
      { label: "Worldwide furniture store since 2020. We sell over 1000 branded products on our website." },
      { label: "📍 1287 Đà Nẵng, Vietnam" },
      { label: "www.furino.vn", link: "" },
    ],
  },
  menu: {
    title: "Menu",
    items: [
      { label: "Products", link: "#" },
      { label: "Rooms", link: "#" },
      { label: "Inspirations", link: "#" },
      { label: "About Us", link: "#" },
      { label: "Terms & Policy", link: "#" },
    ],
  },
  account: {
    title: "Account",
    items: [
      { label: "My Account", link: "#" },
      { label: "Checkout", link: "#" },
      { label: "My Cart", link: "#" },
      { label: "My Catalog", link: "#" },
    ],
  },
  social: {
    title: "Stay Connected",
    items: [
      { label: "Facebook" },
      { label: "Instagram" },
      { label: "Twitter" },
    ],
  },
  newsletter: {
    title: "Stay Updated",
    items: [],
  },
});
</script>

<style lang="scss" scoped></style>
