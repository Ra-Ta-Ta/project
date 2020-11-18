<template>
    <nuxt-link
        :to="user.link"
        class="w-full h-12 flex justify-start items-center transition-all duration-300 ease-linear pl-4 cursor-pointer overflow-hidden user-style"
        @mouseover.native="user.active = true"
        @mouseleave.native="user.active = false"
        @click.native="authenticated ? signOut() : ''"
    >
        <img
            :src="user.src"
            :alt="`${user.id}`"
            class="w-8 h-8"
        />

        <span
            class="text-oldLace text-base leading-none uppercase py-4 pl-4"
            :class="{ 'title-active': user.active }"
            v-text="
                user.active ? user.cnTitle : user.engTitle
            "
        ></span>
    </nuxt-link>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            user: {
                engTitle: "sign in",
                cnTitle: "登入",
                link: "/sign-in",
                src: require("~/assets/images/bg/user.svg"),
                id: "user",
                active: "",
            },
        };
    },
    mounted() {
        const vm = this;
        vm.setAuthenticated();
    },
    watch: {
        authenticated() {
            const vm = this;
            vm.checkAuthenticated();
        },
    },
    computed: {
        ...mapState("signInStatus", [
            "expired",
            "authenticated",
        ]),
    },
    methods: {
        ...mapMutations("signInStatus", [
            "setAuthenticated",
        ]),
        async signOut() {
            try {
                const vm = this;
                const signOutApi = `${process.env.baseUrl}/logout`;
                const signOutResult = await vm.$axios.$post(
                    signOutApi,
                );

                if (signOutResult.success) {
                    console.log(
                        "signOutResult",
                        signOutResult,
                    );
                    document.cookie
                        .split(";")
                        .forEach(function (cookie) {
                            document.cookie = cookie
                                .replace(/^ +/, "")
                                .replace(
                                    /=.*/,
                                    "=;expires=" +
                                        new Date().toUTCString() +
                                        ";",
                                );
                        });
                    vm.setAuthenticated();
                    vm.$router.push({ path: "/sign-in" });
                } else {
                    console.log(
                        "signOutResult",
                        signOutResult,
                    );
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        checkAuthenticated() {
            const vm = this;
            if (vm.authenticated) {
                vm.user.engTitle = "sign out";
                vm.user.cnTitle = "登出";
                vm.user.link = "";
            } else {
                vm.user.engTitle = "sign in";
                vm.user.cnTitle = "登入";
                vm.user.link = "/sign-in";
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.user-style {
    background-color: $user-color;
    top: 14px;
}
.capacity-style {
    bottom: 2px;
    text-indent: 2px;
}
.title-active {
    @include title-active;
}
</style>
