<template>
    <nav
        class="flex justify-between items-center w-full h-15 transform transition-all duration-300 ease-linear px-4 m-auto nav-style"
        :class="[
            togglerIsReversed
                ? 'invisible opacity-100'
                : 'invisible opacity-0',
        ]"
    >
        <Toggler></Toggler>
        <Logo></Logo>
        <nuxt-link
            v-for="navItem in navItems"
            :key="navItem.id"
            :to="navItem.link"
            class="hidden max-content lg:flex items-center transition-all duration-300 ease-linear px-2"
            :class="{
                wobble: active === navItem.id,
            }"
            @mouseover.native="active = navItem.id"
            @mouseleave.native="active = ''"
            @click.native="reverseToggler()"
        >
            <img :src="navItem.src" class="h-8" />
            <span
                class="text-custom-white text-base leading-none uppercase pl-2"
                :class="{
                    'text-stripes': active === navItem.id,
                }"
                v-text="navItem.title"
            ></span>
        </nuxt-link>
        <Search></Search>
        <Basket></Basket>
    </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import logo from "./logo.vue";
export default {
    components: { logo },
    data() {
        return {
            active: "",
            navItems: [
                {
                    title: "gummy bears",
                    link: "/gummy-bear",
                    src: require("~/assets/images/bg/gummy-bear.svg"),
                    id: "bears",
                },
                {
                    title: "gummy worms",
                    link: "/gummy-worms",
                    src: require("~/assets/images/bg/gummy-worm.svg"),
                    id: "worms",
                },
                {
                    title: "special gummy",
                    link: "/special-gummy",
                    src: require("~/assets/images/bg/candy.svg"),
                    id: "special",
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
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    background-color: rgba(250, 245, 232, 0.2);
    backdrop-filter: blur(5px);
}
.wobble {
    @include wobble;
}
.text-stripes {
    @include text-stripes;
}
</style>
