const state = () => {
    return {
        togglerIsReversed: false,
    };
};

const actions = {
    reverseToggler({ commit }) {
        commit("reverseToggler", state);
    },
    resizeScreen({ commit }) {
        commit("resizeScreen", state);
    },
};

const mutations = {
    reverseToggler(state) {
        state.togglerIsReversed = !state.togglerIsReversed;
    },
    resizeScreen(state) {
        state.togglerIsReversed = false;
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
