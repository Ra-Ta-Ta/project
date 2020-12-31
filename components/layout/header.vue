<template>
    <header
        class="fixed z-40 left-0 w-full h-15 header-style"
    >
        <Logo></Logo>
        <slot name="content"></slot>
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
