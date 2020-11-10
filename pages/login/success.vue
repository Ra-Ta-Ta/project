<template>
    <main
        class="w-full h-full flex justify-center items-center m-auto pt-19 lg:pt-4 p-4 bg-no-repeat bg-cover main-style"
    >
        <div
            class="w-full bg-terraCotta rounded-xl p-4 login-style"
        >
            <span
                class="inline-block text-oldLace mb-4 uppercase"
                v-text="'login / 登入'"
            ></span>
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
                    class="inline-block w-full h-full text-terraCotta bg-oldLace rounded-r-lg px-2 input-style"
                    required
                />
                <span
                    v-text="email.id"
                    class="absolute top-3 left-14 text-terraCotta text-base uppercase pointer-events-none label-style"
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
                    class="inline-block w-full h-full text-terraCotta bg-oldLace rounded-r-lg px-2 input-style"
                />
                <span
                    v-text="password.id"
                    class="absolute top-3 left-14 text-terraCotta text-base uppercase pointer-events-none label-style"
                ></span>
            </label>
            <div class="flex items-center mb-2 -mx-4">
                <img
                    :src="scissors.src"
                    :alt="scissors.id"
                    class="inline-block w-4 h-4"
                />
                <hr
                    class="w-full border border-oldLace border-dashed -ml-1"
                />
            </div>
            <div class="flex h-12 mb-3">
                <nuxt-link
                    v-for="link in links"
                    :key="link.engTitle"
                    :to="link.link"
                    class="w-3/12 h-full bg-oldLace rounded-lg mr-4"
                    @mouseover="link.active = true"
                    @mouseleave="link.active = false"
                >
                    <span
                        v-text="
                            link.active
                                ? link.cnTitle
                                : link.engTitle
                        "
                        class="inline-block text-terraCotta uppercase"
                        :class="{
                            'title-active': link.active,
                        }"
                    ></span>
                </nuxt-link>
            </div>
            <nuxt-link
                to="/login/forgot-password"
                v-text="'forgot password ? / 忘記密碼 ?'"
                class="text-oldLace uppercase"
            ></nuxt-link>
        </div>
    </main>
</template>

<script>
export default {
    layouts: "default",
    data() {
        return {
            email: {
                src: require("~/assets/images/bg/login.svg"),
                id: "email",
            },
            password: {
                src: require("~/assets/images/bg/padlock.svg"),
                id: "password",
            },
            scissors: {
                src: require("~/assets/images/component/scissors.svg"),
                id: "scissors",
            },
            links: [
                {
                    engTitle: "sign in",
                    cnTitle: "登入",
                    link: "/success",
                    active: false,
                },
                {
                    engTitle: "sign up",
                    cnTitle: "註冊",
                    link: "/sign-up",
                    active: false,
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.main-style {
    background-color: rgba(0, 0, 0, 0.5);
}
.login-style {
    max-width: 576px;
}
.input-style {
    + .label-style {
        @include label;
    }
    &:focus + .label-style {
        @include input-focus-label(rgba(156, 36, 64, 0.75));
    }
    &:not(:placeholder-shown) + .label-style {
        @include input-blur-label(rgba(239, 124, 95, 0.75));
    }
}
.title-active {
    @include title-active;
}
</style>
