import { defineStore } from "pinia";
import { fetchMenuItems } from "@/modules/home_page/services/productService";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menuItems: [] as { id: number; name: string; price: number }[],
  }),

  actions: {
    async loadMenuItems() {
      const fetchedItems = await fetchMenuItems();
      this.menuItems = fetchedItems.map(item => ({
        id: 0,
        name: item.name,
        price: 0
      }));
    }
  }
});
