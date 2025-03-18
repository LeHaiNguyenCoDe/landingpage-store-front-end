<template>
  <section class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <span class="text-classic f-text-10-20">{{ shareContent.text }}</span>
      <span class="f-text-16-40 text-title font-bold">{{ shareContent.hashtag }}</span>
    </div>
    <div class="flex gap-1vw items-center">
      <div class="flex flex-col w-fit gap-1vw">
        <div class="flex gap-1vw">
          <HoverImage :src="images[0]" class="w-12vw h-25vw object-cover" @click="openModal(images[0])" />
          <HoverImage :src="images[1]" class="w-32.5vw h-20vw self-end object-cover" @click="openModal(images[1])" />
        </div>
        <div class="flex gap-1vw">
          <HoverImage :src="images[2]" class="w-18vw h-20vw object-cover" @click="openModal(images[2])" />
          <HoverImage :src="images[3]" class="w-26.5vw h-16vw object-cover" @click="openModal(images[3])" />
        </div>
      </div>
      <div class="w-fit">
        <HoverImage :src="images[4]" class="h-25vw w-20vw object-cover" @click="openModal(images[4])" />
      </div>
      <div class="flex flex-col w-fit gap-1vw">
        <div class="flex gap-1vw">
          <HoverImage :src="images[5]" class="w-20vw h-23vw self-end object-cover" @click="openModal(images[5])" />
          <HoverImage :src="images[6]" class="w-10vw h-30vw object-cover" @click="openModal(images[6])" />
        </div>
        <div class="flex gap-1vw">
          <HoverImage :src="images[7]" class="w-12vw h-15vw object-cover" @click="openModal(images[7])" />
          <HoverImage :src="images[8]" class="w-18vw h-12vw object-cover" @click="openModal(images[8])" />
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
import HoverImage from "@/modules/home_page/components/itemsSection/HoverImage.vue";
import { useShareStore } from '@/modules/home_page/store/itemsSection';
import { storeToRefs } from 'pinia';

const shareStore = useShareStore();
const { shareContent, images } = storeToRefs(shareStore);

const selectedImage = ref<string | null>(null);

const openModal = (image: string) => {
  selectedImage.value = image;
};

const closeModal = () => {
  selectedImage.value = null;
};
</script>

