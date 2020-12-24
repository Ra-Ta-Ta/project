const state = () => {
    return {
        user: "",
        uid: "",
        expired: "",
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
                await commit("setState", true, {
                    root: true,
                });
                await commit("setCookie", signInResult);
                await commit("setUser", userData.username);
                await commit("setState");
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
            const checkStatusResult = await vm.$axios.$post(
                `${process.env.baseUrl}/api/user/check`,
            );
            console.log(vm.$cookies.get("user"));
            if (checkStatusResult.success) {
                console.log(checkStatusResult);
                if (vm.$cookies.get("user") !== undefined) {
                    await commit("setState");
                } else {
                    vm.$router.push({ path: "/sign-in" });
                }
            } else {
                console.log(checkStatusResult);
                vm.$router.push({ path: "/sign-in" });
            }
        } catch (error) {
            throw new Error(error);
        }
    },
};

const mutations = {
    setCookie(state, signInResult) {
        const vm = this;
        const options = {
            expires: new Date(signInResult.expired),
        };
        const cookieList = [
            {
                name: "uid",
                value: signInResult.uid,
                opts: options,
            },
            {
                name: "expired",
                value: signInResult.expired,
                opts: options,
            },
            {
                name: "token",
                value: signInResult.token,
                opts: options,
            },
        ];
        vm.$cookies.setAll(cookieList);
    },
    removeCookie(state) {
        const vm = this;
        vm.$cookies.removeAll();
    },
    setState(state) {
        const vm = this;
        const states = ["user", "uid", "expired", "token"];
        const cookies = vm.$cookies.getAll();
        states.forEach((item) => {
            state[item] = cookies[item];
        });
        vm.$axios.setToken(state.token);
    },
    setUser(state, userEmail) {
        const vm = this;
        const user = userEmail.substring(
            0,
            userEmail.indexOf("@"),
        );
        const expired = new Date(
            vm.$cookies.get("expired"),
        );
        vm.$cookies.set("user", user, {
            expires: expired,
        });
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
