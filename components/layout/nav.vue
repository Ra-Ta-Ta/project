<template>
    <nav class="w-full nav-style">
        <Search
            :class="{ active: activeObj == 'search' }"
            @mouseover.native="activeObj = 'search'"
            @mouseleave.native="activeObj = ''"
        ></Search>
        <nuxt-link
            v-for="menuItem in menuItems"
            :key="menuItem.alt"
            :to="menuItem.link"
            class="w-full flex items-center transition-all duration-300 ease-linear pl-4"
            :class="[
                menuItem.color,
                { active: activeObj == menuItem.alt },
            ]"
            @mouseover.native="activeObj = menuItem.alt"
            @mouseleave.native="activeObj = ''"
            @click.native="
                $emit('slide-nav');
                reverseToggler();
            "
        >
            <img
                :src="menuItem.src"
                :alt="menuItem.alt"
                class="w-8 h-8"
            />
            <span
                class="text-oldLace text-base leading-none uppercase py-4 pl-4 title-style"
                :class="{
                    'title-active':
                        activeObj == menuItem.alt,
                }"
                v-text="
                    activeObj == menuItem.alt
                        ? menuItem.cnTitle
                        : menuItem.engTitle
                "
            ></span>
        </nuxt-link>
        <Cart
            class="w-full h-12 justify-start items-center transition-all duration-300 ease-linear pl-4 bg-bigDipOruby hidden lg:flex"
            :class="{ active: activeObj == 'cart' }"
            @mouseover.native="activeObj = 'cart'"
            @mouseleave.native="activeObj = ''"
            @click.native="
                $emit('slide-nav');
                reverseToggler();
            "
        ></Cart>
    </nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    props: ["slide-nav"],
    data() {
        return {
            activeObj: "",
            menuItems: [
                {
                    engTitle: "about us",
                    cnTitle: "關於我們",
                    link: "./about",
                    color: "bg-brass",
                    src: require("~/assets/images/bg/tongue.svg"),
                    alt: "aboutUs",
                },
                {
                    engTitle: "shop",
                    cnTitle: "商店",
                    link: "./product",
                    color: "bg-maximumYellowRed",
                    src: require("~/assets/images/bg/candy.svg"),
                    alt: "shop",
                },
                {
                    engTitle: "faq",
                    cnTitle: "常見問題",
                    link: "./faq",
                    color: "bg-terraCotta",
                    src: require("~/assets/images/bg/faq.svg"),
                    alt: "faq",
                },
                {
                    engTitle: "login",
                    cnTitle: "會員登入",
                    link: "./login",
                    color: "bg-desire",
                    src: require("~/assets/images/bg/login.svg"),
                    alt: "login",
                },
            ],
        };
    },
    methods: {
        ...mapMutations("switchToggler", [
            "reverseToggler",
        ]),
    },
};
</script>

<style scoped>
.nav-style {
    background-image: url("~assets/images/bg/bg.jpg");
    background-size: 300px;
}
.active {
    filter: brightness(1.25);
}
.title-active {
    animation: title-active 0.3s;
}
@keyframes title-active {
    0% {
        transform: translateX(10px);
        opacity: 0;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}
</style>
