<template>
    <div class="m-auto px-4 whitespace-no-wrap">
        <div class="w-fit-content">
            <span
                v-for="word in words"
                :key="word"
                ref="words"
                v-text="word"
                class="inline-block leading-none uppercase text-transparent bg-clip-text word-style"
            ></span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            words: ["worms", "worms", "worms"],
        };
    },
    mounted() {
        const vm = this;
        vm.marquee();
    },
    methods: {
        marquee() {
            const vm = this;
            const { words } = vm.$refs;
            words.forEach((word) => {
                let margin = parseInt(
                    window.getComputedStyle(word)
                        .marginRight,
                );
                let width = word.clientWidth + margin;

                gsap.fromTo(
                    words,
                    { x: -width },
                    {
                        x: 0,
                        ease: Linear.easeNone,
                        duration: 10,
                        repeat: -1,
                    },
                );
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.word-style {
    background-image: url("~assets/images/bg/worms.gif");
    font-family: "Rubik Mono One";
    font-size: 25vmin;
    margin-right: 10vmin;
}
</style>
