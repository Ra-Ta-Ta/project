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
                if (vm.$cookies.get("user") !== undefined) {
                    await commit(
                        "setState",
                        checkResult.success,
                    );
                    await commit("user/setState");
                } else {
                    vm.$router.push({ path: "/sign-in" });
                }
            } else {
                await commit(
                    "setState",
                    checkResult.success,
                );
                await commit("user/removeCookie");
                await commit("user/setState");
                vm.$router.push({ path: "/sign-in" });
            }
        } catch (error) {
            throw new Error(error);
        }
    },
};

const mutations = {
    setState(state, checkResult) {
        state.authenticated = checkResult;
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
