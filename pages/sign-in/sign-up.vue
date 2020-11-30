<template>
    <main
        class="w-full h-full flex justify-center items-center m-auto pt-19 lg:pt-4 p-4 main-style"
    >
        <form
            class="w-full bg-desertSand rounded-xl p-4 signIn-style"
            @submit.prevent="signIn"
        >
            <div
                class="inline-block text-oldLace text-6 font-bold mb-3 uppercase"
            >
                <span v-text="'sign up / '"></span>
                <span
                    v-text="'註冊'"
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
                class="relative flex w-full h-12 mb-4"
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
            <label
                :for="confirmPassword.id"
                class="relative flex w-full h-12 mb-2"
            >
                <img
                    :src="confirmPassword.src"
                    :alt="confirmPassword.id"
                    class="inline-block w-12 h-full border-oldLace border-2 rounded-l-lg py-2"
                />
                <input
                    type="password"
                    :id="confirmPassword.id"
                    pattern="[a-zA-Z0-9]{8,}"
                    placeholder=" "
                    class="inline-block w-full h-full text-ruddyBrown bg-oldLace rounded-r-lg px-2 input-style password-style"
                    v-model="confirmPassword.password"
                    required
                />
                <span
                    v-text="confirmPassword.id"
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
                class="inline-flex justify-center items-center w-3/12 h-12 font-bold bg-oldLace rounded-lg mr-4"
                @mouseover="createAccount.active = true"
                @mouseleave="createAccount.active = false"
            >
                <span
                    v-text="
                        createAccount.active
                            ? createAccount.cnTitle
                            : createAccount.engTitle
                    "
                    class="inline-block text-ruddyBrown uppercase"
                    :class="{
                        'title-active':
                            createAccount.active,
                    }"
                ></span>
            </button>
        </form>
    </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    layouts: "default",
    data() {
        return {
            email: {
                src: require("~/assets/images/bg/email.svg"),
                id: "email",
                email: "b4502@gmail.com",
            },
            password: {
                src: require("~/assets/images/bg/password.svg"),
                id: "password",
                password: "45024502",
            },
            confirmPassword: {
                src: require("~/assets/images/bg/confirm-password.svg"),
                id: "confirm password",
                password: "45024502",
            },
            scissors: {
                src: require("~/assets/images/component/scissors.svg"),
                alt: "scissors",
            },
            createAccount: {
                engTitle: "create account",
                cnTitle: "建立帳戶",
                active: false,
            },
        };
    },
    computed: {
        ...mapState("user", ["uid"]),
    },
    methods: {
        ...mapActions("user", ["signIn"]),
        async postSignUpData() {
            try {
                const vm = this;
                const signUpApi = `${process.env.baseUrl}/signup`;
                const signUpResult = await vm.$axios.$post(
                    signUpApi,
                    {
                        username: vm.email.email,
                        password: vm.password.password,
                        confirm_password:
                            vm.confirmPassword.password,
                    },
                );
                if (signUpResult.success) {
                    console.log("sign up success");

                    await vm.postSignInData({
                        username: vm.email.email,
                        password: vm.password.password,
                    });

                    await vm.setApiPath();
                } else {
                    console.log("sign up fail");
                    await vm.postSignInData({
                        username: vm.email.email,
                        password: vm.password.password,
                    });

                    await vm.setApiPath();
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        async setApiPath() {
            try {
                const vm = this;
                const apiPathName = vm.email.email.substring(
                    0,
                    vm.email.email.indexOf("@"),
                );
                const setPathResult = await vm.$axios.$post(
                    `/api/user/${vm.uid}/path`,
                    {
                        path: apiPathName,
                    },
                );
                if (setPathResult.success) {
                    console.log(
                        "setPathResult",
                        setPathResult,
                    );
                } else {
                    console.log(
                        "setPathResult",
                        setPathResult,
                    );
                }
            } catch (error) {
                throw new Error(error);
            }
        },
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
