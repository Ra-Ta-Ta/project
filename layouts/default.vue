<template>
    <div
        class="fixed w-full h-full bg-center bg-repeat bg-100 overflow-x-hidden overflow-y-scroll scrolling-touch lg:pl-50 bg-style"
    >
        <Header
            class="lg:hidden header-style"
            @slide-nav="slideNav"
        ></Header>
        <Nav
            class="fixed z-10 top-15 opacity-1 header-nav-style"
            ref="nav"
            :style="{ transform: 'translateY(-100%)' }"
        ></Nav>
        <Sidebar class="hidden lg:flex"></Sidebar>
        <Nuxt />
    </div>
</template>

<script>
export default {
    data() {
        return {
            animation: "",
        };
    },
    mounted() {
        const vm = this;
        const { nav } = vm.$refs;
        vm.animation = gsap
            .timeline({
                defaults: {
                    duration: 0.5,
                },
            })
            .to(nav.$el, {
                yPercent: 100,
                opacity: 1,
            })
            .reversed(true);

        vm.$nextTick(() => {
            vm.$nuxt.$loading.start();

            setTimeout(
                () => vm.$nuxt.$loading.finish(),
                500,
            );
        });
    },
    methods: {
        slideNav() {
            const vm = this;
            vm.animation.reversed()
                ? vm.animation.play()
                : vm.animation.reverse();
        },
    },
};
</script>

<style scoped>
.bg-style {
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
