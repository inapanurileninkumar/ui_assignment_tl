import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@views/Home.vue';
import Dashboard from '@views/Dashboard';
import Inventory from '@views/Inventory';
import Orders from '@views/Orders';
import Customers from '@views/Customers';
import Reports from '@views/Reports';
import Settings from '@views/Settings';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
];

const router = new VueRouter({
  routes
});

export default router;
