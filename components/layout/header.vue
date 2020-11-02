<template>
    <header
        class="fixed z-20 w-full h-15 header-style"
        ref="header"
    >
        <Toggler @click.native="slideNav"></Toggler>
        <Logo
            class="absolute z-30 top-1 left-1/2 transform -translate-x-1/2"
        ></Logo>
        <Cart class="absolute z-30 right-4 w-8 h-8"></Cart>
        <div
            class="absolute bottom-0 w-full header-nav-style"
            ref="nav"
        >
            <Nav></Nav>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            nav: {
                animation: "",
            },
        };
    },
    mounted() {
        const vm = this;
        const { header, nav } = vm.$refs;
        console.log(nav);
        vm.nav.animation = gsap
            .timeline({
                defaults: {
                    duration: 0.5,
                },
            })
            .to(nav, {
                transform: "translate3d(0px,100%,-1px)",
            })
            .reversed(true);
    },
    methods: {
        slideNav() {
            const vm = this;
            vm.nav.animation.reversed()
                ? vm.nav.animation.play()
                : vm.nav.animation.reverse();
        },
    },
};
</script>
<style scoped>
.header-style {
    background-image: linear-gradient(
            rgba(34, 50, 22, 0.8),
            rgba(34, 50, 22, 0.8)
        ),
        url("~assets/images/bg/flower.png"),
        url("~assets/images/bg/bg.jpg");
    background-size: 300px;
    transform-style: preserve-3d;
}
.header-nav-style {
    transform: translate3d(0px, -100%, -1px);
}
</style>
