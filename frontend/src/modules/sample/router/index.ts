import type { RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import HomePage from '@/modules/home_page/views/HomePage.vue';

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/sample',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'sample',
        component: HomePage,
        meta: { module: 'sample' },
      },
    ],
  },
];

export default authRoutes;
