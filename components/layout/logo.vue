<template>
    <nuxt-link
        class="block m-auto logo-style"
        to="/"
        @click.native="
            togglerIsReversed ? reverseToggler() : ''
        "
    >
        <h1
            class="text-center uppercase leading-none text-custom-white font-style"
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
            const tl = gsap.timeline();
            tl.from(char, {
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                ease: Back.easeOut,
                duration: 0.5,
                stagger: {
                    from: 0,
                    amount: 0.5,
                },
            }).to(char, {
                clearProps: "all",
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.font-style {
    font-size: 26px;
    text-indent: 0.25em;
    letter-spacing: 0.25em;
}
.face-style {
}
</style>
