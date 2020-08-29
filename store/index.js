const state = () => {
  return {
    menuIsOpen: false
  };
};

const actions = {
  getMenuStatus({ commit }) {
    commit("setMenuStatus", state);
  }
};

const mutations = {
  setMenuStatus(state) {
    state.menuIsOpen = !state.menuIsOpen;
  }
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
};
