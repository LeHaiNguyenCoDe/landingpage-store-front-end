import { defineStore } from "pinia";
import { fetchProducts } from "@/modules/home_page/services/productService";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as { image: string;
      name: string;
      detail: string;
      price: string;}[],
    currentIndex: 0
  }),

  actions: {
    async loadProducts() {
      const fetchedProducts = await fetchProducts();
      this.products = fetchedProducts.map(product => ({
        price: product.price,
        name: product.name,
        detail: product.detail,
        image: product.image
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
    slideImages(): { leftImage?: { image: string; name: string; price: string; detail: string }; mainImage?: { image: string; name: string; price: string; detail: string }; rightImage?: { image: string; name: string; price: string; detail: string } } {
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
