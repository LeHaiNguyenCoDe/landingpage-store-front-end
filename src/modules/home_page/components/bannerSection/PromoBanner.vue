<template>
  <section class="relative flex flex-col">
    <div class="flex w-full h-full absolute -z-10">
      <div class="w-2/3 bg-[#F9F1E7]"></div>
      <div class="w-1/3 bg-[#FCF8F3]"></div>
    </div>

    <div class="w-full container mx-auto flex py-3vw">
      <div class="w-full flex justify-between items-center gap-2vw">
        <div class="flex items-center gap-4vw xl:ml-[-1vw]">
          <a href="#" class="text-black font-bold f-text-12-24">Funiro.</a>
          <nav class="flex gap-3vw f-text-8-16">
            <a v-for="item in menuStore.menuItems" :key="item.link" :href="item.link" class="hover:text-gray-500 transition-all">
              {{ item.name }}
            </a>
          </nav>
        </div>
        <div class="w-60vw flex items-center justify-between xl:mr-[-2.5vw]">
          <input type="text" placeholder="Search for minimalist chair"
            class="xl:w-35vw md:w-35vw w-30vw xl:h-3vw md:h-3vw h-5vw bg-white p-1vw f-text-8-14 outline-none focus:ring-0 focus:border-transparent">

          <div class="flex gap-1vw items-center f-text-10-16">
            <a href="#">
              <i class="i-custom-heart f-text-10-24"></i>
            </a>
            <a href="#">
              <i class="i-custom-cart f-text-10-24"></i>
            </a>
            <div class="relative" ref="panelRef">
              <a href="#" @click.prevent="authStore.togglePanel">
                <img :src="authStore.avatar" alt="Avatar" class="f-w-12-40 cursor-pointer">
              </a>

              <!-- Panel -->
              <div
                v-if="authStore.isVisible"
                class="absolute right-0 top-full mt-1vw w-15vw bg-white shadow-lg rounded-lg p-1vw flex flex-col"
              >
                <button
                  v-for="item in authStore.auth"
                  :key="item.link"
                  @click="() => $router.push(item.link)"
                  class="font-semibold f-text-8-16 cursor-pointer"
                  :class="{ 'text-red-500': item.content === 'Đăng ký' }"
                >
                  {{ item.content }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-55vw mx-4vw flex justify-between py-2vw self-end px-2vw">
      <Paginations
        v-if="productStore.products.length > 0"
        :slides="productStore.products"
        :currentIndex="productStore.currentIndex"
        :goToSlide="productStore.goToSlide"
      />
      <div class="flex gap-1vw">
        <button
          v-for="(action, index) in slideActions"
          :key="index"
          :class="action.bgClass"
          class="f-w-18-48 f-h-18-48 rounded-full flex items-center justify-center"
          @click="action.method"
        >
          <i :class="action.iconClass"></i>
        </button>
      </div>
    </div>

    <div class="absolute z-10 bg-white w-32vw h-35vw left-8vw top-10vw p-3vw flex flex-col gap-2vw">
      <span v-if="bannerStore.bannerContent" class="font-bold text-title f-text-10-54 f-leading-14-64">
        {{ bannerStore.bannerContent.title }}
      </span>
      <span v-if="bannerStore.bannerContent" class="text-banner f-text-8-20 xl:w-11/12 f-leading-8-32">
        {{ bannerStore.bannerContent.description }}
      </span>
      <button v-if="bannerStore.bannerContent" class="w-full bg-btnorange text-white p-1vw f-text-8-20">
        {{ bannerStore.bannerContent.buttonText }}
      </button>
    </div>

    <!-- Chỉ render ImageBanner nếu có dữ liệu -->
    <ImageBanner
      v-if="productStore.slideImages.mainImage"
      v-bind="productStore.slideImages"
    />
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useAuth, useProductStore } from "@/modules/home_page/stores/banner";
import { useMenuStore } from "@/modules/home_page/stores/products/menuStore";
import { useBannerStore } from "@/modules/home_page/stores/banner";
import Paginations from "@/modules/ui/PromoPaginations.vue";
import ImageBanner from "./ImageBanner.vue";
import { onClickOutside } from "@vueuse/core";

const productStore = useProductStore();
const menuStore = useMenuStore();
const bannerStore = useBannerStore();
const authStore = useAuth();
const panelRef = ref(null);

const slideActions = [
  { iconClass: "i-custom-arrowprev f-w-10-16 f-h-10-16 bg-btnorange", bgClass: "bg-orange-200", method: productStore.prevSlide },
  { iconClass: "i-custom-arrow f-w-10-16 f-h-10-16", bgClass: "bg-btnorange", method: productStore.nextSlide },
];
onClickOutside(panelRef, () => {
  authStore.closePanel();
});
onMounted(async () => {
  await productStore.loadProducts();
  await menuStore.loadMenuItems();
  bannerStore.updateBannerContent({
    title: "Default Title",
    description: "Default Description",
    buttonText: "Default Button Text"
  });
});

console.log("Slide Images:", productStore.slideImages);
</script>
