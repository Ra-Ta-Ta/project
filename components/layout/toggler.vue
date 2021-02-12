<template>
    <div
        class="relative lg:hidden w-7 h-7 cursor-pointer toggler-style"
        @click="reverseToggler"
    >
        <span
            v-for="(line, i) in lines"
            :key="`line${i}`"
            class="absolute block w-full h-1 rounded-xl bg-custom-white translate-all duration-150 ease-linear line-style"
            :style="line"
            :ref="`line${i}`"
        ></span>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            animation: "",
            lines: [
                { top: "2px" },
                {
                    top: "12px",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                },
                { top: "22px" },
            ],
        };
    },
    mounted() {
        const vm = this;
        const { line0, line1, line2 } = vm.$refs;
        vm.animation = gsap
            .timeline({
                defaults: {
                    duration: 0.5,
                },
            })
            .to(line0, { top: 12, rotate: 405 })
            .to(line1, { width: 0 }, "<")
            .to(
                line2,
                {
                    top: 12,
                    rotate: -405,
                },
                "<",
            )
            .reversed(true);
    },
    watch: {
        togglerIsReversed() {
            const vm = this;
            vm.togglerIsReversed
                ? vm.animation.play()
                : vm.animation.reverse();
        },
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
.toggler-style {
    &:hover .line-style {
        background-color: rgba(200, 154, 52, 0.75);
    }
}
</style>
