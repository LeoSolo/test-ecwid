import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ListPage from '@/views/ListPage.vue';
import CartPage from '@/views/CartPage.vue';
import ProductPage from '@/views/ProductPage.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'List',
    component: ListPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
