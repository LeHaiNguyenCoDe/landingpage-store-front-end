import { defineStore } from 'pinia';

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
  }),
  actions: {

  },
});


interface Auth {
  icons: string;
  content: string;
  link: string;
}

export const useAuth = defineStore('auth', {
  state: () => ({
    auth: [
      // {
      //   icons: "",
      //   content: "Thông tin cá nhân",
      //   link: "#"
      // },
      // {
      //   icons: "",
      //   content: "Cài đặt hệ thống",
      //   link: "#"
      // },
      // {
      //   icons: "",
      //   content: "Ngôn ngữ",
      //   link: "#"
      // },
      // {
      //   icons: "",
      //   content: "Hỗ trợ khách hàng",
      //   link: "#"
      // },
      // {
      //   icons: "",
      //   content: "Hướng dẫn sử dụng",
      //   link: "#"
      // },
      // {
      //   icons: "",
      //   content: "Thay đổi mật khẩu",
      //   link: "#"
      // },
      // {
      //   icons: "",
      //   content: "Đăng xuất",
      //   link: "/login"
      // }
      {
        icons: "",
        content: "Đăng nhập",
        link: "/login"
      },
      {
        icons: "",
        content: "Đăng ký",
        link: "/register"
      },
    ] as Auth[],
  }),
  actions: {

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
