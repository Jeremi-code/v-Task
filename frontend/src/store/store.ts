import { createStore } from "vuex";

export default createStore({
  state: {
    showAdd: false,
  },
  mutations: {
    toggleShowAdd(state) {
      state.showAdd = !state.showAdd;
    },
  },
  actions: {
    toggleShowAdd({ commit }) {
      commit("toggleShowAdd");
    },
  },
  getters: {
    showAdd: (state) => state.showAdd,
  },
});
