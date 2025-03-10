<template>
  <section class="container mx-auto p-2vw text-title">
    <h2 class="f-text-24-40 font-bold text-center mb-6">Our Products</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2vw">
      <div
        v-for="(product) in products.slice(0, visibleCount)"
        :key="product.id"
        class="relative bg-mediumWhite shadow-lg overflow-hidden group"
      >
        <img :src="product.image" :alt="product.name" class="w-full xl:h-20vw md:h-25vw h-45vw object-cover" />

        <!-- Overlay xuất hiện khi hover -->
        <div
          class="absolute inset-0 bg-title bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <button class="bg-white text-btnorange px-3vw py-0.5vw shadow-lg mb-1vw cursor-pointer">
            Add to Cart
          </button>
          <div class="flex space-x-4 text-white">
            <button class="flex items-center space-x-0.5vw cursor-pointer">
              <i class="i-custom-share f-w-10-28"></i>
              <span>Share</span>
            </button>
            <button class="flex items-center space-x-0.5vw cursor-pointer">
              <i class="i-custom-heart f-w-10-28"></i>
              <span>Like</span>
            </button>
          </div>
        </div>

        <div class="p-1vw space-y-0.5vw">
          <h3 class="text-lg font-bold">{{ product.name }}</h3>
          <p class="text-classic text-sm">{{ product.description }}</p>
          <div class="mt-2 flex xl:flex-row md:flex-col flex-col">
            <span class="text-lg font-bold ">Rp {{ product.price.toLocaleString() }}</span>
            <span v-if="product.oldPrice" class="text-gray-400 line-through xl:ml-2">
              Rp {{ product.oldPrice.toLocaleString() }}
            </span>
          </div>
        </div>

        <div v-if="product.discount" class="absolute top-1vw right-1vw h-3vw w-3vw bg-new text-white text-xs px-2 py-1 rounded-full flex items-center justify-center">
          -{{ product.discount }}%
        </div>

        <div v-if="product.isNew" class="absolute top-1vw right-1vw h-3vw w-3vw bg-discount text-white text-xs px-2 py-1 rounded-full flex items-center justify-center">
          New
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-2vw space-x-2vw">
  <button
    v-if="visibleCount < products.length"
    @click="showMore"
    class="px-4vw py-0.5vw border border-btnorange text-btnorange cursor-pointer font-semibold"
  >
    Show More
  </button>

  <button
    v-if="visibleCount > 8"
    @click="showLess"
    class="px-4vw py-0.5vw border border-gray-500 text-gray-700 cursor-pointer font-semibold"
  >
    Show Less
  </button>
</div>
  </section>
</template>



<script lang="ts" setup>
import { ref } from "vue";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number | null;
  discount?: number | null;
  isNew: boolean;
  image: string;
}

const products = ref<Product[]>([
  { id: 1, name: "Syltherine", description: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, discount: 30, isNew: false, image: "/product-image/product_01.png" },
  { id: 2, name: "Leviosa", description: "Stylish cafe chair", price: 2500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_08.png" },
  { id: 3, name: "Lolito", description: "Luxury big sofa", price: 7000000, oldPrice: 14000000, discount: 50, isNew: false, image: "/product-image/product_03.png" },
  { id: 4, name: "Respira", description: "Minimalist fan", price: 500000, oldPrice: null, discount: null, isNew: true, image: "/product-image/product_04.png" },
  { id: 5, name: "Grifo", description: "Night lamp", price: 1500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_05.png" },
  { id: 6, name: "Muggo", description: "Small mug", price: 150000, oldPrice: null, discount: null, isNew: true, image: "/product-image/product_06.png" },
  { id: 7, name: "Pingky", description: "Cute bed set", price: 7000000, oldPrice: 14000000, discount: 50, isNew: false, image: "/product-image/product_07.png" },
  { id: 8, name: "Potty", description: "Minimalist flower pot", price: 500000, oldPrice: null, discount: null, isNew: true, image: "/product-image/product_08.png" },
  { id: 9, name: "Syltherine", description: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, discount: 30, isNew: false, image: "/product-image/product_05.png" },
  { id: 10, name: "Pingky", description: "Cute bed set", price: 7000000, oldPrice: 14000000, discount: 50, isNew: false, image: "/product-image/product_03.png" },
  { id: 11, name: "Grifo", description: "Night lamp", price: 1500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_07.png" },
  { id: 12, name: "Leviosa", description: "Stylish cafe chair", price: 2500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_01.png" },
]);

const visibleCount = ref(8);

const showMore = () => {
  visibleCount.value += 4;
};

const showLess = () => {
  if (visibleCount.value > 8) {
    visibleCount.value -= 4;
  }
};
</script>
