export async function fetchProducts() {
  return [
    { name: "Modern Chair", image: "/image-banner/left_image.png", detail: "Comfortable wooden chair", price: "Rp 2.500.000" },
    { name: "Minimalist Lamp", image: "/image-banner/main_image.png", detail: "Soft LED table lamp", price: "Rp 850.000" },
    { name: "Elegant Table", image: "/image-banner/right_image.png", detail: "Luxury marble dining table", price: "Rp 12.000.000" }
  ];
}

export async function fetchMenuItems() {
  return [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Contact", link: "/contact" }
  ];
}
