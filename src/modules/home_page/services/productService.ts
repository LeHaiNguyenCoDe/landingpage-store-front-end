export async function fetchProducts() {
  return [
    { id: 1, image: "/public/image-banner/left_image.png", title: "Product 1" },
    { id: 2, image: "/public/image-banner/left_image.png", title: "Product 2" },
    { id: 3, image: "/public/image-banner/left_image.png", title: "Product 3" }
  ];
}

export async function fetchMenuItems() {
  return [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Contact", link: "/contact" }
  ];
}
