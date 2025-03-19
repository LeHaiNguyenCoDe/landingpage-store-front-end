import { defineStore } from 'pinia';

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
    products: [
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
    ] as Products[],
    visibleCount: 8
  }),
  actions: {
    showMore() {
      this.visibleCount += 4;
    },
    showLess() {
      this.visibleCount = Math.max(8, this.visibleCount - 4);
    }
  }
});
