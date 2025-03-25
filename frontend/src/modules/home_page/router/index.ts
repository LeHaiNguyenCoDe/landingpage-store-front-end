import type { RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import HomePage from '@/modules/home_page/views/HomePage.vue';

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/Home',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: { module: 'home' },
      },
    ],
  },
];

export default authRoutes;
