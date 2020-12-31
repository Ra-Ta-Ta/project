<template>
    <div
        class="fixed w-full h-full bg-center bg-repeat bg-100 overflow-x-hidden overflow-y-scroll scrolling-touch bg-style"
    >
        <Header>
            <template v-slot:content>
                <Toggler></Toggler>
                <Search></Search>
                <Basket></Basket>
            </template>
        </Header>
        <Nav class="z-30 top-15 lg:hidden w-full"></Nav>

        <Nuxt />
    </div>
</template>

<script>
export default {
    mounted() {
        const vm = this;
        vm.$nextTick(() => {
            vm.$nuxt.$loading.start();
            setTimeout(
                () => vm.$nuxt.$loading.finish(),
                2000,
            );
        });
    },
};
</script>

<style lang="scss" scoped>
.bg-style {
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
