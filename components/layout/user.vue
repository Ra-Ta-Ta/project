<template>
    <nuxt-link
        :to="authenticated ? '' : signInData.link"
        class="flex items-center h-8 transition-all duration-300 ease-linear cursor-pointer overflow-hidden mr-2 user-style"
        @mouseover.native="user.active = true"
        @mouseleave.native="user.active = false"
        @click.native="authenticated ? signOut() : ''"
    >
        <img
            :src="user.src"
            alt=""
            class="w-8 h-8"
            :class="{ wobble: user.active }"
        />

        <span
            v-if="authenticated"
            class="hidden md:inline-block text-custom-white text-base leading-none uppercase tracking-wider pl-2"
            :class="{ 'text-stripes': user.active }"
            v-text="signOutData.title"
        ></span>
        <span
            v-else
            class="hidden lg:inline-block text-custom-white text-base leading-none uppercase tracking-wider pl-2"
            :class="{ 'text-stripes': user.active }"
            v-text="signInData.title"
        ></span>
    </nuxt-link>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            user: {
                src: require("~/assets/images/bg/user.svg"),
                active: "",
            },
            signInData: {
                title: "sign in",
                link: "/sign-in",
            },
            signOutData: {
                title: "sign out",
            },
        };
    },
    computed: {
        ...mapState(["authenticated"]),
    },
    methods: {
        ...mapMutations(["setAuthenticated"]),
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
                    await vm.setAuthenticated(false);
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
}
.wobble {
    @include wobble;
}
.text-stripes {
    @include text-stripes;
}
</style>
