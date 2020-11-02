<template>
    <div
        class="relative h-screen bg-center bg-repeat bg-100 overflow-x-hidden overflow-y-scroll scrolling-touch lg:pl-50 bg-style"
    >
        <Header class="lg:hidden header-style"> </Header>
        <Sidebar class="hidden lg:flex"></Sidebar>
        <Nuxt />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {
        const vm = this;

        vm.$nextTick(() => {
            vm.$nuxt.$loading.start();

            setTimeout(
                () => vm.$nuxt.$loading.finish(),
                500,
            );
        });
        window.addEventListener("resize", vm.vhHandler);
    },
    beforeDestroy() {
        const vm = this;
        window.removeEventListener("resize", vm.vhHandler);
    },
    methods: {
        vhHandler() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty(
                "--vh",
                `${vh}px`,
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.bg-style {
    height: calc(var(--vh, 1vh) * 100);
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
