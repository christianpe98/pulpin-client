import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/home-view.vue';
import PrivacyPolicyView from '@/views/privacy-policy-view.vue';
import NotFoundView from '@/views/not-found-view.vue';
import { ROUTE_NAMES } from '@/router/route-names.const';

const routes = [
  { path: '/', name: ROUTE_NAMES.HOME, component: HomeView },
  { path: '/privacy-policy', name: ROUTE_NAMES.PRIVACY_POLICY, component: PrivacyPolicyView },
  { path: '/:pathMatch(.*)*', name: ROUTE_NAMES.NOT_FOUND, component: NotFoundView }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
