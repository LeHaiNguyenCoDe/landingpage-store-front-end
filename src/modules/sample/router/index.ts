import type { RouteRecordRaw } from 'vue-router';

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/sample',
    name: 'sample',
    component: () => import('../views/SamplePage.vue'),
  },
];

export default authRoutes;
