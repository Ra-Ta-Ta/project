<template>
    <nav
        class="fixed z-50 top-43 left-0 hidden lg:block w-50 nav-style"
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
        <Cart
            class="w-full h-12 flex justify-start items-center transition-all duration-300 ease-linear pl-4 bg-bigDipOruby"
            :class="{
                'nav-active': nav.activeObj == 'cart',
            }"
            @mouseover.native="nav.activeObj = 'cart'"
            @mouseleave.native="nav.activeObj = ''"
        ></Cart>
    </nav>
</template>

<script>
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
