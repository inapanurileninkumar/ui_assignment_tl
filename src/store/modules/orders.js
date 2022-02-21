export const orders = {
  namespaced: true,
  state: {
    orders: []
  },
  getters: {
    getOrders: state => state['orders']
  },
  actions: {
    setOrders: function ({ commit }, orders) {
      commit('SET_ORDERS', orders);
    },
    addOrder: function ({ commit }, order) {
      commit('ADD_ORDER', order);
    },
    removeOrder: function ({ commit }, order) {
      commit('REMOVE_ORDER', order);
    }
  },
  mutations: {
    SET_ORDERS: function (state, orders) {
      state['orders'] = orders;
    },
    ADD_ORDER: function (state, order) {
      state['orders'].push(order);
    },
    REMOVE_ORDER: function (state, order) {
      let orderIndex = state['orders'].findIndex(so => so['name'] === order['name']);
      if (orderIndex > -1) {
        state['orders'].splice(orderIndex, 1);
      }
    }
  }
};
