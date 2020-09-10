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
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
