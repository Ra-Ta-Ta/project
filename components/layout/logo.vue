<template>
    <nuxt-link
        class="absolute z-50 top-1 lg:top-15 left-1/2 transform -translate-x-1/2 logo-style"
        to="/"
        @click.native="
            togglerIsReversed ? reverseToggler() : ''
        "
    >
        <h1
            class="text-center uppercase leading-none font-style"
            ref="logo"
        >
            sugar<br />t<span
                class="inline-block face-style"
                ref="face"
                >o</span
            >ngue
        </h1>
    </nuxt-link>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {};
    },
    mounted() {
        const vm = this;
        const { logo, face } = vm.$refs;
        const st = new SplitText([logo], {
            type: "chars",
        });
        const tl = gsap.timeline({
            defaults: { duration: 0.5 },
        });
        tl.from(st.chars, {
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50%",
            ease: Back.easeOut,
            delay: 2,
            stagger: {
                from: 0,
                amount: 0.5,
            },
        }).to(face, {
            keyframes: [
                {
                    rotationX: 180,
                    scale: 3,
                    color: "transparent",
                    backgroundSize: "20px 20px",
                },
                {
                    rotationX: 360,
                    scale: 1,
                },
            ],
        });
    },
    computed: {
        ...mapState("toggler", ["togglerIsReversed"]),
    },
    methods: {
        ...mapMutations("toggler", ["reverseToggler"]),
    },
};
</script>
<style lang="scss" scoped>
.logo-style {
    width: max-content;
    transform-style: preserve-3d;
    perspective: 300px;
}
.font-style {
    font-family: "Cabin Sketch";
    font-size: 26px;
    color: rgba(235, 206, 146, 1);
    letter-spacing: 0.5em;
    /* text-indent: 0.5em; */
}
.face-style {
    background: url("~assets/images/bg/face.svg") no-repeat
        0% 45%;
    background-size: 0px 0px;
    transform-origin: 30% center;
}
</style>
