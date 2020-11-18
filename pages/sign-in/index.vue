<template>
    <main
        class="w-full h-full flex justify-center items-center m-auto pt-19 lg:pt-4 p-4 main-style"
    >
        <form
            class="w-full bg-desertSand rounded-xl p-4 signIn-style"
            @submit.prevent="
                signIn({
                    username: email.email,
                    password: password.password,
                })
            "
        >
            <div
                class="inline-block text-oldLace mb-4 uppercase"
            >
                <span v-text="'sign in / '"></span>
                <span
                    v-text="'登入'"
                    class="text-ruddyBrown"
                ></span>
            </div>
            <label
                :for="email.id"
                class="relative flex w-full h-12 mb-4"
            >
                <img
                    :src="email.src"
                    :alt="email.id"
                    class="inline-block w-12 h-full border-oldLace border-2 rounded-l-lg py-2"
                />
                <input
                    type="email"
                    :id="email.id"
                    placeholder=" "
                    class="inline-block w-full h-full text-ruddyBrown bg-oldLace rounded-r-lg px-2 input-style"
                    v-model="email.email"
                    required
                />
                <span
                    v-text="email.id"
                    class="absolute top-3 left-14 text-ruddyBrown text-base uppercase pointer-events-none label-style"
                ></span>
            </label>
            <label
                :for="password.id"
                class="relative flex w-full h-12 mb-2"
            >
                <img
                    :src="password.src"
                    :alt="password.id"
                    class="inline-block w-12 h-full border-oldLace border-2 rounded-l-lg py-2"
                />
                <input
                    type="password"
                    :id="password.id"
                    pattern="[a-zA-Z0-9]{8,}"
                    placeholder=" "
                    class="inline-block w-full h-full text-ruddyBrown bg-oldLace rounded-r-lg px-2 input-style password-style"
                    v-model="password.password"
                    required
                />
                <span
                    v-text="password.id"
                    class="absolute top-3 left-14 text-ruddyBrown text-base uppercase pointer-events-none label-style"
                ></span>
            </label>
            <div class="flex items-center mb-2 -mx-4">
                <img
                    :src="scissors.src"
                    :alt="scissors.alt"
                    class="inline-block w-4 h-4"
                />
                <hr
                    class="w-full border border-oldLace border-dashed -ml-1"
                />
            </div>
            <button
                type="submit"
                class="inline-flex justify-center items-center w-3/12 h-12 bg-oldLace rounded-lg mr-4"
                @mouseover="signInBtn.active = true"
                @mouseleave="signInBtn.active = false"
            >
                <span
                    v-text="
                        signInBtn.active
                            ? signInBtn.cnTitle
                            : signInBtn.engTitle
                    "
                    class="inline-block text-ruddyBrown uppercase"
                    :class="{
                        'title-active': signInBtn.active,
                    }"
                ></span>
            </button>
            <nuxt-link
                :to="signUpBtn.link"
                class="inline-flex justify-center items-center w-3/12 h-12 bg-oldLace rounded-lg mr-4"
                @mouseover="signUpBtn.active = true"
                @mouseleave="signUpBtn.active = false"
            >
                <span
                    v-text="
                        signUpBtn.active
                            ? signUpBtn.cnTitle
                            : signUpBtn.engTitle
                    "
                    class="inline-block text-ruddyBrown uppercase"
                    :class="{
                        'title-active': signUpBtn.active,
                    }"
                ></span>
            </nuxt-link>
        </form>
    </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    layouts: "default",
    loading: true,
    data() {
        return {
            email: {
                src: require("~/assets/images/bg/email.svg"),
                id: "email",
                email: "jack5542856@gmail.com",
            },
            password: {
                src: require("~/assets/images/bg/password.svg"),
                id: "password",
                password: "j1a2c3k4",
            },
            scissors: {
                src: require("~/assets/images/component/scissors.svg"),
                alt: "scissors",
            },
            signInBtn: {
                engTitle: "sign in",
                cnTitle: "登入",
                active: false,
            },
            signUpBtn: {
                link: "/sign-in/sign-up",
                engTitle: "sign up",
                cnTitle: "註冊",
                active: false,
            },
        };
    },
    computed: {
        ...mapActions("signInStatus", ["authenticated"]),
    },
    methods: {
        ...mapActions("signInStatus", ["signIn"]),
    },
};
</script>

<style lang="scss" scoped>
.signIn-style {
    max-width: 576px;
}
.input-style {
    + .label-style {
        @include label;
    }
    &:focus + .label-style {
        @include input-focus-label(
            rgba(88, 130, 128, 0.75)
        );
    }
    &:not(:placeholder-shown) + .label-style {
        @include input-blur-label(rgba(179, 92, 47, 0.75));
    }
}
.password-style {
    font-family: "cursive";
}
.title-active {
    @include title-active;
}
</style>
