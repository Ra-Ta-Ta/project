const state = () => {
    return {
        uid: "",
        user: "",
        expired: "",
        authenticated: "",
    };
};

const actions = {
    async signIn({ commit, dispatch }, userData) {
        try {
            const vm = this;
            const signInResult = await vm.$axios.$post(
                `${process.env.baseUrl}/admin/signin`,
                userData,
            );
            if (signInResult.success) {
                console.log("sign in success");
                await commit("setResult", signInResult);
                await commit("setUser", userData.username);
                await dispatch("checkStatus");
                vm.$router.push({ path: "/" });
            } else {
                console.log("sign in fail");
            }
        } catch (error) {
            throw new Error(error);
        }
    },
    async checkStatus({ commit }) {
        try {
            const vm = this;
            const checkResult = await vm.$axios.$post(
                `${process.env.baseUrl}/api/user/check`,
            );
            if (checkResult.success) {
                console.log("check in success");
                await commit("setAuthenticated");
            } else {
                console.log("check in fail");
            }
        } catch (error) {
            throw new Error(error);
        }
    },
};

const mutations = {
    setResult(state, signInResult) {
        const vm = this;
        state.uid = signInResult.uid;
        state.expired = signInResult.expired;
        vm.$axios.setHeader(
            "Authorization",
            signInResult.token,
        );
        document.cookie = `authenticated=${
            signInResult.success
        }; expires=${new Date(signInResult.expired)};`;
    },
    setAuthenticated(state) {
        state.authenticated = document.cookie.replace(
            /(?:(?:^|.*;\s*)authenticated\s*=\s*([^;]*).*$)|^.*$/,
            "$1",
        );
    },
    setUser(state, userEmail) {
        const user = userEmail.substring(
            0,
            userEmail.indexOf("@"),
        );
        document.cookie = `user=${user}; expires=${new Date(
            state.expired,
        )};`;
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
