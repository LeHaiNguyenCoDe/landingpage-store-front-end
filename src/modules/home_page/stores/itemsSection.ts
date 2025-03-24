import { defineStore } from 'pinia';

export const useShareStore = defineStore('share', {
  state: () => ({
    shareContent: {
      text: "Share your setup with",
      hashtag: "#FuniroFurniture"
    },
    images: [
      "/items-image/items_01.png",
      "/items-image/items_02.png",
      "/items-image/items_03.png",
      "/items-image/items_04.png",
      "/items-image/items_05.png",
      "/items-image/items_06.png",
      "/items-image/items_07.png",
      "/items-image/items_08.png",
      "/items-image/items_09.png",
    ]
  }),
  actions: {

  }
});


interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const useFeatureStore = defineStore('feature', {
  state: () => ({
    features: [
      { icon: 'i-custom-cup', title: "High Quality", description: "Crafted from top materials" },
      { icon: 'i-custom-check', title: "Warranty Protection", description: "Over 2 years" },
      { icon: 'i-custom-shipping', title: "Free Shipping", description: "Order over 150$" },
      { icon: 'i-custom-customer-support', title: "24 / 7 Support", description: "Dedicated support" },
    ] as Feature[]
  }),
  actions: {

  }
});
