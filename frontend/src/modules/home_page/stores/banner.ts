import { defineStore } from 'pinia';
import { fetchProducts } from '../services/productService';
import { ref } from 'vue';

interface Product {
  image: string;
  name: string;
  detail: string;
  price: string;
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        image: '/image-banner/left_image.png',
        name: 'Modern Chair',
        detail: 'Comfortable wooden chair',
        price: 'Rp 2.500.000'
      },
      {
        image: '/image-banner/main_image.png',
        name: 'Minimalist Lamp',
        detail: 'Soft LED table lamp',
        price: 'Rp 850.000'
      },
      {
        image: '/image-banner/right_image.png',
        name: 'Elegant Table',
        detail: 'Luxury marble dining table',
        price: 'Rp 12.000.000'
      }
    ] as Product[],
    currentIndex: 0
  }),
  actions: {
    async loadProducts() {
      try {
        const fetchedProducts = await fetchProducts();

        if (!Array.isArray(fetchedProducts) || fetchedProducts.length === 0) {
          return;
        }

        this.products = fetchedProducts.map(product => ({
          image: product.image || "",
          name: product.name || "No Product",
          detail: product.detail || "No details available",
          price: product.price || "N/A",
        }));

        this.currentIndex = 0;
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    },
    nextSlide() {
      if (this.products.length === 0) return;
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
    },

    prevSlide() {
      if (this.products.length === 0) return;
      this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
    },

    goToSlide(index: number) {
      if (this.products.length === 0 || index < 0 || index >= this.products.length) return;
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

interface Auth {
  icons: string;
  content: string;
  link: string;
}

export const useAuth = defineStore("auth", {
  state: () => ({
    auth: [
      {
        icons: "",
        content: "Đăng nhập",
        link: "/login",
      },
      {
        icons: "",
        content: "Đăng ký",
        link: "/register",
      },
    ] as Auth[],
    isVisible: ref(false),
    avatar: "/auth/avatar.png",
  }),
  actions: {
    togglePanel() {
      this.isVisible = !this.isVisible;
    },
    closePanel() {
      this.isVisible = false;
    },
  },
});

interface MenuItems {
  name: string;
  link: string;
}

export const useItemsStore = defineStore('menuItems', {
  state: () => ({
    menuItems: [
      { name: "Products", link: "#" },
      { name: "Rooms", link: "#" },
      { name: "Inspirations", link: "#" }
    ] as MenuItems[],
  }),
  actions: {

  },
});

export const useBannerStore = defineStore('banner', {
  state: () => ({
    bannerContent: {
      title: "High-Quality Furniture Just For You",
      description: "Our furniture is made from selected and best quality materials that are suitable for your dream home",
      buttonText: "Shop Now"
    }
  }),
  actions: {
    updateBannerContent(newContent: Partial<{ title: string; description: string; buttonText: string }>) {
      this.bannerContent = { ...this.bannerContent, ...newContent };
    }
  }
});
