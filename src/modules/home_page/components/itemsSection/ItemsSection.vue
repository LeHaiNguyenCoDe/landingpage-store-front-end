<template>
  <section class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <span class="text-classic f-text-10-20">Share your setup with</span>
      <span class="f-text-16-40 text-title font-bold">#FuniroFurniture</span>
    </div>
    <div class="flex gap-1vw items-center">
      <div class="flex flex-col w-fit gap-1vw">
        <div class="flex gap-1vw">
          <HoverImage :src="items_01" class="w-12vw h-25vw" @click="openModal(items_01)" />
          <HoverImage :src="items_02" class="w-32.5vw h-20vw self-end" @click="openModal(items_02)" />
        </div>
        <div class="flex gap-1vw">
          <HoverImage :src="items_03" class="w-18vw h-20vw" @click="openModal(items_03)" />
          <HoverImage :src="items_04" class="w-26.5vw h-16vw" @click="openModal(items_04)" />
        </div>
      </div>
      <div class="w-fit">
        <HoverImage :src="items_05" class="h-25vw w-20vw" @click="openModal(items_05)" />
      </div>
      <div class="flex flex-col w-fit gap-1vw">
        <div class="flex gap-1vw">
          <HoverImage :src="items_06" class="w-20vw h-23vw self-end" @click="openModal(items_06)" />
          <HoverImage :src="items_07" class="w-10vw h-30vw" @click="openModal(items_07)" />
        </div>
        <div class="flex gap-1vw">
          <HoverImage :src="items_08" class="w-12vw h-15vw" @click="openModal(items_08)" />
          <HoverImage :src="items_09" class="w-18vw h-12vw" @click="openModal(items_09)" />
        </div>
      </div>
    </div>

    <!-- Modal hiển thị ảnh -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      @click="closeModal"
    >
      <div class="relative" @click.stop>
        <img :src="selectedImage" alt="Preview" class="xl:w-30vw md:w-70vw w-80vw h-auto" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import items_01 from "@/assets/items-image/items_01.png";
import items_02 from "@/assets/items-image/items_02.png";
import items_03 from "@/assets/items-image/items_03.png";
import items_04 from "@/assets/items-image/items_04.png";
import items_05 from "@/assets/items-image/items_05.png";
import items_06 from "@/assets/items-image/items_06.png";
import items_07 from "@/assets/items-image/items_07.png";
import items_08 from "@/assets/items-image/items_08.png";
import items_09 from "@/assets/items-image/items_09.png";
import HoverImage from "@/modules/home_page/components/itemsSection/HoverImage.vue";

const selectedImage = ref<string | null>(null);

const openModal = (image: string) => {
  selectedImage.value = image;
};

const closeModal = () => {
  selectedImage.value = null;
};
</script>
