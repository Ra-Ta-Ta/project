<template>
    <button
        class="tracking-widest rounded-lg transform-all duration-150 ease-linear px-2 sm:px-4 py-1 sm:py-2 button-style"
    ></button>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.button-style {
    &:hover {
        box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
        transform: perspective(200px) rotateY(-30deg);
        filter: brightness(1.1);
    }
}
</style>
