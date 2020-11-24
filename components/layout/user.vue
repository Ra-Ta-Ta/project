<template>
    <nuxt-link
        :to="success === 'true' ? '' : signInData.link"
        class="w-full h-12 flex justify-start items-center transition-all duration-300 ease-linear pl-4 cursor-pointer overflow-hidden user-style"
        @mouseover.native="user.active = true"
        @mouseleave.native="user.active = false"
        @click.native="success === 'true' ? signOut() : ''"
    >
        <img :src="user.src" alt="" class="w-8 h-8" />

        <span
            v-if="success === 'true'"
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
import { mapState, mapActions } from "vuex";
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
    mounted() {
        const vm = this;
        vm.checkStatus();
    },
    computed: {
        ...mapState("signInStatus", ["expired", "success"]),
    },
    methods: {
        ...mapActions("signInStatus", ["checkStatus"]),
        async signOut() {
            try {
                const vm = this;
                const signOutResult = await vm.$axios.$post(
                    `${process.env.baseUrl}/logout`,
                );

                if (signOutResult.success) {
                    console.log(signOutResult);
                    const cookies = {
                        success: false,
                        uid: "",
                        user: "",
                        expired: "",
                    };
                    for (let cookie in cookies) {
                        document.cookie = `${cookie}=${
                            cookies[cookie]
                        }; expires=${new Date(
                            vm.expired,
                        )};`;
                    }
                    vm.checkStatus();
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
