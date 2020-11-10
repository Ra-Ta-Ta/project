<template>
    <nav
        class="fixed z-30 top-15 left-0 lg:hidden w-full transform transition-all duration-500 ease-linear nav-style"
        :class="[
            togglerIsReversed
                ? ' translate-y-0  opacity-100'
                : ' -translate-y-full opacity-0',
        ]"
    >
        <Search
            :class="{
                'nav-active': nav.activeObj == 'search',
            }"
            @mouseover.native="nav.activeObj = 'search'"
            @mouseleave.native="nav.activeObj = ''"
        ></Search>
        <nuxt-link
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :to="menuItem.link"
            class="w-full flex items-center transition-all duration-300 ease-linear pl-4"
            :class="[
                menuItem.color,
                {
                    'nav-active':
                        nav.activeObj == menuItem.id,
                },
            ]"
            @mouseover.native="nav.activeObj = menuItem.id"
            @mouseleave.native="nav.activeObj = ''"
            @click.native="reverseToggler()"
        >
            <img
                :src="menuItem.src"
                :alt="menuItem.id"
                class="w-8 h-8"
            />
            <span
                class="text-oldLace text-base leading-none uppercase py-4 pl-4 title-style"
                :class="{
                    'title-active':
                        nav.activeObj == menuItem.id,
                }"
                v-text="
                    nav.activeObj == menuItem.id
                        ? menuItem.cnTitle
                        : menuItem.engTitle
                "
            ></span>
        </nuxt-link>
    </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            nav: {
                activeObj: "",
            },
            menuItems: [
                {
                    engTitle: "about us",
                    cnTitle: "關於我們",
                    link: "/about",
                    color: "bg-brass",
                    src: require("~/assets/images/bg/tongue.svg"),
                    id: "aboutUs",
                },
                {
                    engTitle: "shop",
                    cnTitle: "商店",
                    link: "/product",
                    color: "bg-maximumYellowRed",
                    src: require("~/assets/images/bg/candy.svg"),
                    id: "shop",
                },
                {
                    engTitle: "faq",
                    cnTitle: "常見問題",
                    link: "/faq",
                    color: "bg-terraCotta",
                    src: require("~/assets/images/bg/faq.svg"),
                    id: "faq",
                },
                {
                    engTitle: "login",
                    cnTitle: "會員登入",
                    link: "/login",
                    color: "bg-desire",
                    src: require("~/assets/images/bg/login.svg"),
                    id: "login",
                },
            ],
        };
    },
    mounted() {
        const vm = this;
        window.addEventListener("resize", vm.resizeScreen);
    },
    beforeDestroy() {
        const vm = this;
        window.removeEventListener(
            "resize",
            vm.resizeScreen,
        );
    },
    computed: {
        ...mapState("switchToggler", ["togglerIsReversed"]),
    },
    methods: {
        ...mapMutations("switchToggler", [
            "reverseToggler",
            "resizeScreen",
        ]),
    },
};
</script>

<style lang="scss" scoped>
.nav-style {
    background-image: url("~assets/images/bg/bg.jpg");
    background-size: 300px;
}

.nav-active {
    @include nav-active;
}
.title-active {
    @include title-active;
}
</style>
