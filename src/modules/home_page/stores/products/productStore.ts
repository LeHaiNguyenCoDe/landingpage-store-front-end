import { defineStore } from "pinia";
import { fetchProducts } from "@/modules/home_page/services/productService";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as { id: number; name: string; price: number; imageUrl: string }[],
    currentIndex: 0
  }),

  actions: {
    async loadProducts() {
      const fetchedProducts = await fetchProducts();
      this.products = fetchedProducts.map(product => ({
        id: product.id,
        name: product.title,
        price: 0,
        imageUrl: product.image
      }));
    },

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
    },

    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
    },

    goToSlide(index: number) {
      this.currentIndex = index;
    }
  },

  getters: {
    slideImages(): { leftImage?: { id: number; name: string; price: number; imageUrl: string }; mainImage?: { id: number; name: string; price: number; imageUrl: string }; rightImage?: { id: number; name: string; price: number; imageUrl: string } } {
      if (this.products.length === 0) {
        return {
          leftImage: undefined,
          mainImage: undefined,
          rightImage: undefined,
        };
      }

      return {
        leftImage: this.products[(this.currentIndex - 1 + this.products.length) % this.products.length],
        mainImage: this.products[this.currentIndex],
        rightImage: this.products[(this.currentIndex + 1) % this.products.length],
      };
    }
  }
});
