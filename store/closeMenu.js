const state = () => {
  return {
    menuIsClose: false
  };
};

const actions = {
  getMenuStatus({ commit }) {
    commit("setMenuStatus", state);
  }
};

const mutations = {
  setMenuStatus(state) {
    state.menuIsClose = !state.menuIsClose;
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
