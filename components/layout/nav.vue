<template>
    <nav
        class="flex justify-between items-center w-full h-15 px-4 m-auto"
        :class="[
            togglerIsReversed
                ? ' opacity-100'
                : ' opacity-100',
        ]"
        ref="nav"
    >
        <nuxt-link
            v-for="navItem in navItems"
            :key="navItem.id"
            :to="navItem.link"
            class="flex items-center flex-no-wrap transition-all duration-300 ease-linear px-2"
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
    </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
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
        vm.scrollTrigger();
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
        scrollTrigger() {
            const vm = this;
            const { nav } = vm.$refs;
            // const logo = vm.$parent.$refs.logo.$el;
            gsap.to(nav, {
                position: "fixed",
                // top: 0,
                // boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.2)",
                // backgroundColor:
                //     " rgba(250, 245, 232, 0.2)",
                // backdropFilter: "blur(5px)",
                y: 300,
                scrollTrigger: {
                    trigger: nav,
                    start: "top top",
                    end: `bottom top `,
                    markers: true,
                },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.wobble {
    @include wobble;
}
.text-stripes {
    @include text-stripes;
}
</style>
