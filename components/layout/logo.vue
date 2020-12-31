<template>
    <nuxt-link
        class="absolute z-50 top-1 left-1/2 transform -translate-x-1/2 logo-style"
        to="/"
        @click.native="
            togglerIsReversed ? reverseToggler() : ''
        "
    >
        <h1
            class="text-center uppercase leading-none font-style"
            ref="logo"
        >
            <div>
                <span
                    v-for="char in firstRow"
                    :key="char"
                    v-text="char"
                    class="inline-block"
                    ref="char"
                ></span>
            </div>
            <div>
                <span
                    v-for="char in secondRow"
                    :key="char"
                    v-text="char"
                    class="inline-block"
                    :class="{ 'face-style': char === 'o' }"
                    ref="char"
                ></span>
            </div>
        </h1>
    </nuxt-link>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            firstRow: ["s", "u", "g", "a", "r"],
            secondRow: ["t", "o", "n", "g", "u", "e"],
        };
    },
    mounted() {
        const vm = this;
        vm.charWave();
    },
    computed: {
        ...mapState("toggler", ["togglerIsReversed"]),
    },
    methods: {
        ...mapMutations("toggler", ["reverseToggler"]),
        charWave() {
            const vm = this;
            const { char } = vm.$refs;
            gsap.from(char, {
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                ease: Back.easeOut,
                delay: 2,
                duration: 0.5,
                stagger: {
                    from: 0,
                    amount: 0.5,
                },
            });
        },
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
}
.face-style {
    background: url("~assets/images/bg/face.svg") no-repeat
        0% 40%;
    background-size: 20px 20px;
    transform-origin: 30% center;
    color: transparent;
    letter-spacing: 0.6em;
}
</style>
