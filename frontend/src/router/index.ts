import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const modules = import.meta.glob('@/modules/**/**index.ts', { eager: true });

const routes: RouteRecordRaw[] = [];

for (const path in modules) {
  const mod = modules[path] as { default?: RouteRecordRaw[] };
  if (mod.default) {
    routes.push(...mod.default);
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
