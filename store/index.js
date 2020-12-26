const state = () => {
    return { authenticated: false };
};

const actions = {
    async nuxtServerInit(
        { state, commit },
        { $cookies, $axios },
    ) {
        try {
            const checkResult = await $axios.$post(
                `${process.env.baseUrl}/api/user/check`,
            );

            if (
                checkResult.success &&
                $cookies.get("user") !== undefined &&
                $cookies.get("token") !== undefined
            ) {
                await commit("setAuthenticated", true);
                await commit("user/setState");
            } else {
                await commit("setAuthenticated", false);
                await commit("user/removeCookie");
                await commit("user/setState");
            }
        } catch (error) {
            throw new Error(error);
        }
    },
};

const mutations = {
    setAuthenticated(state, checkResult) {
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
