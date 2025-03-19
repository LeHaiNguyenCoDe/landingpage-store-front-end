import { defineStore } from "pinia";

interface Post {
  title: string;
  date: string;
  image: string;
}

export const usePostStore = defineStore("post", {
  state: () => ({
    posts: [
      {
        title: "How to create a living <br> room to love",
        date: "20 Jan 2020",
        image: "/slider-image/slider_image_01.png",
      },
      {
        title: "Solution for clean look working space",
        date: "10 Jan 2020",
        image: "/slider-image/slider_image_02.png",
      },
      {
        title: "Make your cooking activity more fun with good setup",
        date: "20 Jan 2020",
        image: "/slider-image/slider_image_03.png",
      },
      {
        title: "How to create a living <br> room to love",
        date: "20 Jan 2020",
        image: "/slider-image/slider_image_01.png",
      },
      {
        title: "Solution for clean look working space",
        date: "10 Jan 2020",
        image: "/slider-image/slider_image_02.png",
      },
      {
        title: "Solution for clean look working space",
        date: "10 Jan 2020",
        image: "/slider-image/slider_image_02.png",
      },
      {
        title: "Make your cooking activity more fun with good setup",
        date: "20 Jan 2020",
        image: "/slider-image/slider_image_03.png",
      },
      {
        title: "How to create a living <br> room to love",
        date: "20 Jan 2020",
        image: "/slider-image/slider_image_01.png",
      },
    ] as Post[],
  }),
  actions: {

  },
});


interface RoomSlide {
  image: string;
  number: string;
  roomName: string;
  text: string;
}

export const useRoomStore = defineStore("room", {
  state: () => ({
    slides: [
      {
        image: "/main-image/main_img01.png",
        number: '01',
        roomName: 'Bed room',
        text: 'Inner Peace'
      },
      {
        image: "/main-image/main_img02.png",
        number: '02',
        roomName: 'Living room',
        text: '(UX/UI)'
      },
      {
        image: "/main-image/main_img03.png",
        number: '03',
        roomName: 'Bath room',
        text: 'khách hàng'
      },
    ] as RoomSlide[],
  }),
  actions: {

  },
});

interface RoomContent {
  title: string;
  description: string;
  buttonText: string;
}

export const useRoomContentStore = defineStore("roomContent", {
  state: () => ({
    roomContent: {
      title: "50+ Beautiful rooms inspiration",
      description: "Our designer already made a lot of beautiful prototype of rooms that inspire you",
      buttonText: "Explore More",
    } as RoomContent,
  }),
  actions: {
    updateContent(newContent: Partial<RoomContent>) {
      this.roomContent = { ...this.roomContent, ...newContent };
    },
  },
});
