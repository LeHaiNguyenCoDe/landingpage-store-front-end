<template>
  <section class="relative flex flex-col">
    <div class="flex w-full h-full absolute -z-10">
      <div class="w-2/3 bg-[#F9F1E7]"></div>
      <div class="w-1/3 bg-[#FCF8F3]"></div>
    </div>
    <div class="w-full h-10vw text-title container mx-auto mr-auto flex py-3vw">
      <div class="w-full h-fit flex gap-2vw">
        <div class="xl:w-35vw md:w-35vw w-45vw flex items-center gap-4vw xl:ml-[-1vw]">
          <a href="#"><span class="f-text-12-24 font-bold text-black">Funiro.</span></a>
          <div class="flex gap-3vw f-text-8-16">
            <a
              v-for="(item, index) in menuItems"
              :key="index"
              :href="item.link"
              class="hover:text-gray-500 transition-all"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
        <div class="w-60vw flex items-center justify-between xl:mr-[-2.5vw]">
          <input type="text" placeholder="Search for minimalist chair"
            class="xl:w-35vw md:w-35vw w-30vw xl:h-3vw md:h-3vw h-5vw bg-white p-1vw f-text-8-14 outline-none focus:ring-0 focus:border-transparent">

          <div class="flex gap-1.5vw items-center f-text-10-16">
            <a href="#">
              <i class="i-custom-heart f-text-10-20 text-black"></i>
            </a>
            <a href="#">
              <i class="i-custom-cart f-text-10-20 text-black"></i>
            </a>
            <div class="relative" ref="panelRef">
              <a href="#" @click.prevent="togglePanel">
                <img src="@/icons/avatar.png" alt="Avatar" class="f-w-12-40 cursor-pointer">
              </a>

              <!-- Panel -->
              <div
                v-if="isVisible"
                class="absolute right-0 top-full mt-1vw w-15vw bg-white shadow-lg rounded-md p-1vw flex flex-col gap-1vw z-1 text-title"
              >
                <div class="w-full flex flex-col">
                  <span class="f-text-16-28 font-medium">Funiro.</span>
                  <span class="f-text-10-14 text-gray-500">Information management</span>
                  <div class="border my-1vw border-gray-500"></div>
                </div>
                <router-link v-for="(item, index) in auth" :key="index" :to="item.link" class="flex gap-1vw text-gray-500">
                  <span class="font-semibold f-text-8-16 cursor-pointer">{{ item.icons}}</span>
                  <span class="f-text-8-16 cursor-pointer">{{ item.content}}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-55vw mx-4vw flex justify-between py-2vw self-end px-2vw">
      <Paginations :slides="slides" :currentIndex="currentIndex" :goToSlide="goToSlide"/>
      <div class="flex gap-1vw">
        <button class="bg-orange-200 f-w-18-48 f-h-18-48 cursor-pointer rounded-full flex items-center justify-center" @click="prevSlide"><i class="i-custom-arrowprev f-w-12-16 f-h-12-16 bg-btnorange"></i></button>
        <button class="bg-btnorange f-w-18-48 f-h-18-48 cursor-pointer rounded-full flex items-center justify-center" @click="nextSlide"><i class="i-custom-arrow f-w-12-16 f-h-12-16"></i></button>
      </div>
    </div>
      <div class="absolute z-10 bg-white w-32vw h-35vw left-8vw top-10vw p-3vw flex flex-col gap-2vw">
        <span class="f-text-10-54 font-bold text-title f-leading-14-64">
          {{ bannerContent.title }}
        </span>
        <span class="f-text-8-20 text-banner xl:w-11/12 md:w-full w-full f-leading-8-32 xl:scale-100">
          {{ bannerContent.description }}
        </span>
        <button class="w-full h-auto bg-btnorange text-white p-1vw cursor-pointer f-text-8-20">
          {{ bannerContent.buttonText }}
        </button>
      </div>
    <ImageBanner :leftImage="leftSlide" :mainImage="mainSlide" :rightImage="rightSlide" />
  </section>
</template>


<script lang="ts" setup>
import ImageBanner from "./ImageBanner.vue";
import { computed, onMounted, onUnmounted, ref } from "vue"
import { useProductStore, useAuth, useItemsStore, useBannerStore } from "@/modules/home_page/store/banner";

import Paginations from '@/modules/ui/PromoPaginations.vue';
const currentIndex = ref(0);
const goToSlide = (index: number) => {
  currentIndex.value = index;
};

const productStore = useProductStore();
const slides = ref(productStore.products);
const authStore = useAuth();

const auth = ref(authStore.auth);

const itemsStore = useItemsStore();

const menuItems = ref(itemsStore.menuItems);

const bannerStore = useBannerStore();

const bannerContent = ref(bannerStore.bannerContent);

const leftSlide = computed(() => slides.value[(currentIndex.value - 1 + slides.value.length) % slides.value.length]);
const mainSlide = computed(() => slides.value[currentIndex.value]);
const rightSlide = computed(() => slides.value[(currentIndex.value + 1) % slides.value.length]);
const panelRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const togglePanel = () => {
  isVisible.value = !isVisible.value;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const handleClickOutside = (event: MouseEvent) => {
  if (panelRef.value && !panelRef.value.contains(event.target as Node)) {
    isVisible.value = false;
  }
};


// Gắn sự kiện khi component mount
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// Hủy sự kiện khi component bị hủy
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
