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
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
    &:hover {
        transform: perspective(200px) rotateY(-30deg);
        filter: brightness(1.25);
    }
}
</style>
