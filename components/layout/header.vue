<template>
    <header
        class="fixed z-40 left-0 w-full lg:w-50 h-15 lg:h-full header-style"
    >
        <Toggler></Toggler>
        <Logo
            class="absolute z-50 top-1 lg:top-15 left-1/2 transform -translate-x-1/2"
        ></Logo>
        <Cart
            class="absolute z-50 right-4 lg:hidden w-8 h-8"
        ></Cart>
    </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header-style {
    background-image: linear-gradient(
            $header-color,
            $header-color
        ),
        url("~assets/images/bg/gummy.png"),
        url("~assets/images/bg/bg.jpg");
    background-size: 200px;
}
</style>
