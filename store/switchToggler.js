const state = () => {
    return {
        togglerIsReversed: false,
    };
};

const actions = {
    reverseToggler({ commit }) {
        commit("reverseToggler", state);
    },
};

const mutations = {
    reverseToggler(state) {
        state.togglerIsReversed = !state.togglerIsReversed;
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
