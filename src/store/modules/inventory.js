export const inventory = {
  namespaced: true,
  state: {
    inventory: [],
    sales: []
  },
  getters: {
    getInventory: state => state['inventory'],
    getSales: state => state['sales']
  },
  actions: {
    setInventory: function ({ commit }, inventory) {
      commit('SET_INVENTORY', inventory);
    },
    setSales: function ({ commit }, sales) {
      commit('SET_SALES', sales);
    }
  },
  mutations: {
    SET_INVENTORY: function (state, inventory) {
      state['inventory'] = inventory;
    },
    SET_SALES: function (state, sales) {
      state['sales'] = sales;
    }
  }
};
