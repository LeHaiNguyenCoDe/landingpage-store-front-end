import { defineStore } from "pinia";
import { fetchMenuItems } from "@/modules/home_page/services/productService";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menuItems: [] as { name: string; link: string }[],
  }),

  actions: {
    async loadMenuItems() {
      const fetchedItems = await fetchMenuItems();
      this.menuItems = fetchedItems.map(item => ({
        name: item.name,
        link: item.link
      }));
    }
  }
});
