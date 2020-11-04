<template>
    <header class="fixed z-20 w-full h-15 header-style">
        <Toggler
            @click.native="$emit('slide-nav')"
        ></Toggler>
        <Logo
            class="absolute z-30 top-1 left-1/2 transform -translate-x-1/2"
        ></Logo>
        <Cart class="absolute z-30 right-4 w-8 h-8"></Cart>
    </header>
</template>
<script>
export default {
    props: ["slide-nav"],
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
}
</style>
