<template>
    <nuxt-link
        :to="authenticated ? '' : signInData.link"
        class="w-full h-12 flex justify-start items-center transition-all duration-300 ease-linear pl-4 cursor-pointer overflow-hidden user-style"
        @mouseover.native="user.active = true"
        @mouseleave.native="user.active = false"
        @click.native="authenticated ? signOut() : ''"
    >
        <img :src="user.src" alt="" class="w-8 h-8" />

        <span
            v-if="authenticated"
            class="text-oldLace text-base leading-none uppercase py-4 pl-4"
            :class="{ 'title-active': user.active }"
            v-text="
                user.active
                    ? signOutData.cnTitle
                    : signOutData.engTitle
            "
        ></span>
        <span
            v-else
            class="text-oldLace text-base leading-none uppercase py-4 pl-4"
            :class="{ 'title-active': user.active }"
            v-text="
                user.active
                    ? signInData.cnTitle
                    : signInData.engTitle
            "
        ></span>
    </nuxt-link>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            user: {
                src: require("~/assets/images/bg/user.svg"),
                active: "",
            },
            signInData: {
                engTitle: "sign in",
                cnTitle: "登入",
                link: "/sign-in",
            },
            signOutData: {
                engTitle: "sign out",
                cnTitle: "登出",
            },
        };
    },
    computed: {
        ...mapState(["authenticated"]),
    },
    methods: {
        ...mapActions(["nuxtServerInit"]),
        ...mapMutations("user", [
            "removeCookie",
            "setState",
        ]),
        async signOut() {
            try {
                const vm = this;
                const signOutResult = await vm.$axios.$post(
                    `${process.env.baseUrl}/logout`,
                );

                if (signOutResult.success) {
                    console.log(signOutResult);
                    await vm.nuxtServerInit();
                    await vm.removeCookie();
                    await vm.setState();
                    vm.$router.push({ path: "/sign-in" });
                } else {
                    console.log(signOutResult);
                }
            } catch (error) {
                throw new Error(error);
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
