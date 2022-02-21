import Vue from 'vue';
import Vuex from 'vuex';

import { orders } from './modules/orders';
import { inventory } from './modules/inventory';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    orders,
    inventory
  }
});
