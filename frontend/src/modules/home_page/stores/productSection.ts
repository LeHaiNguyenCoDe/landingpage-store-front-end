import { defineStore } from 'pinia';
import type { SwiperClass } from 'swiper/react';
import { computed, ref } from 'vue';

// Định nghĩa interface cho sản phẩm
interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number | null;
  discount?: number | null;
  isNew: boolean;
  image: string;
}

export const useAllProductStore = defineStore('productlist', {
  state: () => ({
    products: {
       newarrivalsproducts: [
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
    ],
    bestsellerproducts: [
      { id: 1, name: "Syltherine1", description: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, discount: 30, isNew: false, image: "/product-image/product_01.png" },
      { id: 2, name: "Leviosa1", description: "Stylish cafe chair", price: 2500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_08.png" },
      { id: 3, name: "Lolito1", description: "Luxury big sofa", price: 7000000, oldPrice: 14000000, discount: 50, isNew: false, image: "/product-image/product_03.png" },
      { id: 4, name: "Respira1", description: "Minimalist fan", price: 500000, oldPrice: null, discount: null, isNew: true, image: "/product-image/product_04.png" },
      { id: 5, name: "Grifo1", description: "Night lamp", price: 1500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_05.png" },
      { id: 6, name: "Muggo1", description: "Small mug", price: 150000, oldPrice: null, discount: null, isNew: true, image: "/product-image/product_06.png" },
      { id: 7, name: "Pingky1", description: "Cute bed set", price: 7000000, oldPrice: 14000000, discount: 50, isNew: false, image: "/product-image/product_07.png" },
      { id: 8, name: "Potty1", description: "Minimalist flower pot", price: 500000, oldPrice: null, discount: null, isNew: true, image: "/product-image/product_08.png" },
      { id: 9, name: "Syltherine1", description: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, discount: 30, isNew: false, image: "/product-image/product_05.png" },
      { id: 10, name: "Pingky1", description: "Cute bed set", price: 7000000, oldPrice: 14000000, discount: 50, isNew: false, image: "/product-image/product_03.png" },
      { id: 11, name: "Grifo1", description: "Night lamp", price: 1500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_07.png" },
      { id: 12, name: "Leviosa1", description: "Stylish cafe chair", price: 2500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_01.png" },
    ],
    featuredproducts: [
      { id: 1, name: "Syltherine2", description: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, discount: 30, isNew: false, image: "/product-image/product_01.png" },
      { id: 2, name: "Leviosa2", description: "Stylish cafe chair", price: 2500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_08.png" },
      { id: 3, name: "Lolito2", description: "Luxury big sofa", price: 7000000, oldPrice: 14000000, discount: 50, isNew: false, image: "/product-image/product_03.png" },
      { id: 4, name: "Respira2", description: "Minimalist fan", price: 500000, oldPrice: null, discount: null, isNew: true, image: "/product-image/product_04.png" },
      { id: 5, name: "Grifo2", description: "Night lamp", price: 1500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_05.png" },
      { id: 6, name: "Muggo2", description: "Small mug", price: 150000, oldPrice: null, discount: null, isNew: true, image: "/product-image/product_06.png" },
      { id: 7, name: "Pingky2", description: "Cute bed set", price: 7000000, oldPrice: 14000000, discount: 50, isNew: false, image: "/product-image/product_07.png" },
      { id: 8, name: "Potty2", description: "Minimalist flower pot", price: 500000, oldPrice: null, discount: null, isNew: true, image: "/product-image/product_08.png" },
      { id: 9, name: "Syltherine2", description: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, discount: 30, isNew: false, image: "/product-image/product_05.png" },
      { id: 10, name: "Pingky2", description: "Cute bed set", price: 7000000, oldPrice: 14000000, discount: 50, isNew: false, image: "/product-image/product_03.png" },
      { id: 11, name: "Grifo2", description: "Night lamp", price: 1500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_07.png" },
      { id: 12, name: "Leviosa2", description: "Stylish cafe chair", price: 2500000, oldPrice: null, discount: null, isNew: false, image: "/product-image/product_01.png" },
    ],
  },
    selectedProducts: [] as Products[],
    visibleCount: 8,

  }),
  actions: {

  },
});

interface ClassIfication {
  id: number;
  title: string;
}

export const useClassification = defineStore('classificationlist', {
  state: () => ({
    classification: [
      { id: 1, title: "NEW ARRIVALS" },
      { id: 2, title: "BEST SELLER" },
      { id: 3, title: "FEATURED PRODUCTS" }
    ] as ClassIfication[],
    selectedCategoryId : 1,
    productlist: useAllProductStore,
    currentIndex: 0
  }),
  getters: {
    filteredProducts(state) {
      const productStore = useAllProductStore();
      switch (state.selectedCategoryId) {
        case 1:
          return productStore.products.newarrivalsproducts;
        case 2:
          return productStore.products.bestsellerproducts;
        case 3:
          return productStore.products.featuredproducts;
        default:
          return [];
      }
    },
  },
  actions: {
    selectCategory(id: number) {
      this.selectedCategoryId = id;
      this.currentIndex = 0;
    }
  }
});

