<template>
    <nav
        class="fixed left-0 transform transition-all duration-300 ease-linear nav-style"
        :class="[
            togglerIsReversed
                ? ' translate-y-0  opacity-100'
                : ' -translate-y-full opacity-0',
        ]"
    >
        <User
            class="w-full h-12 flex justify-start items-center transition-all duration-300 ease-linear pl-4 bg-desire"
            :class="{
                'icon-active': nav.activeObj == 'user',
            }"
            @mouseover.native="nav.activeObj = 'user'"
            @mouseleave.native="nav.activeObj = ''"
            @click.native="reverseToggler()"
        ></User>
        <nuxt-link
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :to="menuItem.link"
            class="w-full flex items-center transition-all duration-300 ease-linear pl-4"
            :class="[
                menuItem.color,
                menuItem.class,
                {
                    'icon-active':
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
                class="w-8 h-8 nav-img-style"
            />
            <span
                class="text-oldLace text-base leading-none uppercase py-4 pl-4 nav-title-style"
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
        <basket
            class="hidden"
            :class="{
                'icon-active': nav.activeObj == 'basket',
            }"
            @mouseover.native="nav.activeObj = 'basket'"
            @mouseleave.native="nav.activeObj = ''"
        ></basket>
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
                    class: "about-us-style",
                    src: require("~/assets/images/bg/tongue.svg"),
                    id: "aboutUs",
                },
                {
                    engTitle: "$hop",
                    cnTitle: "商店",
                    link: "/product",
                    class: "shop-style",
                    src: require("~/assets/images/bg/candy.svg"),
                    id: "shop",
                },
                {
                    engTitle: "faq",
                    cnTitle: "常見問題",
                    link: "/faq",
                    class: "faq-style",
                    src: require("~/assets/images/bg/faq.svg"),
                    id: "faq",
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
        ...mapState("toggler", ["togglerIsReversed"]),
    },
    methods: {
        ...mapMutations("toggler", [
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
.about-us-style {
    background-color: $about-us-color;
}
.shop-style {
    background-color: $shop-color;
}
.faq-style {
    background-color: $faq-color;
}
.icon-active {
    @include icon-active;
}

.title-active {
    @include title-active;
}
</style>
