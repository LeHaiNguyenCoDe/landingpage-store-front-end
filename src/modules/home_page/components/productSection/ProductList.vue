<template>
  <section class="container mx-auto p-2vw text-title">
    <h2 class="f-text-24-40 font-bold text-center mb-6">Our Products</h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-[2vw]">
      <div v-for="(product) in products.slice(0, visibleCount)" :key="product.id"
        class="group relative transition-transform duration-500 h-full">
        <div class="relative overflow-hidden">
          <!-- Mặt gốc -->
          <div class="relative transition-transform duration-1000 h-full">
            <img :src="product.image" :alt="product.name" class="w-full xl:h-[25vw] md:h-[25vw] h-45vw object-cover" />
            <!-- Hiển thị khi hover -->
            <div class="absolute bottom-0 inset-x-0 flex items-center h-3vw text-center text-sm bg-white border border-gray-300 text-title opacity-0 group-hover:opacity-100 transition-all duration-1000 ">
                <button class="flex items-center space-x-[0.5vw] cursor-pointer hover:text-orange-400 h-full w-1/2 justify-center border-r border-gray-300">
                  <i class="i-custom-Cart f-w-12-28"></i>
                </button>
                <button class="flex items-center space-x-[0.5vw] cursor-pointer hover:text-red-400 w-1/4 h-full justify-center border-r border-gray-300">
                  <i class="i-custom-heart f-w-10-18"></i>
                </button>
                <button class="flex items-center space-x-[0.5vw] cursor-pointer hover:text-orange-400 w-1/4 h-full justify-center">
                  <i class="i-custom-menu f-w-10-18"></i>
                </button>
            </div>
            <div v-if="product.discount !== null"
                class="absolute top-1vw right-1vw f-w-32-52 f-h-32-52 flex flex-col items-center justify-center text-center f-text-8-14 bg-orange-400 text-black rounded-full">
              <div class="f-w-24-36 border border-0.1vw border-black"></div>
              <button class="flex items-center cursor-pointer h-4/12 text-center">
                <span>-{{ product.discount }}%</span>
              </button>
              <div class="f-w-24-36 border border-black"></div>
            </div>
          </div>
          <div class="p-[1vw] space-y-[0.3vw] md:h-13vw xl:h-fit h-25vw flex flex-col justify-center items-center">
            <h3 class="text-md font-bold">{{ product.name }}</h3>
            <p class="text-classic text-xs">{{ product.description }}</p>
            <div class="mt-2 flex xl:flex-row md:flex-col flex-col">
              <span class="text-md font-bold">Rp {{ product.price.toLocaleString() }}</span>
              <span v-if="product.oldPrice" class="text-gray-400 inline-flex line-through xl:ml-2 self-end">
                Rp {{ product.oldPrice.toLocaleString() }}
              </span>
            </div>
            <span class="h-3vw">
            </span>
          </div>
          <!-- <div
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
          </div> -->
          <!-- Hiển thị khi hover -->
          <div class="absolute bottom-0 inset-x-0 flex flex-col space-y-[0.3vw] items-center h-3vw text-center text-md bg-white text-title opacity-0 group-hover:opacity-100 transition-all duration-1000 ">
            <div class="w-full border border-gray-300"></div>
            <button class="flex items-center space-x-[0.5vw] cursor-pointer hover:text-red-400 w-1/3">
              <span>+ Quickshop</span>
            </button>
            <div class="w-full border border-black"></div>
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
