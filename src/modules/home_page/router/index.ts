import type { RouteRecordRaw } from 'vue-router';

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/modules/home_page/views/HomePage.vue'),
  }
];

export default authRoutes;
