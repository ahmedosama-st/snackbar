export default {
  namespaced: true,

  state: {
    snack: null,
  },

  getters: {
    snack: (state) => state.snack,
  },

  mutations: {
    SET_SNACK(state, snack) {
      state.snack = snack;
    },
  },

  actions: {
    setSnack({ commit }, options) {
      setTimeout(() => {
        commit('SET_SNACK', options.text);

        setTimeout(() => {
          commit('SET_SNACK', null);
        }, options.time);
      }, options.delay);
    },
  },
};
