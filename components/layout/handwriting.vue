<template>
    <div class="m-auto handwriting-style">
        <h1
            class="text-center uppercase leading-none text-custom-yellow font-style"
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
                    :class="{
                        ' face-style': char === 'o',
                    }"
                    ref="char"
                ></span>
            </div>
        </h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstRow: ["s", "u", "g", "a", "r"],
            secondRow: ["t", "o", "n", "g", "u", "e"],
        };
    },
    mounted() {
        const vm = this;
        vm.handwriting();
    },

    methods: {
        handwriting() {
            const vm = this;
            const paths = vm.$refs;

            // gsap.to(paths, {
            //     duration: 1,
            //     strokeDashoffset: 0,
            //     ease: Linear.easeNone,
            //     stagger: 0.5,
            // });
        },
    },
};
</script>
<style lang="scss" scoped>
.handwriting-style {
    max-width: 980px;
}
.font-style {
    font-size: calc(1rem + 10vmin);
    text-indent: 0.25em;
    letter-spacing: 0.25em;
}
.face-style {
    background: url("~assets/images/bg/tongue.svg")
        no-repeat center;
    background-size: 0.25em 0.75em;
}
</style>
