const state = () => {
    return {
        user: "",
        uid: "",
        expired: "",
        success: "",
        token: "",
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
                console.log(signInResult);
                await commit("setResult", signInResult);
                await commit("setUser", userData.username);
                await dispatch("checkStatus");
                vm.$router.push({ path: "/" });
            } else {
                console.log(signInResult);
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
                console.log(checkResult);
                await commit("setState");
            } else {
                console.log(checkResult);
            }
        } catch (error) {
            throw new Error(error);
        }
    },
};

const mutations = {
    setResult(state, signInResult) {
        const vm = this;
        const cookies = [
            "uid",
            "success",
            "expired",
            "token",
        ];

        cookies.forEach((cookie) => {
            document.cookie = `${cookie}=${
                signInResult[cookie]
            }; expires=${new Date(signInResult.expired)};`;
        });
    },
    setState(state) {
        const vm = this;
        const states = [
            "uid",
            "success",
            "expired",
            "token",
        ];
        states.forEach((item) => {
            state[item] =
                decodeURIComponent(
                    document.cookie.replace(
                        new RegExp(
                            "(?:(?:^|.*;)\\s*" +
                                encodeURIComponent(
                                    item,
                                ).replace(
                                    /[-.+*]/g,
                                    "\\$&",
                                ) +
                                "\\s*\\=\\s*([^;]*).*$)|^.*$",
                        ),
                        "$1",
                    ),
                ) || "";
        });
        vm.$axios.setToken(state.token);
    },
    setUser(state, userEmail) {
        state.user = userEmail.substring(
            0,
            userEmail.indexOf("@"),
        );
        state.expired = document.cookie.replace(
            /(?:(?:^|.*;\s*)expired\s*=\s*([^;]*).*$)|^.*$/,
            "$1",
        );
        document.cookie = `user=${
            state.user
        }; expires=${new Date(state.expired)};`;
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
