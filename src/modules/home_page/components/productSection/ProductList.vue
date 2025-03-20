<template>
  <section class="container mx-auto p-2vw text-title">
    <h2 class="f-text-24-40 font-bold text-center mb-6">Our Products</h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-[2vw]">
      <div v-for="(product) in products.slice(0, visibleCount)" :key="product.id"
        class="group relative transition-transform duration-500 perspective-[1000px]">
        <div class="relative bg-mediumWhite shadow-lg overflow-hidden transform-style-3d">
          <!-- Mặt trước -->
          <div class="relative transition-transform duration-1000 group-hover:rotate-y-180">
            <img :src="product.image" :alt="product.name"
              class="w-full xl:h-[20vw] md:h-[25vw] h-45vw object-cover hover:scale-105" />
          </div>
          <div class="p-[1vw] space-y-[0.5vw] md:h-13vw xl:h-fit h-25vw">
            <h3 class="text-lg font-bold">{{ product.name }}</h3>
            <p class="text-classic text-sm">{{ product.description }}</p>
            <div class="mt-2 flex xl:flex-row md:flex-col flex-col">
              <span class="text-lg font-bold">Rp {{ product.price.toLocaleString() }}</span>
              <span v-if="product.oldPrice" class="text-gray-400 inline-flex line-through xl:ml-2 self-end">
                Rp {{ product.oldPrice.toLocaleString() }}
              </span>
            </div>
          </div>
          <!-- Mặt sau (Hiển thị khi hover) -->
          <div
            class="absolute inset-0 flex flex-col items-center justify-center xl:h-[20vw] md:h-[25vw] h-45vw bg-title bg-opacity-80 text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-1000 rotate-y-180 group-hover:rotate-y-[360deg]">
            <button
              class="bg-white text-btnorange px-[3vw] py-[0.5vw] shadow-lg mb-[1vw] cursor-pointer hover:scale-105 transition-transform duration-300">
              Add to Cart
            </button>
            <div class="flex space-x-4">
              <button class="flex items-center space-x-[0.5vw] cursor-pointer hover:text-orange-400">
                <i class="i-custom-share f-w-10-28"></i>
                <span>Share</span>
              </button>
              <button class="flex items-center space-x-[0.5vw] cursor-pointer hover:text-red-400">
                <i class="i-custom-heart f-w-10-28"></i>
                <span>Like</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Nút Show More & Show Less -->
    <div class="flex justify-center mt-2vw space-x-2vw">
      <button v-if="visibleCount < products.length" @click="showMore"
        class="px-4vw py-0.5vw border border-btnorange text-btnorange cursor-pointer font-semibold">
        Show More
      </button>
      <button v-if="visibleCount > 8" @click="showLess"
        class="px-4vw py-0.5vw border border-gray-500 text-gray-700 cursor-pointer font-semibold">
        Show Less
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAllProductStore } from "@/modules/home_page/stores/productSection";
const productStore = useAllProductStore();

const { products, visibleCount } = storeToRefs(productStore);

const showMore = productStore.showMore;
const showLess = productStore.showLess;
</script>
