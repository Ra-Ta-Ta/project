<template>
    <div
        class="fixed w-full h-full bg-center bg-repeat bg-100 overflow-x-hidden overflow-y-scroll scrolling-touch lg:pl-50 bg-style"
    >
        <Header>
            <template v-slot:content>
                <Toggler></Toggler>
                <Cart class="lg:hidden"></Cart>
            </template>
        </Header>
        <Nav class="z-30 top-15 lg:hidden w-full"></Nav>
        <Nav
            class="z-50 top-43 hidden lg:block w-50 opacity-100 transform-none"
        >
        </Nav>
        <Nuxt />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-style {
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
