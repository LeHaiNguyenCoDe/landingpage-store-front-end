<template>
  <footer class="container mx-auto my-2vw space-y-3vw">
    <div class="w-full border border-[#D8D8D8]"></div>
    <div class="flex flex-wrap justify-between">
      <div v-for="(section, key) in footerData" :key="key" class="flex flex-col space-y-1vw max-w-xs">
        <h3 class="f-text-12-24 font-bold mb-3">{{ section.title }}</h3>
        <a
          v-for="(item, index) in section.items"
          :key="index"
          :href="'#'"
          class="text-[#616161] f-text-8-16"
          v-html="item.label"
        >
        </a>
        <EmailSubscribe v-if="key === 'newsletter'" />
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
      { label: "Worldwide furniture store since <br> 2020. We sell over 1000 branded <br> products on our website." },
      { label: "1287 Đà Nẵng, Vietnam" },
      { label: "+6289 456 3455" },
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
