const state = () => {
    return {
        togglerIsReversed: false,
    };
};

const actions = {
    reverseToggler({ commit }) {
        commit("reverseToggler");
    },
    resizeScreen({ commit }) {
        commit("resizeScreen");
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
