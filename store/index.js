const state = () => {
    return { authenticated: false };
};

const actions = {
    async nuxtServerInit({ commit }) {
        try {
            const vm = this;
            const checkResult = await vm.$axios.$post(
                `${process.env.baseUrl}/api/user/check`,
            );
            if (checkResult.success) {
                await commit(
                    "setState",
                    checkResult.success,
                );
                await commit("user/setState");
            } else {
                await commit(
                    "setState",
                    checkResult.success,
                );
                await commit("user/removeCookie");
                await commit("user/setState");
            }
        } catch (error) {
            throw new Error(error);
        }
    },
};

const mutations = {
    setState(state, checkResult) {
        state.authenticated = checkResult;
        console.log(state.authenticated);
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
